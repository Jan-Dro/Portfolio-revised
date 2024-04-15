import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TypeAnimation } from 'react-type-animation'
import Nav from './Navigation'
import About from './routes/About'
import Devtools from './routes/Devtools'
import Home from './routes/Home'
import Work from './routes/Work'
import Header from './Header'
import Banner from './routes/Banner'
import Contact from './routes/Contact'
import { useLocation } from 'react-router'

function App() {
  const location = useLocation(); 
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'
    style={{
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      height: '4500px',
    }}>
      <Header />
      <Banner />
      <Devtools />
      <About />
      <Work />
      <Contact />
    <div className='h-[4500px]'></div>
    </div>
  )
}

export default App
