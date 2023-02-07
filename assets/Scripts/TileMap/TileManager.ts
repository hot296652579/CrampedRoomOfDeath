import { Component, _decorator, Node, resources, SpriteFrame, Sprite, UITransform, Layers, SpriteAtlas } from "cc";
import levels from "../../Levels";

const TILE_WIDTH = 55
const TILE_HEIGHT = 55

const { ccclass, property } = _decorator;
@ccclass('TileManager')
export class TileManager extends Component {
    init(sp: SpriteFrame, { i, j }: any) {
        const sprite = this.addComponent(Sprite)
        sprite.spriteFrame = sp

        const transfrom = this.getComponent(UITransform)
        transfrom.setContentSize(TILE_WIDTH, TILE_HEIGHT)

        this.node.setPosition(i * TILE_WIDTH, -j * TILE_HEIGHT)
    }
}