import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {BrowserRouter, Router, Route, Link , Routes} from 'react-router-dom'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import './index.css'
import Login from './pages/login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login></Login>}/>
                  <Route path='/Quiz' element={<App/>}/>
                  <Route path='/profile' element={<p>Hello World</p>}/>
            </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
