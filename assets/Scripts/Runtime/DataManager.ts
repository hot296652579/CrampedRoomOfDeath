import { ILevel, ITitle } from "../../Levels"
import Singleton from "../Base/Singleton"

export default class DataManager extends Singleton {
    mapInfo: Array<Array<ITitle>>
    mapRowCount: number = 0
    mapColumCount: number = 0
    levelIndex: number = 1

    static get Instance() {
        // super()
        return super.getInstance<DataManager>()
    }

    reset() {
        this.mapInfo = []
        this.mapRowCount = 0
        this.mapColumCount = 0
    }
}

// export const DataManagerInstance = new DataManager()