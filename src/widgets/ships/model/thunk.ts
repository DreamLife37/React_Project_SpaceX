import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../api/api";
import {ShipsDataType} from "entities/shipItem";

export const fetchAllShips = createAsyncThunk<ShipsDataType[], undefined, { state: AppRootStateType }>('ships/getAllShips', async (_, thunkAPI) => {
    try {
        const params = thunkAPI.getState().ships.queryParams
        const paramsModel = {
            ship_type: params.ship_type,
            home_port: params.home_port[0],
            offset: params.offset,
            ship_name: params.ship_name
        }
        const response = await api.getAll(paramsModel)
        return response.data
    } catch (error) {
        console.log(error)
    }
})