import React from 'react'
import { Carousel, Tag } from 'antd'

const LandingPage = () => {
    return <div className='full-page landing-page'>
        <span className='landing-text'>
            Hi, I'm <span className='landing-page-name'>Imtiaz Khaled</span> a
        <div className='landing-page-who-container'>
                <Carousel dotPosition={'left'} dots={false} autoplay={true}>
                    <div className='landing-page-who'>
                        Student
                </div>
                    <div className='landing-page-who'>
                        Software-Developer
                </div>
                </Carousel>
            </div>
            majoring in <span> Computer Science </span><Tag><a href='mailto:imtiazkhaled07@gmail.com'> Contact Me </a></Tag>or scroll to get to know more about me
        </span>
    </div>
}

export default LandingPage