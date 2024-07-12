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
	}),
});

export const {useGetAllProductsQuery} = productsApi;
export default productsApi;
