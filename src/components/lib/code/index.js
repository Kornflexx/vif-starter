import Vif, { useState, smart, copyNode } from 'vif';

import useToggleAction from '../../hooks/useToggleAction';
import classNames from './styles.css';


const Code = (initialProps) => {

  useState('codeVisible', true);
  const toggleCodeVisible = useToggleAction('codeVisible');
  return (props, state) => (
    <div>
      {state.codeVisible
        ? copyNode(props.renderCode)
        : (
          <div
            className={classNames.code}
            _setHTML={Prism.highlight(props.rawCode, Prism.languages.jsx, 'jsx')}
          />
        )
      }
      <div
        className={classNames.toggleButton}
        onClick={toggleCodeVisible}
      >
        {state.codeVisible
          ? "show code"
          : "show result (with style)"
        }
      </div>
    </div>
  );
};

export default smart(Code);
