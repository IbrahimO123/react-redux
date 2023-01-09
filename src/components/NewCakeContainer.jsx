import React, {useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const { numberOfCakes, buyCake } = props;
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h3>Number of Cakes {numberOfCakes}</h3>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} ></input>
      <button onClick={()=>buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
