import {useState, ChangeEvent} from 'react'
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrement, increment, reset, incrementByValue } from "./counterSlice";


const Counter = () => {

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();
    const [incrementValue, setIncrementValue] = useState('');

    let value = Number(incrementValue) | 0;

    const handleIncrement = ()=>{
        dispatch(increment());
    }
    const handleDecrement = ()=>{
        dispatch(decrement())
    }
    const handleReset = ()=>{
        setIncrementValue('');
        dispatch(reset());
    }
    const addAmountClick = ()=>{
        dispatch(incrementByValue(value));
    }

  return (
    <div className="counter-app">
        <h2>{count}</h2>
        <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
            <input type='number' value={incrementValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setIncrementValue(e.target.value)}/>
            <br/>
            <button onClick={addAmountClick} >Add Amount</button>
    </div>
  )
}

export default Counter
