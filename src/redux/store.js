import { configureStore } from '@reduxjs/toolkit'
import counter from './counter'
import posts from './posts';
import users from './user'
export const store = configureStore({
  reducer: {
    counter,
    posts,
    users
  },
})