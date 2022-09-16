import {createSlice} from "@reduxjs/toolkit";
import {
    addProductThunk,
    deleteProductThunk,
    getAllProductThunk,
    getDetailProductThunk,
    updateProductThunk
} from "./thunk";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        product :{}

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductThunk.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(addProductThunk.fulfilled,(state, action)=>{
                 state.products.push(action.payload.data)
            })
            .addCase(updateProductThunk.fulfilled, (state, action) => {
                state.products = state.products.map((item, index) => {
                        if (item.id === action.payload.data.id) {
                            item = action.payload.data;
                        }
                        return item;
                    }
                );
            })
            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => {
                    return !(product.id == action.payload)
                })
            })
            .addCase(getDetailProductThunk.fulfilled,((state, action) => {
                state.product = state.product.find((product)=>{
                    return !(product.id == action.payload)
                })
            }))

    }

})
export default productSlice;