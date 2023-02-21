import { Component, _decorator, Node, AudioSource } from "cc";
import { DIRECTION_ENUM, ENITIY_TYPE_ENUM, ENITIY_TYPE_SPIKES_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT } from "../../Enum";
import levels, { ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import { BurstMgr } from "../Burst/BurstMgr";
import { DoorMgr } from "../Door/DoorMgr";
import { IronMgr } from "../Enemy/Iron/IronMgr";
import { WoodenMgr } from "../Enemy/Wooden/WoodenMgr";
import { PlayerMrg } from "../Player/PlayerMgr";
import { AudioMgr } from "../Runtime/AudioMgr";
import DataManager, { IRecord } from "../Runtime/DataManager";
import FadeMgr from "../Runtime/FadeMgr";
import { ShakeManager } from "../Runtime/ShakeManager";
import SoundMgr from "../Runtime/SoundMgr";
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
    fadeInit = false
    @property(Node)
    menu: Node = null
    @property(Node)
    bottom: Node = null
    @property(Node)
    win: Node = null

    start() {
        // SoundMgr.Instance.playMusic('sound/bg', true)
        AudioMgr.inst.play('sound/bg', 1, true)

        DataManager.Instance.levelIndex = 10
        this.generateStage()
        this.initLevel()

        this.menu.setSiblingIndex(10)
        this.bottom.setSiblingIndex(11)
        this.win.setSiblingIndex(12)
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_NEXTLEVEL, this.nextLevelMap, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_END, this.checkArrived, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_SHOW_SMOKE, this.showSmokeHandler, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_RECORD_STEP, this.saveRecord, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_REVOKE_STEP, this.revokeRecord, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_RESTART_GAME, this.initLevel, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_WIN_RESTART_GAME, this.winRestartGame, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_NEXTLEVEL, this.nextLevelMap)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_END, this.checkArrived)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_SHOW_SMOKE, this.showSmokeHandler)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_RECORD_STEP, this.saveRecord)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_REVOKE_STEP, this.revokeRecord)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_RESTART_GAME, this.initLevel)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_WIN_RESTART_GAME, this.winRestartGame)
    }

    async initLevel() {
        if (this.fadeInit) {
            await FadeMgr.Instance.fader.fadeIn()
        } else {
            await FadeMgr.Instance.fader.mask()
        }

        this.clearLevelMap()
        this.level = levels[`level${DataManager.Instance.levelIndex}`]
        if (this.level) {
            DataManager.Instance.mapInfo = this.level.mapInfo
            DataManager.Instance.mapColumCount = this.level.mapInfo[0]?.length || 0//列
            DataManager.Instance.mapRowCount = this.level.mapInfo.length || 0
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
        this.fadeInit = true
    }

    winRestartGame() {
        this.win.active = false
        DataManager.Instance.levelIndex = 1
        this.initLevel()
    }

    nextLevelMap() {
        DataManager.Instance.levelIndex++
        if (DataManager.Instance.levelIndex > 10) {
            this.win.active = true
            return
        }
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
        this.stage.addComponent(ShakeManager)
    }

    async generateTileMap() {
        const tileMapNode = createNewNode()
        tileMapNode.setParent(this.stage)
        console.log('tileMapNode.position', tileMapNode.position)
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
            const mgr = enemy.type === ENITIY_TYPE_ENUM.WOODEN ? WoodenMgr : IronMgr
            const manager = node.addComponent(mgr)
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
        this.stage.getComponent(ShakeManager).stop()
        this.stage.setPosition(-disX, disY)
    }

    saveRecord() {
        if (!DataManager.Instance.playerInfo)
            return

        const item: IRecord = {
            player: {
                x: DataManager.Instance.playerInfo.x,
                y: DataManager.Instance.playerInfo.y,
                direction: DataManager.Instance.playerInfo.direction,
                state: DataManager.Instance.playerInfo.state === ENTITY_STATE_ENUM.IDLE ||
                    DataManager.Instance.playerInfo.state === ENTITY_STATE_ENUM.ATTACK ||
                    DataManager.Instance.playerInfo.state === ENTITY_STATE_ENUM.DEATH
                    ? DataManager.Instance.playerInfo.state : ENTITY_STATE_ENUM.IDLE
                ,
                type: DataManager.Instance.playerInfo._type,
            },
            door: {
                x: DataManager.Instance.doorInfo.x,
                y: DataManager.Instance.doorInfo.y,
                direction: DataManager.Instance.doorInfo.direction,
                state: DataManager.Instance.doorInfo.state,
                type: DataManager.Instance.doorInfo._type,
            },
            enemies: DataManager.Instance.enemies.map(({ x, y, type, state, direction }) => ({
                x, y, type, state, direction
            })),
            bursts: DataManager.Instance.bursts.map(({ x, y, type, state, direction }) => ({
                x, y, type, state, direction
            })),
            spikes: DataManager.Instance.spikes.map(({ x, y, count, type }) => ({
                x, y, count, type
            })),
        }

        DataManager.Instance.records.push(item)
    }

    revokeRecord() {
        const item = DataManager.Instance.records.pop()
        if (item) {
            DataManager.Instance.playerInfo.x = DataManager.Instance.playerInfo.targetX = item.player.x
            DataManager.Instance.playerInfo.y = DataManager.Instance.playerInfo.targetY = item.player.y
            DataManager.Instance.playerInfo.direction = item.player.direction
            DataManager.Instance.playerInfo.state = item.player.state
            DataManager.Instance.playerInfo.type = item.player.type

            DataManager.Instance.doorInfo.x = item.door.x
            DataManager.Instance.doorInfo.y = item.door.y
            DataManager.Instance.doorInfo.direction = item.door.direction
            DataManager.Instance.doorInfo.state = item.door.state
            DataManager.Instance.doorInfo.type = item.door.type

            for (let index = 0; index < DataManager.Instance.enemies.length; index++) {
                const enemy = item.enemies[index];
                DataManager.Instance.enemies[index].x = enemy.x
                DataManager.Instance.enemies[index].y = enemy.y
                DataManager.Instance.enemies[index].direction = enemy.direction
                DataManager.Instance.enemies[index].state = enemy.state
                DataManager.Instance.enemies[index].type = enemy.type
            }

            for (let index = 0; index < DataManager.Instance.bursts.length; index++) {
                const burst = item.enemies[index];
                DataManager.Instance.bursts[index].x = burst.x
                DataManager.Instance.bursts[index].y = burst.y
                DataManager.Instance.bursts[index].direction = burst.direction
                DataManager.Instance.bursts[index].state = burst.state
                DataManager.Instance.bursts[index].type = burst.type
            }

            for (let index = 0; index < DataManager.Instance.spikes.length; index++) {
                const spike = item.spikes[index];
                DataManager.Instance.spikes[index].x = spike.x
                DataManager.Instance.spikes[index].y = spike.y
                DataManager.Instance.spikes[index].count = spike.count
                DataManager.Instance.spikes[index].type = spike.type
            }
        }
    }
}