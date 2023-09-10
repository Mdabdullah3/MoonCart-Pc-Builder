import { configureStore } from '@reduxjs/toolkit'
import pcBuilderSlice from './features/pcBuilder/pcBuilderSlice'

export const store = configureStore({
    reducer: {
        pcBuilder: pcBuilderSlice
    },
})