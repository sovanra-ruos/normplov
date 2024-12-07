  // import { PayloadAction, createSlice } from '@reduxjs/toolkit';
  // type verifyState ={
  //   email: string | null; 

  // }
  // const initialState:verifyState = {
  //   email: null
  // };

  // const verifySlice = createSlice({
  //   name: 'verify',
  //   initialState,
  //   reducers: {
  //     setEmail: (state, action:PayloadAction<string>) => {
  //       state.email = action.payload;
  //     }
  //   },
  // });


  // export const { setEmail } = verifySlice.actions;

  // export default verifySlice.reducer;

  // import { PayloadAction, createSlice } from "@reduxjs/toolkit";

  // type VerifyState = {
  //   email: string | null;
  //   reset_code: string | null;
  // };

  // const initialState: VerifyState = {
  //   email: null,
  //   reset_code: null,
  // };

  // const verifySlice = createSlice({
  //   name: "verify",
  //   initialState,
  //   reducers: {
  //     setEmail: (state, action: PayloadAction<string>) => {
  //       state.email = action.payload;
  //     },
  //     setResetCode: (state, action: PayloadAction<string>) => {
  //       state.reset_code = action.payload;
  //     },
  //     clearVerifyState: (state) => {
  //       state.email = null;
  //       state.reset_code = null;
  //     },
  //   },
  // });

  // export const { setEmail, setResetCode, clearVerifyState } = verifySlice.actions;

  // export default verifySlice.reducer;

  import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type VerifyState = {
  email: string | null;
  reset_code: string | null;
};

const initialState: VerifyState = {
  email: null,
  reset_code: null,
};

const verifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setResetCode: (state, action: PayloadAction<string>) => {
      state.reset_code = action.payload;
    },
  },
});

export const { setEmail, setResetCode } = verifySlice.actions;

export default verifySlice.reducer;
