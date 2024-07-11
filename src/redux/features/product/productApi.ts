import {baseApi} from '../../api/baseApi';

const productsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => ({
				url: '/product',
				method: 'GET',
			}),
		}),
	}),
});

export const {useGetAllProductsQuery} = productsApi;
export default productsApi;
