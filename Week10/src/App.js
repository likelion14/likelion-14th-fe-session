import { useState, useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SwiperBanner from "./components/SwiperBanner.js";
import MultiSection from "./components/MultiSection.js";
import "./App.css"
import multibanner from "./images/multibanner.jpg"
import EntertainmentPage from "./pages/EntertainmentPage.jsx";
import DramaPage from "./pages/DramaPage.jsx"
import MoviePage from "./pages/MoviePage.jsx"
import DocumentaryPage from "./pages/DocumentaryPage.jsx"
import OverseasPage from "./pages/OverseasPage.jsx"
import AnimePage from "./pages/AnimePage.jsx"
import LivePage from "./pages/LivePage.jsx"

function Home() {
  return (
    <>
      <div className="main-banner">
        <SwiperBanner />
      </div>
      <div className="multi-banner">
        <img src={multibanner} alt="multi banner" className="multi-banner-img" />
      </div>
      <div className="multi-section-index">
        <MultiSection />
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="background">
          <div className="navigation-bar">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entertainment" element={<EntertainmentPage />}/>
            <Route path="/drama" element={<DramaPage />}/>
            <Route path="/movie" element={<MoviePage />}/>
            <Route path="/documentary" element={<DocumentaryPage />}/>
            <Route path="/anime" element={<AnimePage />}/>
            <Route path="/overseas" element={<OverseasPage />}/>
            <Route path="/live" element={<LivePage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;