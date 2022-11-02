import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './assets/components/Layout/Layout';
import NotFound from './assets/pages/NotFound/NotFound';
import ReduxExample from './assets/components/ReduxExample/ReduxExample';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'*'} element={<NotFound />} />

        <Route path={'/'} element={<Layout>Hello world!</Layout>} />

        <Route path={'/redux'} element={<ReduxExample />} />
      </Routes>
    </Router>
  );
}

export default App;
