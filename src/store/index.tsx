import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers' // Importa o rootReducer que combina todos os reducers
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App'
import reportWebVitals from '../reportWebVitals'

// Criação da store com o rootReducer
const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

// Caso queira medir a performance da aplicação
reportWebVitals()