import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@//redux/store";
type initialStateType ={
    token: string | null;  // assuming token is string for simplicity
}
const initialState : initialStateType = {
    token: null 
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAccessToken(state, action: PayloadAction<string>) {
          console.log("AuthSlice Access Token Set in Redux:", action.payload); // Log token
          state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
          },
      },
      
    // reducers: {
    //     setAccessToken(state, action: PayloadAction<string> ) {
    //         console.log("Access Token Set in Redux:", action.payload);
    //         state.token = action.payload;
    //     },
    // },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;

// customize selector for easy component access
export const selectToken = (state: RootState) => state.auth.token;
