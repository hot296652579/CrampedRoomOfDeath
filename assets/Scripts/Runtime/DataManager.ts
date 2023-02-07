import { ILevel, ITitle } from "../../Levels"

export class DataManager {
    mapInfo: Array<Array<ITitle>>
    mapRowCount: number
    mapColumCount: number
}

export const DataManagerInstance = new DataManager()