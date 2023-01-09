import React from 'react'
import { buyCake} from "../redux"
import {useSelector, useDispatch} from "react-redux"

function HookCakeConatiner() {
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Num of Cakes - {numberOfCakes}</h3>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HookCakeConatiner