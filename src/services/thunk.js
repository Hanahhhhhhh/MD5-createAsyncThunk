import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

let URL = 'http://localhost:3001/products';
export const addProductThunk = createAsyncThunk(
    'products/add',
    async (values) => {
        return await axios.post(`${URL}`, values)
    }
)
export const updateProductThunk = createAsyncThunk(
    'products/edit',
    async (values) => {
        return await axios.put(`${URL}/${values.id}`, {data: values});
    }
)
export const deleteProductThunk = createAsyncThunk(
    'products/delete',
    async (idDelete) => {
        await axios.delete(`${URL}/${idDelete}`)
        return idDelete
    }
)
export const getAllProductThunk = createAsyncThunk(
    'products/getAll',
    async () => {
        const {data} = await axios.get(`${URL}`)
        return data
    }
)
export const getDetailProductThunk = createAsyncThunk(
    'products/getDetail',
    async (id)=>{
        return await axios.get(`${URL}/${id}`)
    }
)