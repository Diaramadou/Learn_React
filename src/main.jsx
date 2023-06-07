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
            <Routes>
              <Route path='/' element={<Login></Login>}/>
                  <Route path='/Quiz' element={<App/>}/>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/Register' element={<Register/>}/>
            </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
