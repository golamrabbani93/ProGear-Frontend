import {baseApi} from '../../api/baseApi';

const categoryApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllGategory: builder.query({
			query: () => ({
				url: '/category',
				method: 'GET',
			}),
		}),
	}),
});

export const {useGetAllGategoryQuery} = categoryApi;
export default categoryApi;
