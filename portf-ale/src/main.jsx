import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Navigation.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './routes/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  </React.StrictMode>,
)