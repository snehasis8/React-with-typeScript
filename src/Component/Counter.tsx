import React, { useReducer, useState } from 'react'


const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

const reducer = (state: any, action: any) => {
  console.log(action);

  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + action.payLoad };
    case ACTIONS.DECREMENT:
      return { count: state.count - action.payLoad };
    default:
      return state;
  }


}



const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const [inputVal, setInpuutVal] = useState<string>('');
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "0.5rem", justifyContent: "space-evenly", margin: "1rem", border: "1px solid red" }} >
      <div  >Count {state.count}   <input placeholder='add value to increment or decrement ' value={inputVal} type='number' onChange={(e) => setInpuutVal(e.target.value)} /></div>
      <button onClick={() => {
        if (inputVal.length > 0) {
          setInpuutVal('');
          dispatch({ type: ACTIONS.INCREMENT, payLoad: Number(inputVal) })
        } else {
          dispatch({ type: ACTIONS.INCREMENT, payLoad: 1 })
        }


      }}> +</button>
      <button onClick={() => {
        if (inputVal.length > 0) {
          setInpuutVal('');
          dispatch({ type: ACTIONS.DECREMENT, payLoad: Number(inputVal) })
        } else {
          dispatch({ type: ACTIONS.DECREMENT, payLoad: 1 })
        }


      }}> -</button>


    </div>
  )
}

export default Counter