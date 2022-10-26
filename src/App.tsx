import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout/Layout';
import NotFound from './assets/pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<Layout>Hello world!</Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
