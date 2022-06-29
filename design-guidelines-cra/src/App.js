import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ScrollToTop from "./ScrollToTop";
import Start from './pages/start.js'
import Guidelines from './pages/guidelines.js';
import Download from './pages/download.js';
import Coherence from './pages/coherence.js'
import Controllability from './pages/controllability.js'
import Predictability from './pages/predictability.js'
import InformationConveying from './pages/informationConveying.js'
import MinimumCollecting from './pages/minimumCollecting.js'
import SocialProof from './pages/socialProof.js'
import ErrorHandling from './pages/errorHandling.js'

export default function App() {
  return (
    <>
      <BrowserRouter>

        {/* <nav>
          <Link to="/design-guidelines-about-perceived-security">Home</Link>
          <Link to="/guidelines">guidelines</Link>
          <Link to="/download">download</Link>
        </nav> */}


        <Routes>
          <Route path='/design-guidelines-about-perceived-security' element={<Start />} />
          <Route path='/guidelines' element={<Guidelines />} />
          <Route path='/download' element={<Download />} />
          <Route path='/coherence' element={<Coherence />} />
          <Route path='/controllability' element={<Controllability />} />
          <Route path='/predictability' element={<Predictability />} />
          <Route path='/informationConveying' element={<InformationConveying />} />
          <Route path='/minimumCollecting' element={<MinimumCollecting />} />
          <Route path='/socialProof' element={<SocialProof />} />
          <Route path='/errorHandling' element={<ErrorHandling />} />

        </Routes>

        <ScrollToTop />

      </BrowserRouter>
    </>
  )
}