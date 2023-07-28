import { configureStore } from '@reduxjs/toolkit'
import counter from './counter'
import posts from './posts';

export const store = configureStore({
  reducer: {
    counter,
    posts
  },
})