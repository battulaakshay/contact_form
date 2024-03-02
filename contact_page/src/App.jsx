import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Contact from './components/contact'
import Contact_form from './components/contact_form'
function App() {

  return (
    <>
  <nav>
    <Navigation />
  </nav>
    <Contact />
  
    <Contact_form />
    </>
  )
}

export default App
