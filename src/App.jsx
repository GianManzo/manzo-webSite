import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
