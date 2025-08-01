import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UrlShortenerForm from './components/UrlShortenerForm';
import StatsPage from './components/StatsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlShortenerForm />} />
        <Route path="/stats/:shortcode" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
