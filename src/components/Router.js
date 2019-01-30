import Vif, { useState, useAction, smart } from 'vif'

import NavigationBar from './layouts/navigationBar';
import HooksScreen from './screens/hooks';
import VifRouter from './lib/vifRouter/VifRouter';

const routeScreenMap = {
  'hooks': HooksScreen
}

const renderRouteScreen = routeName => {
  const Component = routeScreenMap[routeName]
  if (!Component) {
    return <div>404</div>
  }
  return <Component memoKey={routeName} />
}

const Router = (props) => (
  <VifRouter
    pathName="hooks"
  >
    {({ navigate, routeName }) => (
      <div className="router-container">
        <NavigationBar
          routeName={routeName}
          navigate={navigate}
        />
        <div className="route-container">
          {renderRouteScreen(routeName)}
        </div>
      </div>
    )}
  </VifRouter>
)


export default Router
