import { IEnitiy, ILevel, ITitle } from "../../Levels"
import { EnemyMgr } from "../Base/EnemyMgr"
import Singleton from "../Base/Singleton"
import { BurstMgr } from "../Burst/BurstMgr"
import { DoorMgr } from "../Door/DoorMgr"
import { PlayerMrg } from "../Player/PlayerMgr"
import { SmokeMgr } from "../Smoke/SmokeMgr"
import { SpikesMgr } from "../Spikes/SpikesMgr"
import { TileManager } from "../TileMap/TileManager"

export type IRecord = Omit<ILevel, 'mapInfo'>

export default class DataManager extends Singleton {
    mapInfo: Array<Array<ITitle>>
    tileMgrInfo: Array<Array<TileManager>>
    mapRowCount: number = 0
    mapColumCount: number = 0
    levelIndex: number = 1
    playerInfo: PlayerMrg = null
    doorInfo: DoorMgr = null
    enemies: EnemyMgr[]
    bursts: BurstMgr[]
    spikes: SpikesMgr[]
    smokes: SmokeMgr[]
    records: IRecord[] = []

    static get Instance() {
        // super()
        return super.getInstance<DataManager>()
    }

    reset() {
        this.mapInfo = []
        this.tileMgrInfo = []
        this.playerInfo = null
        this.doorInfo = null
        this.enemies = []
        this.bursts = []
        this.spikes = []
        this.smokes = []

        this.mapRowCount = 0
        this.mapColumCount = 0
    }
}

// export const DataManagerInstance = new DataManager()