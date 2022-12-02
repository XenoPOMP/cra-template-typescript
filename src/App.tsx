import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './assets/pages/NotFound/NotFound';
import MainPage from './assets/pages/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
