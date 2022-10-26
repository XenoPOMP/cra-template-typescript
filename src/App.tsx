import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<span>Hello world!</span>} />
      </Routes>
    </Router>
  );
}

export default App;
