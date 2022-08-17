import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'
import { About } from './pages/About/About'
import { Skills } from './pages/Skills/Skills'
import { Projects } from './pages/Projects/Projects'

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
          <Route path="/sobre" element={<About />} />
          <Route path="/tecnologias" element={<Skills />} />
          <Route path="/projetos" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
