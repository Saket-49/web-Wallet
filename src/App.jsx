import React from 'react'
import Nav from './Components/Nav'
import './index.css'
import HomePage from './Components/HomePage'
import Footer from './Components/Footer'
function App() {
  return (
    <>
      <div className=' w-full bg-black' style={{height:'100vh'}}>
        <Nav />
        <HomePage />
        <Footer/>
      </div>
        
    </>
  )
}

export default App
