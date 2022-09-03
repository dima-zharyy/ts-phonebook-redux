import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Types
export type TItem = {
  id: string;
  name: string;
  number: string;
};

interface IAppReduxStore {
  items: TItem[];
  filter: string;
}

// Slice
const initialState: IAppReduxStore = {
  items: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TItem>) {
      state.items.push(action.payload);
    },

    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    changeFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

// Persist reducer
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Actions
export const { addItem, deleteItem, changeFilter } = contactsSlice.actions;

// Selectors
export const getItems = (state: RootState) => state.contacts.items;
export const getFilter = (state: RootState) => state.contacts.filter;
