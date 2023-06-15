import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../Redux-store/store';

interface product {
    name: string,
    korean: boolean,
    new: boolean,
    price: number,
    note: string,
    category: string,
    hemohim: boolean
}

interface ProductState {
    products: product[]
}

const initialState: ProductState = {
    products: [
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Hemohim', 
    korean: false, new: false, price: 7000, note: '20мл x 60 саше - 1 месяц приема', category: 'БАДы и Витамины', hemohim: true },
    { name: 'Atomy Hemohim 4SET', 
    korean: false, new: false, price: 26000, note: '4 коробки x 60 саше x 20мл - 4 месяца приема', category: 'БАДы и Витамины', hemohim: true },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },
    { name: 'Atomy Toothpast', 
    korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false },]
}
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})