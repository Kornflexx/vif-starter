import Vif, { useState, useAction, smart } from 'vif';

const handleInputAction = ({ target: { value } }) => ({ value });

const Input = (initialProps) => {
  useState('value', '');
  const handleInput = useAction(handleInputAction);

  return (props, state) => (
    <div>
      <input
        type="text"
        onInput={handleInput}
        value={state.value}
      />
      <div>The input value is: <i>{state.value}</i></div>
    </div>
  );
};

export default smart(Input);
