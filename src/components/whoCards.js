import React from 'react'
import { Card } from 'antd'


class WhoCard extends React.Component {
    state = {  }
    render() { 
        const { about } = this.props
        return ( 
            <Card className='background'>
                <div className='who-card-title'>
                    {about.title}
                </div>
                <div className='who-card-subtitle'>
                    {about.subtitle}
                </div>
                <div className='who-card-duration'>
                    {about.duration}
                </div>
                {
                    about.description.map(
                        description => 
                        <div key={description}>
                            {description}
                        </div>
                    )
                }
            </Card>
         );
    }
}
 
export default WhoCard;