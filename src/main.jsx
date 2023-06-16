import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {BrowserRouter, Router, Route, Link , Routes} from 'react-router-dom'
import Login from './pages/login.jsx'
import Register from './pages/Register.jsx'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
              <App/>
        </BrowserRouter>
      </React.StrictMode>
)
