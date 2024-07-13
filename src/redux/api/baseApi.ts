import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://pro-gear-backend.vercel.app/api/',
		credentials: 'include',
	}),
	tagTypes: ['product'],
	endpoints: () => ({}),
});
