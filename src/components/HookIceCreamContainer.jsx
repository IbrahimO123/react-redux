import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { buyIceCream } from '../redux';

function HookIceCreamContainer() {
    const numberOfIceCreams = useSelector((state) => state.iceCream.numberOfIceCreams )
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Number of Ice-Cream : {numberOfIceCreams}</h3>
        <button onClick={() => dispatch(buyIceCream())} >Buy Ice-Cream</button>
    </div>
  )
}

export default HookIceCreamContainer