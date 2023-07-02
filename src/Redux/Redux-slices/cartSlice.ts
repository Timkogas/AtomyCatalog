import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface product {
    name:string,
    id:number,
    price:number,
    amount:number
}
export interface CartState {
    products: product[]
  }
  const initialState: CartState = {
    products: []
  }

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    cartAdd:(state, action:PayloadAction<product>)=>{
        state.products.push(action.payload);
        console.log(action.payload, state.products)
    },
    cartRemove:(state,action:PayloadAction<product['id']>)=>{
      state.products = state.products.filter(el=>action.payload!=el.id);
    }
    }
})
export const selectCart = (state: CartState) => state.products;
export const { cartAdd, cartRemove } = cartSlice.actions;
export default cartSlice.reducer;