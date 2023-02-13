import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    counter: 10
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1
    },
    decrement: (state) => {      
      state.counter-=1
    }
    ,
    IncrementBy2: (state,action) => {      
      state.counter +=action.payload
    }
      
    
   
  },
  
})

// Action creators are generated for each case reducer function
export const { increment,decrement,IncrementBy2 } = counterSlice.actions
