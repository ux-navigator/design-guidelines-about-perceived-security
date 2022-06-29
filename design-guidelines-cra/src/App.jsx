import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ScrollToTop from "./ScrollToTop";
import Start from './pages/start.jsx'
import Guidelines from './pages/guidelines.jsx';
import Download from './pages/download.jsx';
import Coherence from './pages/coherence.jsx'
import Controllability from './pages/controllability.jsx'
import Predictability from './pages/predictability.jsx'
import InformationConveying from './pages/informationConveying.jsx'
import MinimumCollecting from './pages/minimumCollecting.jsx'
import SocialProof from './pages/socialProof.jsx'
import ErrorHandling from './pages/errorHandling.jsx'

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