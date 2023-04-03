import {configureStore} from "@reduxjs/toolkit";
import {shipsReducer} from "widgets/ships";

export const store = configureStore({
    reducer: {
        ships: shipsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});
