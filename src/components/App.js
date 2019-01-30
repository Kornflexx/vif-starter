import Vif, { smart, useState, useAction, useUpdate, useMount } from 'vif'
import './App.css?raw'
import Router from './Router';

import Logo from '../assets/Logo.png'

const incrementAction = () => (props, state) => ({
  counter: state.counter + 1
})
const decrementAction = () => (props, state) => state.counter ? ({
  counter: state.counter - 1
}) : undefined

const useWindowClick = callback => {
  useMount(() => {
    window.addEventListener('click', callback);
    return () => {
      window.removeEventListener('click', callback);
    }
  })
}

const useToggleAction = key => useAction(
  () => (props, state) => ({
    [key]: !state[key]
  })
)

const growListAction = () => (props, state) => ({
  list: [...state.list, state.list.length]
})


const useInput = (key = 'input', defaultValue = '') => {
  useState(key, defaultValue)
  return useAction((e) => ({
      [key]: e.target.value
  }))
}

const App = initialProps => {

  useState('counter', initialProps.defaultValue)
  useState('counterVisible', false)
  useState('list', [])
  const growList = useAction(growListAction)
  const increment = useAction(incrementAction)
  const decrement = useAction(decrementAction)
  const toggleCounterVisible = useToggleAction('counterVisible')
  const setInputName = useInput('name', 'default')
  const setInputPassword = useInput('password', 'default')
  //useWindowClick(increment)

  return (props, state) => (
      <Router />
  )
}

/*
{state.counterVisible && (
        <div
          className="app-instructions"
          onClick={increment}
        >
          {state.counter}
        </div>
      )}
      */

export default smart(App)
