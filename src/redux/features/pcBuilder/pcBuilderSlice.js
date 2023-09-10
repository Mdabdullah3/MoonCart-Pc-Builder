import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

const initialState = {
    pc: {
        processor: {},
        RAM: {},
        monitor: {},
        other: {},
        psu: {},
        Storage: {},
        motherboard: {}
    }
}

const PcBuilderSlice = createSlice({
    name: "PcBuilder",
    initialState,
    reducers: {
        addToPc: (state, action) => {
            const { category, product } = action.payload;
            state.pc[category] = product
        },
        removeFromPc: (state, action) => {
            const { category, product } = action.payload;
            state.pc[category] = {}
        }
    }
})

export const { addToPc, removeFromPc } = PcBuilderSlice.actions;

export default PcBuilderSlice.reducer;