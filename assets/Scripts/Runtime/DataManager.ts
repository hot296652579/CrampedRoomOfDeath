import { ILevel, ITitle } from "../../Levels"
import Singleton from "../Base/Singleton"
import { PlayerMrg } from "../Player/PlayerMgr"
import { TileManager } from "../TileMap/TileManager"

export default class DataManager extends Singleton {
    mapInfo: Array<Array<ITitle>>
    tileMgrInfo: Array<Array<TileManager>>
    mapRowCount: number = 0
    mapColumCount: number = 0
    levelIndex: number = 1
    playerInfo: PlayerMrg = null
    enemies = []

    static get Instance() {
        // super()
        return super.getInstance<DataManager>()
    }

    reset() {
        this.mapInfo = []
        this.tileMgrInfo = []
        this.playerInfo = null
        this.enemies = []
        this.mapRowCount = 0
        this.mapColumCount = 0
    }
}

// export const DataManagerInstance = new DataManager()