import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props) {
    const {numberOfCakes, buyCake} = props;
  return (
    <div>
        <h3>Number of Cakes {numberOfCakes}</h3>
        <button onClick={buyCake} >Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)