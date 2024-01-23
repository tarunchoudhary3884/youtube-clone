import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    categoryId: "0",
    isMobile: false,
    isSearchOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    setCategoryId: (state, action) => {
      if (state.categoryId !== action.payload)
        state.categoryId = action.payload;
      else state.categoryId = "0";
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    toggleSearchOpen: (state) => {
      state.isSearchOpen = !state.isSearchOpen;
    },
    closeSearchOpen: (state) => {
      state.isSearchOpen = false;
    },
  },
});

export const {
  toggleMenu,
  closeMenu,
  openMenu,
  setCategoryId,
  setIsMobile,
  toggleSearchOpen,
  closeSearchOpen,
} = appSlice.actions;
export default appSlice.reducer;
