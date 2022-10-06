import { configureStore } from "@reduxjs/toolkit";
import schemaReducer from './schemaSlice'


export default configureStore({
  reducer: {
    schemaReducer
  },
});