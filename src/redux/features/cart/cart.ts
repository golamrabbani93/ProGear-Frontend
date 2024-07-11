import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TProduct {
	_id?: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	rating?: number;
	brand: string;
	quantity: number;
	stock?: boolean;
}
interface ProductsState {
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
	},
});

export default cartSlice.reducer;
