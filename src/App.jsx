import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Header modal={modal} setModal={setModal} />
        <Routes>
          <Route
            path="/"
            element={<Home modal={modal} setModal={setModal} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
