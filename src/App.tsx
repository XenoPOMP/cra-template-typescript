import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const Hello = () => <div>Hello world!</div>;

  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Hello />} />
      </Routes>
    </Router>
  );
}

export default App;
