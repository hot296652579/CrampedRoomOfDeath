import { Component, _decorator, Node, resources, SpriteFrame, Sprite, UITransform, Layers, SpriteAtlas, Texture2D } from "cc";
import levels from "../../Levels";
import ResourceLoadMgr from "../Base/ResourceLoadMgr";
import DataManager from "../Runtime/DataManager";
// import { DataManagerInstance } from "../Runtime/DataManager";
import { createNewNode, randomTileByrange } from "../Utils";
import { TileManager } from "./TileManager";

const { ccclass, property } = _decorator;
@ccclass('TileMapManager')
export class TileMapManager extends Component {
    start() {

    }

    async init() {
        const spriteAtlas = await ResourceLoadMgr.Instance.loadRes('texture/tile/tile', SpriteAtlas)
        const { mapInfo } = DataManager.Instance

        for (let i = 0; i < mapInfo.length; i++) {
            const colnum = mapInfo[i];
            for (let j = 0; j < colnum.length; j++) {
                const item = colnum[j];
                if (item.src === null || item.type === null) {
                    continue
                }

                let num = item.src
                if ((num === 1 || num === 5 || num === 9) && (i % 2 === 0 && j % 2 === 0)) {
                    num += randomTileByrange(0, 4)
                }
                // console.log('num', num)
                const node = createNewNode()
                const imgSrc = `tile (${num})`
                const sp = spriteAtlas.spriteFrames[imgSrc]
                // sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0]    

                const tileManager = node.addComponent(TileManager)
                tileManager.init(sp, { i, j })
                node.setParent(this.node)
            }
        }
    }
}