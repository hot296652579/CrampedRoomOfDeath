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
import FadeMgr from "../Runtime/FadeMgr";
import { SmokeMgr } from "../Smoke/SmokeMgr";
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
    smokeLayer: Node

    start() {
        DataManager.Instance.levelIndex = 1
        this.generateStage()
        this.initLevel()
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_NEXTLEVEL, this.nextLevelMap, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_END, this.checkArrived, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_SHOW_SMOKE, this.showSmokeHandler, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_NEXTLEVEL, this.nextLevelMap)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_END, this.checkArrived)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_SHOW_SMOKE, this.showSmokeHandler)
    }

    async initLevel() {
        FadeMgr.Instance.fader.fadeIn()
        this.clearLevelMap()
        this.level = levels[`level${DataManager.Instance.levelIndex}`]
        if (this.level) {
            DataManager.Instance.mapInfo = this.level.mapInfo
            DataManager.Instance.mapColumCount = this.level.mapInfo[0].length //列
            DataManager.Instance.mapRowCount = this.level.mapInfo.length
        }

        await Promise.all([
            this.generateTileMap(),
            this.generateBurst(),
            this.generateEnemies(),
            this.generateSpikes(),
            this.generateDoor(),
            this.generateSmokeLayer(),
            this.generatePlayer(),
            this.fitPos()
        ])

        FadeMgr.Instance.fader.fadeOut()
    }

    nextLevelMap() {
        DataManager.Instance.levelIndex++
        this.initLevel()
    }

    clearLevelMap() {
        this.stage.removeAllChildren()
        DataManager.Instance.reset()
    }

    checkArrived() {
        const { x: playerX, y: playerY } = DataManager.Instance.playerInfo
        const { x: doorX, y: doorY, state: doorState } = DataManager.Instance.doorInfo

        if (playerX === doorX && playerY === doorY &&
            doorState === ENTITY_STATE_ENUM.DEATH) {
            EventMgr.Instance.emit(ENUM_EVENT.ENUM_NEXTLEVEL)
        }
    }

    async showSmokeHandler(x: number, y: number, direction: DIRECTION_ENUM) {
        const smokeItem = DataManager.Instance.smokes.find(smoke => smoke.state === ENTITY_STATE_ENUM.DEATH)
        if (smokeItem) {
            smokeItem.x = x
            smokeItem.y = y
            smokeItem.direction = direction
            smokeItem.node.setPosition(x * TILE_WIDTH - TILE_WIDTH * 1.5, -y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
        } else {
            const smokeNode = createNewNode()
            smokeNode.setParent(this.smokeLayer)
            const smokeMgr = smokeNode.addComponent(SmokeMgr)
            await smokeMgr.init({
                x,
                y,
                state: ENTITY_STATE_ENUM.IDLE,
                type: ENITIY_TYPE_ENUM.SMOKE,
                direction
            })

            DataManager.Instance.smokes.push(smokeMgr)
        }
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
        await playerManager.init(this.level.player)
        DataManager.Instance.playerInfo = playerManager
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_PLAYER_BORN)
    }

    async generateEnemies() {
        DataManager.Instance.enemies = []
        const promises = []
        for (let i = 0; i < this.level.enemies.length; i++) {
            const enemy = this.level.enemies[i]
            const node = createNewNode()
            node.setParent(this.stage)
            const Manager = enemy.type === ENITIY_TYPE_ENUM.WOODEN ? WoodenMgr : IronMgr
            const manager = node.addComponent(Manager)
            promises.push(manager.init(enemy))
            DataManager.Instance.enemies.push(manager)
        }

        await Promise.all(promises)
    }

    async generateBurst() {
        const promises = []
        for (let i = 0; i < this.level.bursts.length; i++) {
            const burst = this.level.bursts[i]
            const node = createNewNode()
            node.setParent(this.stage)
            const burstManager = node.addComponent(BurstMgr)
            promises.push(burstManager.init(burst))
            DataManager.Instance.bursts.push(burstManager)
        }
        await Promise.all(promises)
    }

    async generateSpikes() {
        const promises = []
        for (let i = 0; i < this.level.spikes.length; i++) {
            const spikes = this.level.spikes[i]
            const node = createNewNode()
            node.setParent(this.stage)
            const spikesManager = node.addComponent(SpikesMgr)
            promises.push(spikesManager.init(spikes))
            DataManager.Instance.spikes.push(spikesManager)
        }
        await Promise.all(promises)
    }

    generateSmokeLayer() {
        const node = createNewNode()
        this.smokeLayer = node
        node.setParent(this.stage)
    }

    async generateDoor() {
        const node = createNewNode()
        node.setParent(this.stage)
        const doorManager = node.addComponent(DoorMgr)
        await doorManager.init(this.level.door)
        DataManager.Instance.doorInfo = doorManager
    }

    fitPos() {
        const { mapColumCount, mapRowCount } = DataManager.Instance
        const disX = TILE_WIDTH * mapRowCount / 2
        const disY = TILE_HEIGHT * mapColumCount / 2 + 100
        this.stage.setPosition(-disX, disY)
    }
}