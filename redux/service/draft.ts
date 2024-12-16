import { normPlovApi } from "../api";

// Define the type for each test item
type DraftItem ={
    uuid: string;
    draft_name: string;
    assessment_name:string;
    created_at: string;
    updated_at:string;
  }
  
  // Define the type for pagination metadata
type Metadata ={
    page: number;
    page_size: number;
    total_items: number;
    total_pages: number;
  }
  
  // Define the response structure for the API
type UserDraftResponse ={
    date: string;
    status: number;
    payload: {
      items: DraftItem[];  // Array of test items
      metadata: Metadata;  // Pagination metadata
    };
    message: string;
  }
type UserDraftDeleteResponse={
  status: number;
  message: string;
}
  
export const draftApi = normPlovApi.injectEndpoints({
  endpoints: (builder) => ({  
    getAllUserDraft: builder.query<UserDraftResponse, { page: number; page_size: number }>({
        query: ({ page = 1, page_size= 10 }) =>({
            url: `api/v1/draft/load-drafts?page=${page}&page_size=${page_size}`,
            method: "GET",
        })
         
    }),
    deleteUserDraft: builder.mutation<UserDraftDeleteResponse, {uuid: string}>({
      query: ({uuid})=>({
        url:`api/v1/draft/delete-draft-assessment/${uuid}`,
        method:"DELETE",
        invalidatesTags:["userDraft"]
      }),
    })

  }),
});

export const {
 useGetAllUserDraftQuery,
 useDeleteUserDraftMutation
} = draftApi;