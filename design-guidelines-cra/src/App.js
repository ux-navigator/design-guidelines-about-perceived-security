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
          <Route path='/' element={<Start />} />
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