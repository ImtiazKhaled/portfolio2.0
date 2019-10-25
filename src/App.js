import React from 'react'
import './styles/App.css'
import LandingPage from './pages/landingPage'
import WhoPage from './pages/whoPage'
import WorkPage from './pages/workPage'
import ContactPage from './pages/contactPage'
import { Divider } from 'antd';

function App() {
  return (
    <div>
      <LandingPage />
      <Divider className='divider'><span className='divider-text'> 1. Who Am I?  </span></Divider>
      <WhoPage />
      <Divider className='divider'><span className='divider-text'> 2. What do I do?  </span></Divider>
      <WorkPage />
      <ContactPage />
    </div>
  )
}

export default App
