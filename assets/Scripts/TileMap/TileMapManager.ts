import { Component, _decorator, Node, resources, SpriteFrame, Sprite, UITransform, Layers, SpriteAtlas } from "cc";
import levels from "../../Levels";
import { DataManagerInstance } from "../Runtime/DataManager";
import { createNewNode } from "../Utils";
import { TileManager } from "./TileManager";

const { ccclass, property } = _decorator;
@ccclass('TileMapManager')
export class TileMapManager extends Component {
    start() {

    }

    async init() {
        const spriteAtlas = await this.loadRes()
        const { mapInfo } = DataManagerInstance

        for (let i = 0; i < mapInfo.length; i++) {
            const colnum = mapInfo[i];
            for (let j = 0; j < colnum.length; j++) {
                const item = colnum[j];
                if (item.src === null || item.type === null) {
                    continue
                }

                const node = createNewNode()
                const imgSrc = `tile (${item.src})`
                const sp = spriteAtlas.spriteFrames[imgSrc]
                // sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0]    

                const tileManager = node.addComponent(TileManager)
                tileManager.init(sp, { i, j })
                node.setParent(this.node)
            }
        }
    }

    loadRes() {
        return new Promise<SpriteAtlas>((resolve, reject) => {
            // resources.loadDir("texture/tile/tile", SpriteFrame, function (err, assets) {
            //     if (!err) {
            //         resolve(assets)
            //         return
            //     } else {
            //         console.log(err)
            //         reject(false)
            //     }
            // });
            resources.load("texture/tile/tile", SpriteAtlas, (err, atlas) => {
                if (!err) {
                    resolve(atlas)
                    return
                } else {
                    console.log(err)
                    reject(false)
                }
            });
        })
    }
}