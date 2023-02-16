import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, PARAMS_NAME_TYPE } from "../../Enum";
import levels, { IEnitiy, ILevel } from "../../Levels";
import EventMgr from "../Base/EventMgr";
import ResourceLoadMgr from "../Base/ResourceLoadMgr";
import DataManager from "../Runtime/DataManager";
import { TILE_HEIGHT, TILE_WIDTH } from "../TileMap/TileManager";
// import { DataManager.Instance } from "../Runtime/DataManager";
import { TileMapManager } from "../TileMap/TileMapManager";
import { createNewNode } from "../Utils";
import { PlayerStateMachine } from "./PlayerStateMachine";
import { EnitiyMgr } from "../Base/EnitiyMgr";

export const MOVE_SPEED = 1 / 10

const { ccclass, property } = _decorator;
@ccclass('PlayerMrg')
export class PlayerMrg extends EnitiyMgr {

    tartgetX: number = 0
    tartgetY: number = 0
    isMoving: boolean = false

    async init(params: IEnitiy) {
        this.fsm = this.addComponent(PlayerStateMachine)
        await this.fsm.init()

        super.init(params)

        this.tartgetX = this.x
        this.tartgetY = this.y
    }

    onLoad() {
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.inputHanlder, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_PLAYER_DEATH, this.onDeathHanlder, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.inputHanlder)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_PLAYER_DEATH, this.onDeathHanlder)
    }

    update() {
        this.updateXY()
        super.update()
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

        if (Math.abs(this.tartgetX - this.x) <= 0.1 && Math.abs(this.tartgetY - this.y) <= 0.1 && this.isMoving) {
            this.isMoving = false
            this.x = this.tartgetX
            this.y = this.tartgetY

            EventMgr.Instance.emit(ENUM_EVENT.ENUM_MOVE_END)
        }
    }

    inputHanlder(inputDirection: ENUM_BOTTOM_CONTROLLER) {
        if (this.state === ENTITY_STATE_ENUM.DEATH || this.state === ENTITY_STATE_ENUM.AIRDEATH || this.state === ENTITY_STATE_ENUM.ATTACK)
            return

        if (this.isMoving)
            return

        if (this.willBlock(inputDirection)) {
            console.log('block!!!!')
            return
        }

        const enemyId = this.willAttack(inputDirection)
        if (enemyId) {
            EventMgr.Instance.emit(ENUM_EVENT.ENUM_ENEMY_DEATH, enemyId)
            EventMgr.Instance.emit(ENUM_EVENT.ENUM_OPEN_DOOR)
            return
        }

        this.handlerMove(inputDirection)
    }

    onDeathHanlder(type: ENTITY_STATE_ENUM) {
        this.state = type
    }

    willBlock(inputDirection: ENUM_BOTTOM_CONTROLLER) {
        const { tartgetX: x, tartgetY: y, direction } = this
        const { tileMgrInfo, mapColumCount, mapRowCount } = DataManager.Instance

        console.log('y', y)

        //先判断输入上时候
        if (inputDirection === ENUM_BOTTOM_CONTROLLER.TOP) {
            const playerNextY = y - 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                //判断是否超出地图
                if (playerNextY <= 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                const weaponNextY = y - 2
                const nextPlayerTile = tileMgrInfo[x]?.[playerNextY]
                const nextWeaponTile = tileMgrInfo[x]?.[weaponNextY]


                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                //判断是否超出地图
                if (playerNextY <= 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                const weaponNextY = y
                const nextPlayerTile = tileMgrInfo[x]?.[playerNextY]
                const nextWeaponTile = tileMgrInfo[x]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                //判断是否超出地图
                if (playerNextY <= 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                const weaponNextX = x - 1
                const weaponNextY = y - 1
                const nextPlayerTile = tileMgrInfo[x]?.[playerNextY]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                //判断是否超出地图
                if (playerNextY <= 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                const weaponNextX = x + 1
                const weaponNextY = y - 1
                const nextPlayerTile = tileMgrInfo[x]?.[playerNextY]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[weaponNextY]


                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }
            }
        } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.LEFT) {
            const playerNextX = x - 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                //判断是否超出地图
                if (playerNextX <= 0) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT

                    return true
                }

                const weaponNextX = x - 1
                const weaponNextY = y - 1
                const nextPlayerTile = tileMgrInfo[playerNextX]?.[y]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                //判断是否超出地图
                if (playerNextX <= 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT

                    return true
                }

                const weaponNextX = x - 1
                const weaponNextY = y + 1
                const nextPlayerTile = tileMgrInfo[playerNextX]?.[y]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                //判断是否超出地图
                if (playerNextX <= 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT

                    return true
                }

                const weaponNextX = x - 2
                const nextPlayerTile = tileMgrInfo[playerNextX]?.[y]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[y]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                //判断是否超出地图
                if (playerNextX <= 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK

                    return true
                }

                const weaponNextX = x
                const nextPlayerTile = tileMgrInfo[playerNextX]?.[y]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[y]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }
            }

        } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.RIGHT) {
            const playerNextX = x + 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                if (playerNextX > mapColumCount - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT

                    return true
                }

                const weaponNextX = x + 1
                const weaponNextY = y - 1
                const nextPlayerTile = tileMgrInfo[playerNextX]?.[y]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                if (playerNextX > mapColumCount - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT

                    return true
                }

                const weaponNextX = x + 1
                const weaponNextY = y + 1
                const nextPlayerTile = tileMgrInfo[playerNextX]?.[y]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                if (playerNextX > mapColumCount - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK

                    return true
                }

                const weaponNextX = x
                const nextPlayerTile = tileMgrInfo[playerNextX]?.[y]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[y]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                if (playerNextX > mapColumCount - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT

                    return true
                }

                const weaponNextX = x + 2
                const nextPlayerTile = tileMgrInfo[playerNextX]?.[y]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[y]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }
            }
        } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.BOTTOM) {
            const playerNextY = y + 1
            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                if (playerNextY > mapColumCount - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                const weaponNextY = y
                const nextPlayerTile = tileMgrInfo[x]?.[playerNextY]
                const nextWeaponTile = tileMgrInfo[x]?.[weaponNextY]



                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKBACK
                    return true
                }

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                if (playerNextY > mapColumCount - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT

                    return true
                }

                const weaponNextY = y + 2
                const nextPlayerTile = tileMgrInfo[x]?.[playerNextY]
                const nextWeaponTile = tileMgrInfo[x]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKFRONT
                    return true
                }

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                if (playerNextY > mapColumCount - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT

                    return true
                }

                const weaponNextX = x - 1
                const weaponNextY = y + 1
                const nextPlayerTile = tileMgrInfo[x]?.[playerNextY]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKLEFT
                    return true
                }

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                if (playerNextY > mapColumCount - 1) {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT

                    return true
                }

                const weaponNextX = x + 1
                const weaponNextY = y + 1
                const nextPlayerTile = tileMgrInfo[x]?.[playerNextY]
                const nextWeaponTile = tileMgrInfo[weaponNextX]?.[weaponNextY]

                //最后判断地图元素
                if (nextPlayerTile && nextPlayerTile.canMove && (!nextWeaponTile || nextWeaponTile.canTurn)) {
                    // empty
                } else {
                    this.state = ENTITY_STATE_ENUM.BLOCKRIGHT
                    return true
                }
            }

        } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNLEFT) {
            let nextY, nextX
            if (direction === DIRECTION_ENUM.TOP) {
                //朝上左转的话，左上角三个tile都必须turnable为true，并且没有敌人
                nextY = y - 1
                nextX = x - 1
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                nextY = y + 1
                nextX = x + 1
            } else if (direction === DIRECTION_ENUM.LEFT) {
                nextY = y + 1
                nextX = x - 1
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                nextY = y - 1
                nextX = x + 1
            }

            //最后判断地图元素
            if (
                (!tileMgrInfo[x]?.[nextY] || tileMgrInfo[x]?.[nextY].canTurn) &&
                (!tileMgrInfo[nextX]?.[y] || tileMgrInfo[nextX]?.[y].canTurn) &&
                (!tileMgrInfo[nextX]?.[nextY] || tileMgrInfo[nextX]?.[nextY].canTurn)
            ) {
                // empty
            } else {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT
                return true
            }
        } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNRIGHT) {
            let nextX, nextY
            if (direction === DIRECTION_ENUM.TOP) {
                //朝上右转的话，右上角三个tile都必须turnable为true
                nextY = y - 1
                nextX = x + 1
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                nextY = y + 1
                nextX = x - 1
            } else if (direction === DIRECTION_ENUM.LEFT) {
                nextY = y - 1
                nextX = x - 1
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                nextY = y + 1
                nextX = x + 1
            }

            //最后判断地图元素
            if (
                (!tileMgrInfo[x]?.[nextY] || tileMgrInfo[x]?.[nextY].canTurn) &&
                (!tileMgrInfo[nextX]?.[y] || tileMgrInfo[nextX]?.[y].canTurn) &&
                (!tileMgrInfo[nextX]?.[nextY] || tileMgrInfo[nextX]?.[nextY].canTurn)
            ) {
                // empty
            } else {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT
                return true
            }
        }

        return false
    }

    willAttack(inputDirection: ENUM_BOTTOM_CONTROLLER) {
        // let enemies = DataManager.Instance.enemies.filter(enemy => enemy.state != ENTITY_STATE_ENUM.DEATH)
        let enemies = DataManager.Instance.enemies.filter((enemy) => { return enemy.state != ENTITY_STATE_ENUM.DEATH })

        for (let index = 0; index < enemies.length; index++) {
            const { x: enemyX, y: enemyY, id } = enemies[index];
            if (inputDirection === ENUM_BOTTOM_CONTROLLER.TOP && this.direction === DIRECTION_ENUM.TOP && enemyX == this.x && enemyY == this.y - 2) {
                this.state = ENTITY_STATE_ENUM.ATTACK
                return id
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.BOTTOM && this.direction === DIRECTION_ENUM.BOTTOM && enemyX == this.x && enemyY == this.y + 2) {
                this.state = ENTITY_STATE_ENUM.ATTACK
                return id
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.LEFT && this.direction === DIRECTION_ENUM.LEFT && enemyX == this.x - 2 && enemyY == this.y) {
                this.state = ENTITY_STATE_ENUM.ATTACK
                return id
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.RIGHT && this.direction === DIRECTION_ENUM.RIGHT && enemyX == this.x + 2 && enemyY == this.y) {
                this.state = ENTITY_STATE_ENUM.ATTACK
                return id
            }
        }

        return ''
    }

    handlerMove(direction: ENUM_BOTTOM_CONTROLLER) {
        console.log(DataManager.Instance.tileMgrInfo)
        switch (direction) {
            case ENUM_BOTTOM_CONTROLLER.TOP:
                this.isMoving = true
                this.tartgetY -= 1
                break;
            case ENUM_BOTTOM_CONTROLLER.BOTTOM:
                this.isMoving = true
                this.tartgetY += 1
                break;
            case ENUM_BOTTOM_CONTROLLER.LEFT:
                this.isMoving = true
                this.tartgetX -= 1
                break;
            case ENUM_BOTTOM_CONTROLLER.RIGHT:
                this.isMoving = true
                this.tartgetX += 1
                break;
            case ENUM_BOTTOM_CONTROLLER.TURNLEFT:
                // this.fsm.setParams(PARAMS_NAME_TYPE.TURNLEFT, true)

                if (this.direction === DIRECTION_ENUM.TOP) {
                    this.direction = DIRECTION_ENUM.LEFT
                } else if (this.direction === DIRECTION_ENUM.BOTTOM) {
                    this.direction = DIRECTION_ENUM.RIGHT
                } else if (this.direction === DIRECTION_ENUM.LEFT) {
                    this.direction = DIRECTION_ENUM.BOTTOM
                } else if (this.direction === DIRECTION_ENUM.RIGHT) {
                    this.direction = DIRECTION_ENUM.TOP
                }
                this.state = ENTITY_STATE_ENUM.TURNLEFT
                break;
            case ENUM_BOTTOM_CONTROLLER.TURNRIGHT:
                if (this.direction === DIRECTION_ENUM.TOP) {
                    this.direction = DIRECTION_ENUM.RIGHT
                } else if (this.direction === DIRECTION_ENUM.BOTTOM) {
                    this.direction = DIRECTION_ENUM.LEFT
                } else if (this.direction === DIRECTION_ENUM.LEFT) {
                    this.direction = DIRECTION_ENUM.TOP
                } else if (this.direction === DIRECTION_ENUM.RIGHT) {
                    this.direction = DIRECTION_ENUM.BOTTOM
                }
                this.state = ENTITY_STATE_ENUM.TURNRIGHT
                break;

            default:
                break;
        }
    }
}