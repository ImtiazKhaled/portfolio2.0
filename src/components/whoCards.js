import React from 'react'
import { Card } from 'antd'


class WhoCard extends React.Component {
    state = {  }
    render() { 
        const { about } = this.props
        return ( 
            <Card className='background'>
                <div>
                    {about.tabName}
                </div>
                <div>
                    {about.title}
                </div>
                <div>
                    {about.subtitle}
                </div>
                <div>
                    {about.duration}
                </div>
                {
                    about.description.map(
                        description => <div>
                            {description}
                        </div>
                    )
                }
            </Card>
         );
    }
}
 
export default WhoCard;