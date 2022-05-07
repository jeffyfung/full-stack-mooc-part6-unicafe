import React from 'react';
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const incrementCount = (feedback) => {
    store.dispatch({ type: feedback })
  }

  const resetAllCounts = () => {
    store.dispatch({ type: 'ZERO' })
  }

  return (
    <div>
      <button onClick={() => incrementCount('GOOD')}>good</button>
      <button onClick={() => incrementCount('OK')}>ok</button>
      <button onClick={() => incrementCount('BAD')}>bad</button>
      <button onClick={resetAllCounts}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
