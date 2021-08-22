import React from 'react'
import { Card } from 'antd'


const WhoCard  = (props) => {

    const { about } = props
    return (
        <Card className='background who-card'>
            <div className='who-card'>
                <div className='who-card-title'>
                    {about.title}
                </div>
                <div>
                    <a className='who-card-subtitle' href={about.subtitleLink}>
                        {about.subtitle}
                    </a>
                </div>
                <div className='who-card-duration'>
                    {about.duration}
                </div>
                {
                    about.description.map(
                        description =>
                            <div className='who-card-description' key={description}>
                                {description}
                            </div>
                    )
                }
            </div>
        </Card>
    );
}

export default WhoCard;