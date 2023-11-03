import {createAsyncThunk} from "@reduxjs/toolkit";
import $axios from "../../http";
import {ITrack} from "../../models";
import {AxiosResponse} from "axios";

export const fetchTracks = createAsyncThunk<ITrack[], void, { rejectValue: string }>(
    'tracks/fetchTracks',
    async function (_, {rejectWithValue}) {
        try {
            const response: AxiosResponse<ITrack[]> = await $axios.get('tracks');

            if (response.status !== 200) {
                return rejectWithValue('Server error')
            }

            return response.data;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
)

export const searchTracks = createAsyncThunk<ITrack[], string, { rejectValue: string }>(
    'tracks/searchTracks',
    async function (searchParam, {rejectWithValue}) {
        try {
            const queryParams = {
                query: searchParam,
            };

            const response: AxiosResponse<ITrack[]> = await $axios.get('tracks/search', {
                params: queryParams,
            });

            if (response.status !== 200) {
                return rejectWithValue('Server error');
            }

            return response.data;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

