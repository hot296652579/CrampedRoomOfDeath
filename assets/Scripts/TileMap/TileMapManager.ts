import { Component, _decorator, Node, resources, SpriteFrame, Sprite, UITransform, Layers, SpriteAtlas } from "cc";
import levels from "../../Levels";

const TILE_WIDTH = 55
const TILE_HEIGHT = 55

const { ccclass, property } = _decorator;
@ccclass('TileMapManager')
export class TileMapManager extends Component {
    start() {

    }

    async init() {
        const spriteAtlas = await this.loadRes()
        const { mapInfo } = levels[`level${1}`]

        for (let index = 0; index < mapInfo.length; index++) {
            const colnum = mapInfo[index];
            for (let j = 0; j < colnum.length; j++) {
                const item = colnum[j];
                if (item.src === null || item.type === null) {
                    continue
                }

                const node = new Node()
                const sprite = node.addComponent(Sprite)
                const imgSrc = `tile (${item.src})`
                const sp = spriteAtlas.spriteFrames[imgSrc]
                sprite.spriteFrame = sp
                // sprite.spriteFrame = spriteFrames.find(v => v.name === imgSrc) || spriteFrames[0]    

                const transfrom = node.addComponent(UITransform)
                transfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT)

                node.layer = 1 << Layers.nameToLayer('UI_2D')
                node.setPosition(index * TILE_WIDTH, -j * TILE_HEIGHT)
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