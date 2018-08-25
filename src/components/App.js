import Vif, { smart } from 'vif'
import './App.css'

import Logo from '../assets/Logo.png'

const App = () => (
  <div
    className="app"
  >
    <header
      className="app-header"
    >
      <img
        src={Logo}
        alt="vif logo"
      />
      <h2>Welcome to vif-starter</h2>
    </header>
    <div
      className="app-instructions"
    >
      <p>
        To start edit <code>./src/components/App.js</code> and save.
      </p>
    </div>
  </div>
)

export default App
