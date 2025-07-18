import { useReducer } from "react";

export default function Container () {
    const [count, countDispatch] = useReducer (reducer, 0);

    function reducer (state, action) {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'divide by 10':
                return state / 10;
            case 'multiply by 10':
                return state * 10;
            default:
                throw new Error ('Uncknown action : ' + action.type)
        }
    }

    return (
        <>
            <h1>Compteur : {count}</h1>
            <button onClick={() => countDispatch ({type: 'increment'})}>Incrementer</button>
            <button onClick={() => countDispatch ({type: 'decrement'})}>Decrementer</button>
            <button onClick={() => countDispatch ({type: 'divide by 10'})}>Diviser par 10</button>
            <button onClick={() => countDispatch ({type: 'multiply by 10'})}>Multiplier par 10</button>
        </>
    )
}