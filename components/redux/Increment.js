import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../.././slices/counterSlice';

export const Increment = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment State</button>
        </div>
    )
}

export default Increment;
