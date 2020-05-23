import React from 'react';
import MainLayout from './layouts/MainLayout';

import { Router, Redirect } from '@reach/router'
import Home from './pages/Home';

function App() {
  return (
    <div style={{  }}>
      <Router>
        <MainLayout path='/init'>
          <Home path='/home' />
        </MainLayout>

        <Redirect from='/' to='/init/home' noThrow />
      </Router>
    </div>
  );
}

export default App;
