import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement } from '../.././slices/counterSlice';

export const Decrement = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>Decrement State</button>
        </div>
    )
}

export default Decrement;