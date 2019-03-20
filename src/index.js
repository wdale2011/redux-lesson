import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import rootReducer from './reducers'
import { boards, cards } from './data'

const defaultState = { boards, cards }

const store = createStore(rootReducer, defaultState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
