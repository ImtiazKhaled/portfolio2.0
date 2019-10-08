import React from 'react'
import { Carousel, Tag } from 'antd'

class LandingPage extends React.Component {

    render() {
        return (
            <div className='full-page landing-page'>
                Hi, I'm <span className='landing-page-name'>Imtiaz Khaled</span> a
                <div className='landing-page-who-container'>
                    <Carousel dotPosition={'left'} dots={false} autoplay={true}>
                        <div className='landing-page-who'>
                            Student
                        </div>
                        <div className='landing-page-who'>
                            Software Developer
                        </div>
                    </Carousel>
                </div>
                majoring in <span> Computer Science </span><Tag> Contact Me </Tag>or scroll to get to know more about me
            </div>

        );
    }
}

export default LandingPage;