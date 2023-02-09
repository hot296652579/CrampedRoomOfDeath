import { animation, AnimationClip, Sprite, SpriteAtlas, SpriteFrame } from "cc";
import ResourceLoadMgr from "../Base/ResourceLoadMgr";
import { PlayerStateMachine } from "./PlayerStateMachine";

const ANIMATION_SPEED = 1 / 8


/**真正播动画的地方*/
export default class Sate {
    animationClip: AnimationClip
    constructor(private fsm: PlayerStateMachine, private path: string, private isLoop: AnimationClip.WrapMode = AnimationClip.WrapMode.Normal) {
        this.init()
    }

    async init() {
        const promise = ResourceLoadMgr.Instance.loadRes(this.path, SpriteAtlas)
        this.fsm.waitList.push(promise)
        const spriteAtlas = await promise
        this.animationClip = new AnimationClip();

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

        // // 最后将轨道添加到动画剪辑以应用
        this.animationClip.addTrack(track)
        this.animationClip.wrapMode = this.isLoop
        this.animationClip.duration = frams.length * ANIMATION_SPEED; // 整个动画剪辑的周期
    }

    run() {
        this.fsm.animationCom.defaultClip = this.animationClip
        this.fsm.animationCom.play()
    }
}