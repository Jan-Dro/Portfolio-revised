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

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'
    style={{
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      height: '4000px',
    }}>
      <Header />
      <Banner />
      <Nav />
      <Devtools />
      <About />
      <Work />
    <div className='h-[4000px]'></div>
    </div>
  )
}

export default App
