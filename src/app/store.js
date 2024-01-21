import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movies/moviesSlice'
export default configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable values
    }),
})