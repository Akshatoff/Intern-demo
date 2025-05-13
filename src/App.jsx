import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import { ReactLenis, useLenis } from 'lenis/react'

function App() {


  return (
    <>
      <ReactLenis root>
        <Home></Home>
        <About></About>
        <Services></Services>
      </ReactLenis>

    </>
  )
}

export default App
