import { Component, _decorator, Node } from "cc";
import { TileMapManager } from "../TileMap/TileMapManager";

const { ccclass, property } = _decorator;

@ccclass('UIBattleScene')
export class UIBattleScene extends Component {

    start() {
        this.initGame()
    }

    initGame() {
        const stageNode = new Node()
        stageNode.setParent(this.node)
        const tileMapNode = new Node()
        tileMapNode.setParent(stageNode)
        const tileMapManager = tileMapNode.addComponent(TileMapManager)
        tileMapManager.init()
    }

    onLoad() {

    }
}