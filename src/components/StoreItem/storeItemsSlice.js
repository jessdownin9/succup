import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk('storeItems/fetchItems', 
    async () => {
        let response = await fetch('/products');
        let jsonResponse = await response.json();
        console.log('HERE', jsonResponse);
        return jsonResponse;
    }
);

export const storeItemsSlice = createSlice({
    name: 'storeItems',
    initialState: {
        items: [],
        isLoading: false,
        hasError: false,
        loaded: false
    },
    extraReducers: 
        (builder) => {
            builder
                .addMatcher(
                    (action) => action.type.endsWith('/pending'),
                    (state, action) => {
                        state.isLoading = true;
                    }
                )
                .addMatcher(
                    (action) => action.type.endsWith('/fulfilled'),
                    (state, action) => {
                        state.items = [];
                        state.items = action.payload;
                        state.loaded = true;
                        state.isLoading = false;
                    }
                )
                .addMatcher(
                    (action) => action.type.endsWith('/rejected'),
                    (state, action) => {
                        state.isLoading = false;
                        state.hasError = true;
                    }
                )
        }
});

export const selectItems = (state) => state.storeItems.items;
export const selectLoaded = (state) => state.storeItems.loaded;

export default storeItemsSlice.reducer;