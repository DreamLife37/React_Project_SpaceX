import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../api/api";
import {ShipsDataType} from "entities/shipItem";

export const fetchAllShips = createAsyncThunk<ShipsDataType[], undefined, { rejectValue: string | Error }>('ships/getAllShips', async (_, thunkAPI) => {
    try {
        // @ts-ignore
        const params = thunkAPI.getState().ships.queryParams
        const response = await api.getAll(params)
        return response.data
    } catch (error) {

    }
})