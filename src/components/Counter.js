import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { counterActions } from "../store/counter-slice";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  // const counter = useSelector(state => state.counter);
  // const show = useSelector(state => state.showCounter);

  // working with multiple slices
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 });
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => { };

//   render() {
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}> {this.props.counter} </div>
//       <div>
//         <button onClick={incrementHandler.bind(this)}>Increment</button>
//         <button onClick={decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// for class components
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// for functional components
export default Counter;
