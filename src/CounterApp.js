import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = ()=> setCounter(counter + 1);
  const handleSubstract = ()=> setCounter(counter - 1);
  const handleReset = ()=> setCounter(0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <nav>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstract}>-1</button>
      </nav>
      
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
