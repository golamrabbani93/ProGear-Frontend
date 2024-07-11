import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TProduct {
	id?: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	rating?: number;
	brand: string;
	quantity: number;
	inStock?: boolean;
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
			const existingProduct = state.products.find((product) => product.id === action.payload.id);

			if (existingProduct) {
				existingProduct.quantity += action.payload.quantity;
			} else {
				state.products.push({...action.payload});
			}
		},
	},
});

export default cartSlice.reducer;
