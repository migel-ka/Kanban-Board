import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '..//componnets/taskSlice'; // Импортируйте ваш слайс

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
