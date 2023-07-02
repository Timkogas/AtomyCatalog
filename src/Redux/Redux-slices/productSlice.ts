import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../Redux-store/store';

interface product {
    name: string,
    korean: boolean,
    new: boolean,
    price: number,
    note: string,
    category: string,
    hemohim: boolean,
    id:number,
    body:string
}

interface ProductState {
    products: product[]
}

const initialState: ProductState = {
    products: [
        {   id:111111,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Одежда и другое', hemohim: false
        },
        {   
            id:111112,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Одежда и другое', hemohim: false
        },
        {   id:111113,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Одежда и другое', hemohim: false
        },
        {   
            id:111114,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Одежда и другое', hemohim: false
        },
        {   
            id:111115,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Одежда и другое', hemohim: false
        },
        {   
            id:111116,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Еда и напитки', hemohim: false
        },
        {   id:111117,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Еда и напитки', hemohim: false
        },
        {   id:111118,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Еда и напитки', hemohim: false
        },
        {   id:111119,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Еда и напитки', hemohim: false
        },
        {   id:111129,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: true, new: false, price: 1100, note: '200гр x 5шт', category: 'Еда и напитки', hemohim: false
        },
        {   id:111139,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Еда и напитки', hemohim: false
        },
        {   id:111149,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Товары для дома', hemohim: false
        },
        {   id:111159,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: true, new: false, price: 1100, note: '200гр x 5шт', category: 'Товары для дома', hemohim: false
        },
        {   id:111169,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Товары для дома', hemohim: false
        },
        {   id:1111179,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: true, new: false, price: 1100, note: '200гр x 5шт', category: 'Товары для дома', hemohim: false
        },
        {   id:111189,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Товары для дома', hemohim: false
        },
        {   id:111199,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: true, new: false, price: 1100, note: '200гр x 5шт', category: 'Товары для дома', hemohim: false
        },
        {   id:111299,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false
        },
        {   id:111399,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false
        },
        {   id:111499,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false
        },
        {   id:111599,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false
        },
        {   id:111699,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false
        },
        {   id:111799,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false
        },
        {   id:111899,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false
        },
        {   id:111999,
            name: 'Atomy Toothpast',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 1100, note: '200гр x 5шт', category: 'Личная гигиена', hemohim: false
        },
        {   id:112999,
            name: 'Atomy Hemohim',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 7000, note: '20мл x 60 саше - 1 месяц приема', category: 'БАДы и Витамины', hemohim: true
        },
        {   id:113999,
            name: 'Atomy Hemohim 4SET',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: false, price: 26000, note: '4 коробки x 60 саше x 20мл - 4 месяца приема', category: 'БАДы и Витамины', hemohim: true
        },
        {   id:114999,
            name: 'Atomy Toothpast new',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: true, price: 1100, note: '200гр x 5шт', category: 'Бады и Витамины', hemohim: false
        },
        {   id:115999,
            name: 'Atomy Toothpast new',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: true, price: 1100, note: '200гр x 5шт', category: 'БАДы и Витамины', hemohim: false
        },
        {   id:116999,
            name: 'Atomy Toothpast new',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: true, price: 1100, note: '200гр x 5шт', category: 'БАДы и Витамины', hemohim: false
        },
        {   id:117999,
            name: 'Atomy Toothpast new',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: true, new: true, price: 1100, note: '200гр x 5шт', category: 'Косметика', hemohim: false
        },
        {   id:118999,
            name: 'Atomy Toothpast new',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: true, price: 1100, note: '200гр x 5шт', category: 'Косметика', hemohim: false
        },
        {   id:119999,
            name: 'Atomy Toothpast new',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: true, new: true, price: 1100, note: '200гр x 5шт', category: 'Косметика', hemohim: false
        },
        {   id:129999,
            name: 'Atomy Toothpast new',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: false, new: true, price: 1100, note: '200гр x 5шт', category: 'Косметика', hemohim: false
        },
        {   id:139999,
            name: 'Atomy Toothpast new',
            body:"Поверхносто-активные вещества растительного происхождения и 7 видов энзимов для удаления сложных загрязнений и следов от кофе, еды, косметики и т.п.",
            korean: true, new: true, price: 1100, note: '200гр x 5шт', category: 'Косметика', hemohim: false
        },
    ]
}
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})
export const selectProducts = (state: RootState) => state.products.products

export default productSlice.reducer;