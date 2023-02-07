import { Component, _decorator, Node } from "cc";
import levels, { ILevel } from "../../Levels";
import { DataManagerInstance } from "../Runtime/DataManager";
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
        this.initLevel()
        this.generateStage()
        this.generateTileMap()
        this.fitPos()
    }

    initLevel() {
        const level = levels[`level${1}`]

        if (level) {
            this.level = level
            DataManagerInstance.mapInfo = level.mapInfo
            DataManagerInstance.mapColumCount = level.mapInfo[0].length //列
            DataManagerInstance.mapRowCount = level.mapInfo.length
        }
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

    fitPos() {
        const { mapColumCount, mapRowCount } = DataManagerInstance
        const disX = TILE_WIDTH * mapRowCount / 2
        const disY = TILE_HEIGHT * mapColumCount / 2 + 100
        this.stage.setPosition(-disX, disY)
    }
}