import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Start from "./pages/start"
import ScrollToTop from "./ScrollToTop";
import Guidelines from './pages/guidelines.js';
import Download from './pages/download.js';
import Coherence from './pages/coherence.js'
import Controllability from './pages/controllability.js'
import Predictability from './pages/predictability.js'
import InformationConveying from './pages/informationConveying.js'
import MinimumCollecting from './pages/minimumCollecting.js'
import SocialProof from './pages/socialProof.js'
import ErrorHandling from './pages/errorHandling.js'
import Header from "./pages/header"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/design-guidelines-about-perceived-security/' element={<Start />} />
          <Route path='/design-guidelines-about-perceived-security/guidelines' element={<Guidelines />} />
          <Route path='/design-guidelines-about-perceived-security/download' element={<Download />} />
          <Route path='/design-guidelines-about-perceived-security/guidelines/coherence' element={<Coherence />} />
          <Route path='/design-guidelines-about-perceived-security/guidelines/controllability' element={<Controllability />} />
          <Route path='/design-guidelines-about-perceived-security/guidelines/predictability' element={<Predictability />} />
          <Route path='/design-guidelines-about-perceived-security/guidelines/informationConveying' element={<InformationConveying />} />
          <Route path='/design-guidelines-about-perceived-security/guidelines/minimumCollecting' element={<MinimumCollecting />} />
          <Route path='/design-guidelines-about-perceived-security/guidelines/socialProof' element={<SocialProof />} />
          <Route path='/design-guidelines-about-perceived-security/guidelines/errorHandling' element={<ErrorHandling />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
    </>
  )
}