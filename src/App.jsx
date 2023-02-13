import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment,IncrementBy2 } from "./redux/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch=useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>El store que hay es {counter }</p>
        <button type="button" onClick={() => dispatch(increment())}>
          increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(IncrementBy2(3))}>
          increment By
        </button>
      </header>
    </div>
  );
}

export default App;
