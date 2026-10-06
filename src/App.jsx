import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import Projects from './pages/Projects.jsx'


const App = () => {
  return (
    <div className='text-white'>
      <Link to="/" className='text-blue-500 p-2'>Home</Link>
      <Link to="/agence" className='text-blue-500 p-2'>Agence</Link>
      <Link to="/projects" className='text-blue-500 p-2'>Projects</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App