import { Component, _decorator, Node } from "cc";
import { DIRECTION_ENUM, ENITIY_TYPE_ENUM, ENITIY_TYPE_SPIKES_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT } from "../../Enum";
import levels, { ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import { BurstMgr } from "../Burst/BurstMgr";
import { DoorMgr } from "../Door/DoorMgr";
import { IronMgr } from "../Enemy/Iron/IronMgr";
import { WoodenMgr } from "../Enemy/Wooden/WoodenMgr";
import { PlayerMrg } from "../Player/PlayerMgr";
import DataManager from "../Runtime/DataManager";
import { SpikesMgr } from "../Spikes/SpikesMgr";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";

const TILE_WIDTH = 55
const TILE_HEIGHT = 55
const { ccclass, property } = _decorator;
@ccclass('UIBattleScene')
export class UIBattleScene extends Component {
    level: ILevel
    stage: Node
    start() {
        this.generateStage()
        this.initLevel()
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_NEXTLEVEL, this.nextLevelMap, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_NEXTLEVEL, this.nextLevelMap)
    }

    initLevel() {
        this.clearLevelMap()
        const level = levels[`level${DataManager.Instance.levelIndex}`]
        if (level) {
            DataManager.Instance.mapInfo = level.mapInfo
            DataManager.Instance.mapColumCount = level.mapInfo[0].length //列
            DataManager.Instance.mapRowCount = level.mapInfo.length
        }

        this.generateTileMap()
        // this.generateBurst()
        // this.generateWooden()
        // this.generateIron()
        this.generateSpikes()
        this.generateDoor()
        this.generatePlayer()
        this.fitPos()
    }

    nextLevelMap() {
        DataManager.Instance.levelIndex++
        this.initLevel()
    }

    clearLevelMap() {
        this.stage.removeAllChildren()
        DataManager.Instance.reset()
    }

    generateStage() {
        const stageNode = createNewNode()
        stageNode.setParent(this.node)
        this.stage = stageNode
    }

    async generateTileMap() {
        const tileMapNode = createNewNode()
        tileMapNode.setParent(this.stage)
        const tileMapManager = tileMapNode.addComponent(TileMapManager)
        await tileMapManager.init()
    }

    async generatePlayer() {
        const playerNode = createNewNode()
        playerNode.setParent(this.stage)
        const playerManager = playerNode.addComponent(PlayerMrg)
        await playerManager.init({
            x: 7,
            y: 2,
            type: ENITIY_TYPE_ENUM.PLAYER,
            state: ENTITY_STATE_ENUM.IDLE,
            direction: DIRECTION_ENUM.BOTTOM
        })
        DataManager.Instance.playerInfo = playerManager
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_PLAYER_BORN)
    }

    async generateWooden() {
        const woodenNode = createNewNode()
        woodenNode.setParent(this.stage)
        const woodenManager = woodenNode.addComponent(WoodenMgr)
        await woodenManager.init({
            x: 7,
            y: 7,
            type: ENITIY_TYPE_ENUM.WOODEN,
            state: ENTITY_STATE_ENUM.IDLE,
            direction: DIRECTION_ENUM.TOP
        })
        DataManager.Instance.enemies.push(woodenManager)
    }

    async generateBurst() {
        const burstNode = createNewNode()
        burstNode.setParent(this.stage)
        const burstManager = burstNode.addComponent(BurstMgr)
        await burstManager.init({
            x: 7,
            y: 5,
            type: ENITIY_TYPE_ENUM.BURST,
            state: ENTITY_STATE_ENUM.IDLE,
            direction: DIRECTION_ENUM.TOP
        })
        DataManager.Instance.bursts.push(burstManager)
    }

    async generateSpikes() {
        const spikesNode = createNewNode()
        spikesNode.setParent(this.stage)
        const spikesManager = spikesNode.addComponent(SpikesMgr)
        await spikesManager.init({
            x: 7,
            y: 5,
            type: ENITIY_TYPE_SPIKES_ENUM.SPIKES_FOUR,
            count: 0
        })
        DataManager.Instance.spikes.push(spikesManager)
    }

    async generateIron() {
        const ironNode = createNewNode()
        ironNode.setParent(this.stage)
        const ironManager = ironNode.addComponent(IronMgr)
        await ironManager.init({
            x: 2,
            y: 4,
            type: ENITIY_TYPE_ENUM.WOODEN,
            state: ENTITY_STATE_ENUM.IDLE,
            direction: DIRECTION_ENUM.BOTTOM
        })
        DataManager.Instance.enemies.push(ironManager)
    }

    async generateDoor() {
        const doorNode = createNewNode()
        doorNode.setParent(this.stage)
        const doorManager = doorNode.addComponent(DoorMgr)
        await doorManager.init()
        DataManager.Instance.doorInfo = doorManager
    }

    fitPos() {
        const { mapColumCount, mapRowCount } = DataManager.Instance
        const disX = TILE_WIDTH * mapRowCount / 2
        const disY = TILE_HEIGHT * mapColumCount / 2 + 100
        this.stage.setPosition(-disX, disY)
    }
}