import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export interface TProduct {
	_id: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	rating?: number;
	brand: string;
	quantity: number;
	stock: number;
}
export interface ProductsState {
	products: TProduct[];
}

const initialState: ProductsState = {
	products: [],
};
export const cartSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<TProduct>) => {
			const existingProduct = state.products.find((product) => product._id === action.payload._id);

			if (existingProduct) {
				existingProduct.quantity += action.payload.quantity;
			} else {
				state.products.push({...action.payload});
			}
		},
		updateQuantity: (state, action) => {
			const existingProduct = state.products.find((product) => product._id === action.payload._id);
			if (existingProduct) {
				existingProduct.quantity = Number(action.payload.value);
			}
		},
		deleteProduct: (state, action) => {
			state.products = state.products.filter((product) => product._id !== action.payload._id);
		},
	},
});
export const {addProduct, updateQuantity, deleteProduct} = cartSlice.actions;

export const getCurrentCart = (state: RootState) => state.cart.products;
export default cartSlice.reducer;
