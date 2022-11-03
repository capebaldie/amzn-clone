import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //* action payload contains the items we passed into redux
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      //* finds the index of the selected item by checking if the id is equal to the action id
      //* (which is the one we passed through remove cart function)
      const index = state.items?.findIndex(
        (basketItem) => basketItem.id === action.payload?.id
      );
      let newBasket = [...state.items]; // passing all items

      //! deleting the index from the redux store if the index is > 0 (ofcourse it will be)

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("error");
      }
      //? assigning the new spliced items and pushing it to redux store
      state.items = newBasket;
    },
    checkoutFromBasket: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToBasket, removeFromBasket, checkoutFromBasket } =
  basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

// * for finding the total price
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
