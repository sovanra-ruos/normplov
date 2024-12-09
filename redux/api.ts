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
    const token = (getState() as RootState).auth.token
    console.log("Token retrieved for API call:", token); // Debugging
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
    console.log("Final request with headers:", args);

  // Check if the response is a 401 Unauthorized and try to refresh the token
  // if (result.error?.status === 401) {
  //   console.log("Access token expired, refreshing...");
  //   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}refresh`, {
  //     method: "POST",
  //     credentials: "include",
  //   });

  //   if (res.ok) {
  //     const data = await res.json();
  //     console.log("New Access Token:", data.accessToken);
  //     api.dispatch(setAccessToken(data.accessToken)); // Dispatch the new token to the store
  //     console.log(data.accessToken)
  //     result = await baseQuery(args, api, extraOptions); // Re-run the query with the new token
  //   } else {
  //     const logoutRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}logout`, {
  //       method: "POST",
  //       credentials: "include",
  //     });
  //     const data = await logoutRes.json();
  //     console.log(data);
  //   }
  // }
  if (result.error?.status === 401) {
    console.log("Unauthorized. Attempting token refresh...");
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}refresh`, {
      method: "POST",
      credentials: "include",
    });
  
    if (res.ok) {
      const data = await res.json();
      console.log("New Access Token:", data.accessToken); // Log new token
      api.dispatch(setAccessToken(data.accessToken)); // Update Redux with new token
      result = await baseQuery(args, api, extraOptions); // Retry original request
    } else {
      console.error("Token refresh failed.");
      // Optionally, handle logout or notify the user
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




// // Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "./store";
// import { setAccessToken } from "./feature/auth/authSlice";
// // initialize an empty api service that we'll inject endpoints into later as needed
// // Setting up prepareHeaders to include the token in the headers
// const baseQuery = fetchBaseQuery({
// 	baseUrl: process.env.NEXT_PUBLIC_NORMPLOV_API_URL,
// 	prepareHeaders: (headers, { getState }) => {
// 		const token = (getState() as RootState).auth.token;
//     console.log("Token: " + token);
// 		// if we have a token, let's set the authorization header
// 		if (token) {
// 			headers.set("authorization", `Bearer ${token}`);
// 		}
// 		return headers;
// 	},
// });
// // args: for the request details // api: for Redux api object // extraOptions: for additional
// const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
// 	// check result of each query. if it's a 401, we'll try to re-authenticate
// 	let result = await baseQuery(args, api, extraOptions);
// 	if (result.error?.status === 401) {
// 		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}refresh`, {
// 			method: "POST",
// 			credentials: "include",
// 		});
// 		if (res.ok) {
// 			const data = await res.json();
// 			api.dispatch(setAccessToken(data.accessToken));
//       console.log("AccessToken :",data.accessToken) // Log new token to console for debugging purposes. You should replace this with your own logging mechanism.
//       // re-run the query with the new token
// 			result = await baseQuery(args, api, extraOptions);
// 		} else {
// 			const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}logout`, {
// 				method: "POST",
// 				credentials: "include",
// 			});
// 			const data = await res.json();
// 			console.log(data);
// 		}
// 	}
// 	return result;
// };
// export const normPlovApi = createApi({
// 	reducerPath: "normPlovApi",
// 	baseQuery: baseQueryWithReAuth,
// 	endpoints: () => ({}),
// });