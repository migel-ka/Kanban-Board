import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '..//componets/taskSlice'; // Импортируйте ваш слайс

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
