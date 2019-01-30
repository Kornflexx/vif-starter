import Vif, { render } from 'vif'

import App from './components/App'

const Toast = () => {
  let node = null
  setInterval(() => {
    //console.log('====>', node)
  }, 1000)
  return node = (
      <App defaultValue={0} yolo={() => console.log('winwinwin')} />
  )
  }
render(
  <Toast />,
  document.querySelector('#app')
)
