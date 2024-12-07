import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/src/redux/store";
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
        setAccessToken(state, action: PayloadAction<string> ) {
            state.token = action.payload;
        },
    },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;

// customize selector for easy component access
export const selectToken = (state: RootState) => state.auth.token;
