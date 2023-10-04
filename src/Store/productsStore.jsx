import { createSlice } from "@reduxjs/toolkit";

const productsStore = createSlice({
    name: 'products',
    initialState: {
        filteredProducts: [],
        cartProducts: [],
        favProducts: [],
        searchedProduct:[]
    },
    reducers: {
        sendData:(state ,action)=>{
           state.searchedProduct=action.payload
        },
        filterProducts: (state, action) => {
            state.filteredProducts = action.payload;
        },
        filterProductsByPrice: (state, action) => {
            state.filteredProducts = action.payload;
        },
        filterProductsByRating: (state, action) => {
            state.filteredProducts = action.payload;
        },
        filterProductsBySearch: (state, action) => {
            state.filteredProducts = action.payload;
        },
        filterDashboardProductsBySearch: (state, action) => {
            state.filteredProducts = action.payload;
        },
        addToCart: (state, action) => {
            const item = state.cartProducts.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.cartProducts.push(action.payload);
            }
        },
        addToFav: (state, action) => {
            const item = state.favProducts.find((item) => item.id === action.payload.id);
            if (item) {
              state.favProducts = state.favProducts.filter((item) => item.id !== action.payload.id);
              action.payload.isClicked = false;
            } else {
                state.favProducts.push(action.payload);
                action.payload.isClicked = true; // Set isClicked property on action.payload
            }
          },
        deleteItem: (state, action) => {
            state.cartProducts = state.cartProducts.filter((item) => item.id !== action.payload);
        },
        resetCart: (state, ) => {
            state.cartProducts = [];
        },
        incrementQuantity: (state, action) => {
            const item = state.cartProducts.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cartProducts.find((item) => item.id === action.payload);
            if (item) {
                if (item.quantity === 1) {
                    item.quantity = 1;
                } else {
                    item.quantity -= 1;
                }
            }
        },
        closeSearchBar:(state )=>{
           state.filteredProducts=[]
        },
    },
});

export const {
    filterProducts,
    filterProductsByPrice,
    filterProductsByRating,
    filterProductsBySearch,
    filterDashboardProductsBySearch,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    resetCart,
    deleteItem,
    addToFav,
    closeSearchBar,
    sendData
} = productsStore.actions;

export default productsStore.reducer;