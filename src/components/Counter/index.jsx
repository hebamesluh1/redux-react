import React, { useState } from 'react'

import { decrement, increment,reset,incrementByAmount } from '../../redux/counter'
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    const [incrementyAmountB,setIcrementByAmount]=useState(0);
    const addValue = Number(incrementyAmountB)||0;
    const resetAll=()=>{
        setIcrementByAmount(0);
        dispatch(reset())
    }
  return (
    <section>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <div style={{color:"#f00"}}>
            <input 
            type="text"
            value={incrementyAmountB}
            onChange={(e)=>setIcrementByAmount(e.target.value)}/>
            <button onClick={()=>dispatch(incrementByAmount(addValue))}>Increment by amount</button>
            <button onClick={resetAll}>Reset All </button>
        </div>
    </section>
  )
}

export default Counter