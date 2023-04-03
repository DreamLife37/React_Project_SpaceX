import { ShipsDataType } from "entities/shipItem"

export type InitialStateType = {
    shipsData: ShipsDataType[],
    isLoading: boolean
    error: string
    currentPage: number
    queryParams: QueryParamsType
}

export type QueryParamsType = {
    ship_type: string,
    home_port: string,
    offset: number,
    ship_name: string
}
