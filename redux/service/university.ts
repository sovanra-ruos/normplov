// kimla Pro
import { normPlovApi } from "../api";
// Create the API slice with redux-toolkit's createApi
export const universityApi = normPlovApi.injectEndpoints({
    endpoints: (builder) => ({
      // Fetch universities with optional search and filter parameters
      getUniversities: builder.query({
        query: (filters: {
          search?: string;
          province_uuid?: string;
          type?:string;
          page?: number;
        }) => {
          // Construct query parameters for search and filter
          const query = new URLSearchParams();
          if (filters.search) query.append("search", filters.search);
          if (filters.province_uuid) query.append("province_uuid", filters.province_uuid);
          if (filters.type) query.append('type', filters.type);
          if (filters.page) query.append("page", filters.page.toString());
  
          return {
            url: `schools?${query.toString()}`,
            method:"GET"
          };
        },
      }),
    }),
  });
  export const { useGetUniversitiesQuery } = universityApi;
  