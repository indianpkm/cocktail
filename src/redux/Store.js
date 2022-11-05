import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./feature/cocktailSlice";

export default configureStore({
    reducer:{
        app:cocktailSlice,
    }
})