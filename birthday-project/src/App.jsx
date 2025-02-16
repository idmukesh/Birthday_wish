import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import WishPage from '../pages/WishPage';
import CelebrationPage from '../pages/CelebrationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wish" element={<WishPage />} />
        <Route path="/celebrate" element={<CelebrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;