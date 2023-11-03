import {createSlice} from "@reduxjs/toolkit";
import {ITrackState} from "../../models";
import {fetchTracks, searchTracks} from "../asyncActions/track.ts";

const initialState: ITrackState = {
    tracks: [],
    loading: false,
    error: null
}

const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        addTrack(state, action) {
            state.tracks.push(action.payload);
        },
        addComment(state, action) {
            state.tracks[action.payload.trackIndex].comments.push(action.payload.comment);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTracks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTracks.fulfilled, (state, action) => {
                state.tracks = action.payload;
                state.loading = false;
            })
            .addCase(searchTracks.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchTracks.fulfilled, (state, action) => {
                state.tracks = action.payload;
                state.loading = false;
            })
    }
})

export const {addTrack, addComment} = tracksSlice.actions;
export default tracksSlice.reducer;