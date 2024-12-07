import { createApi, fetchBaseQuery, FetchBaseQueryError, QueryReturnValue, BaseQueryApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { setAccessToken } from "./feature/auth/authSlice";

// Correcting the BaseQueryArgs type definition
type BaseQueryArgs = {
  url: string;
  method: string;
  body?: unknown; // You can refine this type further depending on the structure of your request body
};

// Change to `Record<string, unknown>` instead of `{}` for object options
type BaseQueryOptions = Record<string, unknown>; // Object with unknown properties

// Setting up the baseQuery with headers, including the token in the request
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_NORMPLOV_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Adjusting the type for return value of `baseQueryWithReAuth`
type BaseQueryReturnType = QueryReturnValue<unknown, FetchBaseQueryError, Record<string, unknown>>;

// baseQueryWithReAuth with the proper type
const baseQueryWithReAuth = async (
  args: BaseQueryArgs,
  api: BaseQueryApi, // Replacing `any` with the correct type from Redux Toolkit
  extraOptions: BaseQueryOptions
): Promise<BaseQueryReturnType> => {
  let result = await baseQuery(args, api, extraOptions);

  // Check if the response is a 401 Unauthorized and try to refresh the token
  if (result.error?.status === 401) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      api.dispatch(setAccessToken(data.accessToken)); // Dispatch the new token to the store
      result = await baseQuery(args, api, extraOptions); // Re-run the query with the new token
    } else {
      const logoutRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}logout`, {
        method: "POST",
        credentials: "include",
      });
      const data = await logoutRes.json();
      console.log(data);
    }
  }

  return result;
};

// Create the API service with Redux Toolkit's `createApi`
export const normPlovApi = createApi({
  reducerPath: "normPlovApi",
  baseQuery: baseQueryWithReAuth, // Use the custom base query with re-authentication logic
  endpoints: () => ({}),
});

