import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { JsonServerSlice } from './components/API/JsonServer';



export const store = configureStore({
    reducer: {
        [JsonServerSlice.reducerPath] : JsonServerSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(JsonServerSlice.middleware),
 })

 setupListeners(store.dispatch)