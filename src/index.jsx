import React from 'react'
import ReactDOM from 'react-dom/client'
import './reset.css'
import App from './App'
import { GlobalStyles } from './Global-styles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
