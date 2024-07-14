import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    mechanicalKeyboards : [],
};

const mechanicalKeyboardSlice = createSlice({
    name : 'mechanicalKeyboard',
    initialState,
    reducers: {},
});

export default mechanicalKeyboardSlice.reducer;

