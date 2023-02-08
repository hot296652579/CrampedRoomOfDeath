import { ILevel, ITitle } from "../../Levels"
import Singleton from "../Base/Singleton"

export default class DataManager extends Singleton {
    mapInfo: Array<Array<ITitle>>
    mapRowCount: number
    mapColumCount: number

    static get Instance() {
        // super()
        return super.getInstance<DataManager>()
    }
}

// export const DataManagerInstance = new DataManager()