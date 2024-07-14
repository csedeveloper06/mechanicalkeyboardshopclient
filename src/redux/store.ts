import { configureStore } from '@reduxjs/toolkit';
import mechanicalKeyboardReducer from './features/mechanicalKeyboardSlice';

export const store = configureStore({
    reducer : {
        mechanicalKeyboards : mechanicalKeyboardReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch