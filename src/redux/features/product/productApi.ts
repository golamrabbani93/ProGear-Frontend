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
		createSingleProduct: builder.mutation({
			query: (data) => {
				return {
					url: `/product`,
					method: 'POST',
					body: data,
				};
			},
		}),
	}),
});

export const {useGetAllProductsQuery, useGetSingleProductQuery, useCreateSingleProductMutation} =
	productsApi;
export default productsApi;
