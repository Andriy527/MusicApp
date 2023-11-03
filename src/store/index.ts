import {configureStore} from "@reduxjs/toolkit";
import tracksSlice from "./slices/tracksSlice.ts";
import playerSlice from "./slices/playerSlice.ts";

const store = configureStore({
    reducer: {
        tracks: tracksSlice,
        player: playerSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
