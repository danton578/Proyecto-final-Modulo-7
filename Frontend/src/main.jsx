import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </BrowserRouter>,
)
