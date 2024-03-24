

import { configureStore } from "@reduxjs/toolkit";
import  Slicart from "./SliceCart"

 const store = configureStore({
    reducer: {
        Cart: Slicart,
      },

 })
 export default store;