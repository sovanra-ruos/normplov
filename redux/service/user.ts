import { normPlovApi } from "../api";
type UserResponse={
  payload: UserPayload;
  message?: string;
}
type UserPayload = {
    uuid: string;
    username: string;
    avatar: string | null;
    address: string | null;
    bio: string | null;
    gender: string | null;
    date_of_birth: string | null;
};

export const userApi = normPlovApi.injectEndpoints({
    endpoints: (builder) =>({
        getUser: builder.query<UserResponse, void>({
            query: () => ({
                url: `user/me`,
              method: "GET",
            }),
          }),
    })
})

export const {
  useGetUserQuery
} = userApi;