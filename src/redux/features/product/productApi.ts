import {baseApi} from '../../api/baseApi';

const productsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: (params) => {
				console.log(params);

				return {
					url: '/product',
					method: 'GET',
					params,
				};
			},
		}),
		getSingleProduct: builder.query({
			query: ({id}) => {
				return {
					url: `/product/${id}`,
					method: 'GET',
				};
			},
		}),
	}),
});

export const {useGetAllProductsQuery, useGetSingleProductQuery} = productsApi;
export default productsApi;
