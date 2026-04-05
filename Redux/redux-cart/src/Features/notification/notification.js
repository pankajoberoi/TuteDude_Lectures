import { createSlice } from "@reduxjs/toolkit";

const notifiationSlice = createSlice({
  name: "notifiations",
  initialState: { list: [] },

  reducers: {
    addNotification: (state, action) => {
      state.list.push({
        id: Date.now(),
        message: action.payload,
      });
    },
    removeNotification: (state, action) => {
      state.list = state.list.filter((n) => n.id !== action.payload);
    },
  },
});

export const { addNotification, removeNotification } = notifiationSlice.actions;
export default notifiationSlice.reducer;
