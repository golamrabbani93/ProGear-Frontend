import {baseApi} from '../../api/baseApi';

const productsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: (params) => {
				return {
					url: '/product',
					method: 'GET',
					params,
				};
			},
			providesTags: ['product'],
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
		updateSingleProduct: builder.mutation({
			query: ({id, data}) => {
				return {
					url: `/product/${id}`,
					method: 'PUT',
					body: data,
				};
			},
			invalidatesTags: ['product'],
		}),
		deleteSingleProduct: builder.mutation({
			query: (id) => {
				return {
					url: `/product/${id}`,
					method: 'DELETE',
				};
			},
			invalidatesTags: ['product'],
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useGetSingleProductQuery,
	useCreateSingleProductMutation,
	useUpdateSingleProductMutation,
	useDeleteSingleProductMutation,
} = productsApi;
export default productsApi;
