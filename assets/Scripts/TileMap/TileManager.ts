import { Component, _decorator, Node, resources, SpriteFrame, Sprite, UITransform, Layers, SpriteAtlas } from "cc";
import levels from "../../Levels";

const TILE_WIDTH = 55
const TILE_HEIGHT = 55

const { ccclass, property } = _decorator;
@ccclass('TileManager')
export class TileManager extends Component {
    start() {

    }

    init(sp: SpriteFrame, { x, y }: any) {

    }
}