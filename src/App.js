import React, { useState } from 'react'
import './styles/App.css'
import LandingPage from './pages/landingPage'
import WhoPage from './pages/whoPage'
import WorkPage from './pages/workPage'
import BlogPage from './pages/blogPage'
import ContactPage from './pages/contactPage'
import { Switch, Row, Button, Col } from 'antd'
import { BrowserRouter as Router, Switch as SwitchRouter, Route } from 'react-router-dom'


const App = (props) => {
  
  const [theme, changeThemeState] = useState(true)

  const changeTheme = (e) => {
    changeThemeState(!theme)
    if (theme) {
      document.body.style.setProperty('--background-color', '#eeeeee')
      document.body.style.setProperty('--link-color', '#e06c75')
      document.body.style.setProperty('--link-color-hover', '#986801')
      document.body.style.setProperty('--special-text-color', '#a626a4')
      document.body.style.setProperty('--normal-text-color', '#000000')
      document.body.style.setProperty('--special-text-color-two', '#00cccc')
      document.body.style.setProperty('--alternate-background', '#011627')
    } else {
      document.body.style.setProperty('--background-color', '#011627')
      document.body.style.setProperty('--link-color', '#f78c6c')
      document.body.style.setProperty('--link-color-hover', '#f86c6c')
      document.body.style.setProperty('--special-text-color', '#22da6e')
      document.body.style.setProperty('--normal-text-color', '#637777')
      document.body.style.setProperty('--special-text-color-two', '#00cccc')
      document.body.style.setProperty('--alternate-background', '#eeeeee')

    }
  }

  return <Router>
     <SwitchRouter>
          <Route exact path="/blog">
            <Row>
              <Col span={12}>
                <div className='theme-container'>
                  {theme ? <span className='theme-identifier'> dark theme </span> : <span className='theme-identifier'> light theme </span>}
                  <Switch
                    className='theme-button'
                    checked={theme}
                    onChange={changeTheme}
                  />
                </div>
              </Col>
              <Col span={12}>
                {/* <div className='resume-button-container'>
                  <Button href='https://drive.google.com/uc?export=download&id=1K7ron4NnobQEof6Wccj1W8QMn3aB0dyO' className='resume-button' icon='download' size={'large'}> Resume </Button>
                </div> */}
              </Col>
            </Row>
            <BlogPage />
          </Route>
          <Route path="/">
            <Row>
              <Col span={12}>
                <div className='theme-container'>
                  {theme ? <span className='theme-identifier'> dark theme </span> : <span className='theme-identifier'> light theme </span>}
                  <Switch
                    className='theme-button'
                    checked={theme}
                    onChange={changeTheme}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className='resume-button-container'>
                  <Button href='https://drive.google.com/uc?export=download&id=1K7ron4NnobQEof6Wccj1W8QMn3aB0dyO' className='resume-button' icon='download' size={'large'}> Resume </Button>
                </div>
              </Col>
            </Row>
            <LandingPage />
            <WhoPage />
            <div style={{ minHeight: '25vh' }} />
            <WorkPage />
            <ContactPage />  
          </Route>
          </SwitchRouter>
      </Router>
}

export default App
