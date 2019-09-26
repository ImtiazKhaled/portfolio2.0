import React from 'react';
import './styles/App.css';
import LandingPage from './pages/landingPage';
import WhoPage from './pages/whoPage';
import WorkPage from './pages/workPage';
import ContactPage from './pages/contactPage';

function App() {
  return (
    <div>
      <LandingPage />
      <WhoPage />
      <WorkPage />
      <ContactPage />
    </div>
  );
}

export default App;
