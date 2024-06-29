import { useState } from 'react'
import { Routes,Link,BrowserRouter, Route } from 'react-router-dom'
import Wallet from './pages/Wallet'
import Home from './pages/Home'
import Members from './pages/Members'

import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/members" element={<Members/>}/>
      <Route  path="/" element={<Wallet/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
