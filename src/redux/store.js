import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';
import socialReducer from './socialSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        social: socialReducer,
    }
});

export default store;
