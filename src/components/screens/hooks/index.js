import Vif, { useState, useAction } from 'vif'
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css?raw'
require('prismjs/components/prism-jsx.min')

import classNames from './styles.css'
import Hooks2Text from './samples/hooks2.js?raw'
import HooksText from './samples/hooks.js?raw'
import Hooks2 from './samples/hooks2'
import HooksSample from './samples/hooks'
import memoize from '../../hoc/memoize'
import Code from '../../lib/code'
var loadLanguages = require('prismjs/components/index.js');

const Hooks = props => (
  <div
    className={classNames.container}
  >
    <Code
      renderCode={<HooksSample />}
      rawCode={HooksText}
    />
  </div>
);

export default Hooks;
