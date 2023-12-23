import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './characterSlice'
export const Store = configureStore({
  reducer:{
    character: characterSlice
  }
})