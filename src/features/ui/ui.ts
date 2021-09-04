import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  status: string;
};

const initialState: InitialState = {
  status: "initial",
};

const ui = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    updateStatus: (state) => {
      state.status = "updated";
    },
  },
});

export const { updateStatus } = ui.actions;
export default ui.reducer;
