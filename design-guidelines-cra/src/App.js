import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Start from './pages/start.js'
import Guidelines from './pages/guidelines.js';
import Download from './pages/download.js';

export default function App() {
  return (
    <>
      <BrowserRouter>

        <nav>
          <Link to="/design-guidelines-about-perceived-security">Home</Link>
          <Link to="/guidelines">guidelines</Link>
          <Link to="/download">download</Link>
        </nav>


        <Routes>
          <Route path='/design-guidelines-about-perceived-security' element={<Start />} />
          <Route path='/guidelines' element={<Guidelines />} />
          <Route path='/download' element={<Download />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}