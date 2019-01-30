import Vif, { useState, useAction, smart } from 'vif';

const delay = duration => new Promise(resolve => setTimeout(resolve, duration))

const incrementAction = () => (props, state) => ({
  value: state.value + 1
});

const resetAction = () => ({
  value: 0
});

const Counter = (initialProps) => {
  useState('value', 0);
  const increment = useAction(incrementAction)
  const incrementDelayed = async () => {
    await delay(500)
    increment();
  }
  const reset = useAction(resetAction)

  return (props, state) => (
    <div>
      <span>The counter's value is <b>{state.value}</b></span>
      <div onClick={increment}>increment</div>
      <div onClick={incrementDelayed}>increment delayed (500ms)</div>
      <div onClick={reset}>reset</div>
    </div>
  );
};

export default smart(Counter)
