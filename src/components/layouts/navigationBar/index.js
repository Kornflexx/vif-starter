import Vif, { useState, useAction, render } from 'vif'
import classNames from './styles.css'

const routesMap = [
  {
    name: 'index',
    children: []
  },
  {
    name: 'hooks',
    children: [
      {
        name: 'useState & useAction',
        children: []
      },
      {
        name: 'useMount',
        children: []
      },
      {
        name: 'useUpdate',
        children: []
      }
    ]
  }
]

const renderRoutes = (data, routes, navigate, depth = 0) =>
  data.map(({ name, children }) => (
    <div
      className={classNames[`route-${depth}`]}
      key={name}
      onClick={() => navigate(depth, name)}
    >
      <span
        className="route-name"
        style={routes[depth] === name && { color: "#f60" }}
      >
        {name}
      </span>
      {children.length > 0 && renderRoutes(children, matchs, navigate, depth + 1)}
    </div>
  ))

const NavigationBar = ({ routeName, navigate }) => (
  <div
    className={classNames.container}
  >
    {renderRoutes(routesMap, routeName.split('-'), navigate)}
  </div>
)

export default NavigationBar;
