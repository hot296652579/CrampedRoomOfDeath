import { Component, _decorator, Node, Sprite, UITransform, Animation, SpriteAtlas, AnimationClip, animation, SpriteFrame, Texture2D, math } from "cc";
import { DIRECTION_ENUM, DIRECTION_ORDER_ENUM, ENITIY_TYPE_ENUM, ENTITY_STATE_ENUM, ENUM_EVENT, ENUM_BOTTOM_CONTROLLER, PARAMS_NAME_TYPE, SHAKE_TYPE_ENUM } from "../../Enum";
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
import { EnemyMgr } from "../Base/EnemyMgr";
import { BurstMgr } from "../Burst/BurstMgr";
import SoundMgr from "../Runtime/SoundMgr";

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
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_ATTACK_PLAYER, this.onDeathHanlder, this)
        EventMgr.Instance.addEventListen(ENUM_EVENT.ENUM_PLAYER_DEATH, this.onDeathHanlder, this)
    }

    onDestry() {
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_MOVE_PLAYER, this.inputHanlder)
        EventMgr.Instance.unEventListen(ENUM_EVENT.ENUM_ATTACK_PLAYER, this.onDeathHanlder)
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


        const enemyId = this.willAttack(inputDirection)
        if (enemyId) {
            SoundMgr.Instance.playSound('sound/attack')
            this.state = ENTITY_STATE_ENUM.ATTACK
            EventMgr.Instance.emit(ENUM_EVENT.ENUM_ENEMY_DEATH, enemyId)
            EventMgr.Instance.emit(ENUM_EVENT.ENUM_OPEN_DOOR)
            EventMgr.Instance.emit(ENUM_EVENT.ENUM_MOVE_END)
            EventMgr.Instance.emit(ENUM_EVENT.ENUM_RECORD_STEP)
            return
        }

        if (this.willBlock(inputDirection)) {
            if (inputDirection === ENUM_BOTTOM_CONTROLLER.TOP) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.TOP)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.BOTTOM) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.BOTTOM)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.LEFT) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.LEFT)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.RIGHT) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.RIGHT)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNLEFT && this.direction === DIRECTION_ENUM.TOP) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.LEFT)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNLEFT && this.direction === DIRECTION_ENUM.LEFT) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.BOTTOM)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNLEFT && this.direction === DIRECTION_ENUM.BOTTOM) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.RIGHT)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNLEFT && this.direction === DIRECTION_ENUM.RIGHT) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.TOP)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNRIGHT && this.direction === DIRECTION_ENUM.TOP) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.RIGHT)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNRIGHT && this.direction === DIRECTION_ENUM.LEFT) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.TOP)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNRIGHT && this.direction === DIRECTION_ENUM.BOTTOM) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.LEFT)
            } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.TURNRIGHT && this.direction === DIRECTION_ENUM.RIGHT) {
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, SHAKE_TYPE_ENUM.BOTTOM)
            }
            return
        }

        this.handlerMove(inputDirection)
    }

    onDeathHanlder(type: ENTITY_STATE_ENUM) {
        this.state = type
        SoundMgr.Instance.playSound('sound/death')
    }

    willBlock(inputDirection: ENUM_BOTTOM_CONTROLLER) {
        const { tartgetX: x, tartgetY: y, direction } = this
        const { tileMgrInfo, mapColumCount, mapRowCount } = DataManager.Instance
        const { x: doorX, y: doorY, state: doorState } = DataManager.Instance.doorInfo
        const enemies: EnemyMgr[] = DataManager.Instance.enemies.filter(enemy => enemy.state != ENTITY_STATE_ENUM.DEATH)
        console.log('mapColumCount', mapColumCount, 'mapRowCount', mapRowCount)
        //先判断输入上时候
        if (inputDirection === ENUM_BOTTOM_CONTROLLER.TOP) {
            console.log('输入向上')
            const playerNextY = y - 1
            const playerNextX = x - 1
            console.log('playerNextY', playerNextY)
            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                //判断是否超出地图
                if (playerNextY < 0) {
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

                const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                //判断是否超出地图
                if (playerNextY < 0) {
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

                const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                //判断是否超出地图
                if (playerNextY < 0) {
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

                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKRIGHT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKRIGHT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                //判断是否超出地图
                if (playerNextY < 0) {
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

                const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst
            }
        } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.LEFT) {
            console.log('输入向走')
            const playerNextY = y - 1
            const playerNextX = x - 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                //判断是否超出地图
                if (playerNextX < 0) {
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

                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                //判断是否超出地图
                if (playerNextX < 0) {
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

                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                //判断是否超出地图
                if (playerNextX < 0) {
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
                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                //判断是否超出地图
                if (playerNextX < 0) {
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

                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst
            }

        } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.RIGHT) {
            console.log('输入向右')
            const playerNextX = x + 1

            //玩家方向——向上
            if (direction === DIRECTION_ENUM.TOP) {
                if (playerNextX > mapRowCount - 1) {
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
                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向下
            } else if (direction === DIRECTION_ENUM.BOTTOM) {
                if (playerNextX > mapRowCount - 1) {
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

                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向左
            } else if (direction === DIRECTION_ENUM.LEFT) {
                if (playerNextX > mapRowCount - 1) {
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

                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

                //玩家方向——向右
            } else if (direction === DIRECTION_ENUM.RIGHT) {
                if (playerNextX > mapRowCount - 1) {
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

                const checkDoor = this.checkCollisionDoor(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextX, weaponNextX, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextX, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

            }
        } else if (inputDirection === ENUM_BOTTOM_CONTROLLER.BOTTOM) {
            console.log('输入向下')
            let playerNextY = y + 1

            console.log('playerNextY', playerNextY)
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

                const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst

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

                const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst



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

                const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (!checkEnemy)
                    return checkEnemy

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
                const checkDoor = this.checkCollisionDoor(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkDoor)
                    return checkDoor

                const checkEnemy = this.checkCollisionEnenies(playerNextY, weaponNextY, ENTITY_STATE_ENUM.BLOCKFRONT, inputDirection)
                if (checkEnemy)
                    return checkEnemy

                const checkBurst = this.checkBurstCollision(playerNextY, nextWeaponTile, inputDirection)
                if (!checkBurst)
                    return checkBurst
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

            //判断门
            if (
                ((doorX === x && doorY === nextY) ||
                    (doorX === nextX && doorY === y) ||
                    (doorX === nextX && doorY === nextY)) &&
                doorState !== ENTITY_STATE_ENUM.DEATH
            ) {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT
                return true
            }

            //判断敌人
            for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i]
                const { x: enemyX, y: enemyY } = enemy

                if (enemyX === nextX && enemyY === y) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT

                    return true
                } else if (enemyX === nextX && enemyY === nextY) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT

                    return true
                } else if (enemyX === x && enemyY === nextY) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNLEFT

                    return true
                }
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

            //判断门
            if (
                ((doorX === x && doorY === nextY) ||
                    (doorX === nextX && doorY === y) ||
                    (doorX === nextX && doorY === nextY)) &&
                doorState !== ENTITY_STATE_ENUM.DEATH
            ) {
                this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT
                return true
            }

            //判断敌人
            for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i]
                const { x: enemyX, y: enemyY } = enemy

                if (enemyX === nextX && enemyY === y) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT

                    return true
                } else if (enemyX === nextX && enemyY === nextY) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT

                    return true
                } else if (enemyX === x && enemyY === nextY) {
                    this.state = ENTITY_STATE_ENUM.BLOCKTURNRIGHT

                    return true
                }
            }
        }

        return false
    }

    checkCollisionDoor(playerNext, weaponNext, state: ENTITY_STATE_ENUM, inputDirection: ENUM_BOTTOM_CONTROLLER) {
        const { tartgetX: x, tartgetY: y, direction } = this
        const { x: doorX, y: doorY, state: doorState } = DataManager.Instance.doorInfo

        if (inputDirection === ENUM_BOTTOM_CONTROLLER.TOP || inputDirection === ENUM_BOTTOM_CONTROLLER.BOTTOM) {
            //判断上下门
            if (
                ((doorX === x && doorY === playerNext) || (doorX === x && doorY === weaponNext)) &&
                doorState !== ENTITY_STATE_ENUM.DEATH
            ) {
                this.state = state
                console.log('撞到了门')
                return true
            }
        } else {
            //判断左右门
            if (
                ((doorX === playerNext && doorY === y) || (doorX === weaponNext && doorY === weaponNext)) &&
                doorState !== ENTITY_STATE_ENUM.DEATH
            ) {
                this.state = state
                console.log('撞到了门')
                return true
            }
        }



        return false
    }

    checkCollisionEnenies(playerNext, weaponNext, state: ENTITY_STATE_ENUM, inputDirection: ENUM_BOTTOM_CONTROLLER) {
        const { tartgetX: x, tartgetY: y, direction } = this
        const enemies: EnemyMgr[] = DataManager.Instance.enemies.filter(enemy => enemy.state != ENTITY_STATE_ENUM.DEATH)

        if (inputDirection === ENUM_BOTTOM_CONTROLLER.TOP || inputDirection === ENUM_BOTTOM_CONTROLLER.BOTTOM) {
            for (let i = 0; i < enemies.length; i++) {
                const enemy = enemies[i]
                const { x: enemyX, y: enemyY } = enemy

                if ((enemyX === x && enemyY === weaponNext) || (enemyX === x && enemyY === playerNext)) {
                    this.state = state
                    console.log('撞到了敌人')
                    return true
                }
            }
        }

        return false
    }

    //判断地裂陷阱
    checkBurstCollision(playerNext, nextWeaponTile, inputDirection: ENUM_BOTTOM_CONTROLLER) {
        const { tartgetX: x, tartgetY: y, direction } = this
        const bursts: BurstMgr[] = DataManager.Instance.bursts.filter(
            (burst: BurstMgr) => burst.state !== ENTITY_STATE_ENUM.DEATH,
        )

        if (
            bursts.some(burst => burst.x === x && burst.y === playerNext) &&
            (!nextWeaponTile || nextWeaponTile.canTurn)
        ) {
            return false
        }
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
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_RECORD_STEP)
        switch (direction) {
            case ENUM_BOTTOM_CONTROLLER.TOP:
                this.isMoving = true
                this.onSmokeHandler(direction)
                this.tartgetY -= 1
                SoundMgr.Instance.playSound('sound/move')
                break;
            case ENUM_BOTTOM_CONTROLLER.BOTTOM:
                this.isMoving = true
                this.onSmokeHandler(direction)
                this.tartgetY += 1
                SoundMgr.Instance.playSound('sound/move')
                break;
            case ENUM_BOTTOM_CONTROLLER.LEFT:
                this.isMoving = true
                this.onSmokeHandler(direction)
                this.tartgetX -= 1
                SoundMgr.Instance.playSound('sound/move')
                break;
            case ENUM_BOTTOM_CONTROLLER.RIGHT:
                this.isMoving = true
                this.onSmokeHandler(direction)
                this.tartgetX += 1
                SoundMgr.Instance.playSound('sound/move')
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
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_MOVE_END)
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
                EventMgr.Instance.emit(ENUM_EVENT.ENUM_MOVE_END)
                break;

            default:
                break;
        }
    }

    onSmokeHandler(type: ENUM_BOTTOM_CONTROLLER) {
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHOW_SMOKE, this.x, this.y, type)
    }

    onAttackShake(type: SHAKE_TYPE_ENUM) {
        EventMgr.Instance.emit(ENUM_EVENT.ENUM_SHAKE_SCREEN, type)
    }
}