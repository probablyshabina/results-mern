import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import CRUD from './CRUD/Crud'

const rootElement = document.getElementById('root')
export const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode> 
    <App />
    <CRUD />
  </React.StrictMode>,
)
