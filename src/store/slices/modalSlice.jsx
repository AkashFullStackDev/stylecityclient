import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    isActive: false,
    message: "",
  },
  reducers: {
    enableModal(state, action) {
      return {
        isActive: true,
      };
    },
    disableModal() {
      return {
        isActive: false,
      };
    },
  },
});

export default modalSlice.reducer;
export const { enableModal, disableModal } = modalSlice.actions;
