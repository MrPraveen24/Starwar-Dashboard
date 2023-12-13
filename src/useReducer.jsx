import React, { useReducer } from "react";
const reducer = (state,action) => {
    if(action.type == "increment"){
        state += 1;
    }else{
        state -= 1;
    }

    return state;
}

const Reducer = () => {
    const [Films,dispatch] = useReducer(reducer,[]);

    return (
        <>
        <div style={{display:'flex',flexDirection : 'column',justifyContent : 'Center'}}>
        <div>{state}</div>
        <button style={{color : 'red'}} onClick={() => dispatch({type : "increment"})}>Increment</button>
        <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>
        </div>
        </>
    )
}

export default Reducer;