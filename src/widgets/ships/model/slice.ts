import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialStateType} from "./types";
import {fetchAllShips} from "./thunk";
import {ShipsDataType} from "entities/shipItem";


const initialState: InitialStateType = {
    shipsData: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    queryParams: {
        ship_name: '',
        ship_type: '',
        home_port: '',
        offset: 0
    }
}

export const shipsSlice = createSlice({
    name: 'ships',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload
            state.queryParams.offset = (action.payload - 1) * 5
        },
        setSearchName(state, action: PayloadAction<string>) {
            state.queryParams.ship_name = action.payload
        },
        setTypeShip(state, action: PayloadAction<string>) {
            state.queryParams.ship_type = action.payload
        },
        setPortShip(state, action: PayloadAction<string>) {
            state.queryParams.home_port = action.payload
        }
    },
    extraReducers: {
        [fetchAllShips.pending.type]: (state) => {
            state.isLoading = true
            state.shipsData = []
        },
        [fetchAllShips.fulfilled.type]: (state, action: PayloadAction<ShipsDataType[]>) => {
            state.isLoading = false
            state.error = ''
            state.shipsData = action.payload
        },
        [fetchAllShips.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
            state.shipsData = []
        },
    }
})

export const {setSearchName, setTypeShip, setPortShip, setCurrentPage} = shipsSlice.actions

export const shipsReducer = shipsSlice.reducer