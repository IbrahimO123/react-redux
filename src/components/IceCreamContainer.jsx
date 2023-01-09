import React from 'react'
import { connect } from 'react-redux'
import {buyIceCream} from "../redux" 
function IceCreamContainer(props) {
    const {numberOfIceCreams, buyIceCream} = props
  return (
    <div>
        <h3>Num of Ice-Cream : {numberOfIceCreams}</h3>
        <button onClick={buyIceCream} >Buy Ice-Cream</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    numberOfIceCreams: state.iceCream.numberOfIceCreams
})

const mapDispatchToProps = (dispatch) => ({
    buyIceCream: () => dispatch(buyIceCream())
})


export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)