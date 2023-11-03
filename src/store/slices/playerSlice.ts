import {IPlayerState} from "../../models";
import {createSlice} from "@reduxjs/toolkit";

const initialState: IPlayerState = {
    selectTrack: null,
    duration: 0,
    volume: 50,
    currentTime: 0,
    pause: false
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        selectTrack(state, action) {
            state.selectTrack = action.payload;
        },
        setDuration(state, action) {
            state.duration = action.payload;
        },
        setCurrentTime(state, action) {
            state.currentTime = action.payload;
        },
        setVolume(state, action) {
            state.volume = action.payload;
        },
        setPause(state, action) {
            state.pause = action.payload;
        }
    }
})


export const {selectTrack, setDuration, setCurrentTime, setVolume, setPause} = playerSlice.actions;
export default playerSlice.reducer;