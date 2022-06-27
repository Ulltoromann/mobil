import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./Navbar'));
const Team = lazy(() => import('./Team'));
const Footer= lazy(() => import('./Footer'));
const Galeri= lazy(() => import('./Galeri'));
const Profil= lazy(() => import('./Profil'));



const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Navbar" element={<Navbar/>} />
        <Route path="Team" element={<Team/>} />
        <Route path="Footer" element={<Footer/>} />
        <Route path="Galeri" element={<Galeri/>} />
        <Route path="Profil" element={<Profil/>} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;