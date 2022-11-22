import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAtions = createAsyncThunk(
    "products/getProducts",
    async () => {
        const response = await axios.get("http://restaurantproject.duckdns.org:4000/actions");
        return response.data;
    }
);

//actions entity
const productEntity = createEntityAdapter({
    selectId: (action) => action.idAction,
});


export const ActionSlice = createSlice({
    name: "actionSlice",
    initialState: get
})