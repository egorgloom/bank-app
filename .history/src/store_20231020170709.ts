import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { JsonServerSlice } from './../.history/src/components/api/JsonServer_20231020170048';

export const store = configureStore({
    reducer: {
        [JsonServerSlice.reducerPath] : JsonServerSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(JsonServerSlice.middleware),
 })

 setupListeners(store.dispatch)