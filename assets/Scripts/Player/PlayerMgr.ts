import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { ENUM_EVENT, ENUM_MOVE } from "../../Enum";
import levels, { ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import ResourceLoadMgr from "../Base/ResourceLoadMgr";
import DataManager from "../Runtime/DataManager";
import { TILE_HEIGHT, TILE_WIDTH } from "../TileMap/TileManager";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";

const ANIMATION_SPEED = 1 / 8
const MOVE_SPEED = 1 / 10

const { ccclass, property } = _decorator;
@ccclass('PlayerMrg')
export class PlayerMrg extends Component {
    x: number = 0
    y: number = 0

    tartgetX: number = 0
    tartgetY: number = 0

    async init() {
        await this.loadRes()
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.handlerMove, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.handlerMove)
    }

    update() {
        this.updateXY()
        this.node.setPosition(this.x * TILE_WIDTH - TILE_WIDTH * 1.5, -this.y * TILE_HEIGHT + TILE_HEIGHT * 1.5)
    }

    updateXY() {
        if (this.tartgetX < this.x) {
            this.x -= MOVE_SPEED
        } else if (this.tartgetX > this.x) {
            this.x += MOVE_SPEED
        } else if (this.tartgetY < this.y) {
            this.y -= MOVE_SPEED
        } else if (this.tartgetY > this.y) {
            this.y += MOVE_SPEED
        }

        if (Math.abs(this.tartgetX - this.x) <= 0.1 && Math.abs(this.tartgetY - this.y) <= 0.1) {
            this.x = this.tartgetX
            this.y = this.tartgetY
        }
    }

    handlerMove(direction: ENUM_MOVE) {
        switch (direction) {
            case ENUM_MOVE.TOP:
                this.tartgetY -= 1
                break;
            case ENUM_MOVE.BOTTOM:
                this.tartgetY += 1
                break;
            case ENUM_MOVE.LEFT:
                this.tartgetX -= 1
                break;
            case ENUM_MOVE.RIGHT:
                this.tartgetX += 1
                break;
            case ENUM_MOVE.TURNLEFT:

                break;
            case ENUM_MOVE.TURNRIGHT:

                break;

            default:
                break;
        }
    }

    async loadRes() {
        const spriteAtlas = await ResourceLoadMgr.Instance.loadRes('texture/player/idle/top/idle', SpriteAtlas)
        const sprite = this.addComponent(Sprite)
        sprite.sizeMode = Sprite.SizeMode.CUSTOM
        const transform = this.node.getComponent(UITransform)
        transform.setContentSize(TILE_WIDTH * 4, TILE_HEIGHT * 4)

        const animationClip = new AnimationClip();

        const animationCom = this.addComponent(Animation)

        const track = new animation.ObjectTrack(); // 创建一个对象轨道
        track.path = new animation.TrackPath().toComponent(Sprite).toProperty('spriteFrame'); // 找子节点组件 以及属性

        const spFrames = spriteAtlas.spriteFrames
        const frams: Array<[number, SpriteFrame]> = []

        let index = 0
        for (const key in spFrames) {
            if (Object.prototype.hasOwnProperty.call(spFrames, key)) {
                const element = spFrames[key];
                frams.push([ANIMATION_SPEED * index, element])
                index++
            }
        }
        console.log(frams)
        track.channel.curve.assignSorted(frams)

        // const frames: Array<[number, SpriteFrame]> = spFrames.map((item: SpriteFrame, index: number) => [ANIMATION_SPEED * index, item])

        // // 最后将轨道添加到动画剪辑以应用
        animationClip.addTrack(track)
        animationClip.wrapMode = AnimationClip.WrapMode.Loop
        animationClip.duration = frams.length * ANIMATION_SPEED; // 整个动画剪辑的周期

        animationCom.defaultClip = animationClip
        animationCom.play()
    }
}