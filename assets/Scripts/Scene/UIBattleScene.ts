import { Component, _decorator, Node } from "cc";
import { ENUM_EVENT } from "../../Enum";
import levels, { ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import { WoodenMgr } from "../Enemy/WoodenMgr";
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
        this.generatePlayer()
        this.generateEnemy()
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

    generateTileMap() {
        const tileMapNode = createNewNode()
        tileMapNode.setParent(this.stage)
        const tileMapManager = tileMapNode.addComponent(TileMapManager)
        tileMapManager.init()
    }

    generatePlayer() {
        const playerNode = createNewNode()
        playerNode.setParent(this.stage)
        const playerManager = playerNode.addComponent(PlayerMrg)
        playerManager.init()
    }

    generateEnemy() {
        const woodenNode = createNewNode()
        woodenNode.setParent(this.stage)
        const woodenManager = woodenNode.addComponent(WoodenMgr)
        woodenManager.init()
    }

    fitPos() {
        const { mapColumCount, mapRowCount } = DataManager.Instance
        const disX = TILE_WIDTH * mapRowCount / 2
        const disY = TILE_HEIGHT * mapColumCount / 2 + 100
        this.stage.setPosition(-disX, disY)
    }
}