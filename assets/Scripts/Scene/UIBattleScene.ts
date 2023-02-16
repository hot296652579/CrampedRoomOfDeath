import { Component, _decorator, Node } from "cc";
import { DIRECTION_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT } from "../../Enum";
import levels, { ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import { DoorMgr } from "../Door/DoorMgr";
import { WoodenMgr } from "../Enemy/Wooden/WoodenMgr";
import { PlayerMrg } from "../Player/PlayerMgr";
import DataManager from "../Runtime/DataManager";
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
        this.generateEnemy()
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
        await playerManager.init()
        DataManager.Instance.playerInfo = playerManager
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_PLAYER_BORN)
    }

    async generateEnemy() {
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