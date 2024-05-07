import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const CountercompShow = createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        add:(x)=>{
            x.value +=5
        },
        sub:(x)=>{
            x.value -=5;
        },
        reset:(x)=>{
            x.value =0;
        },
    }
})

export const {add,sub, reset}=CountercompShow.actions
export const initValue=(x)=> x.counter.value


export default CountercompShow.reducer
