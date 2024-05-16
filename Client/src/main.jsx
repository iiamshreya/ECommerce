import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {//wrapping our app with browser router. so react-router-dom is only pacakage used

    }
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
