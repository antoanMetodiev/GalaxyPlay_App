
// това създава store-a в който се държат всички редуктори:
import { configureStore } from '@reduxjs/toolkit';

// това е редуктор:
import userReducer from '../reducers/userSlice'; 

const store = configureStore({
    reducer: {
        user: userReducer,
         // Това е място за още редуктори (като userReducer):
    },
});

export default store;
