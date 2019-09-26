import React from 'react'
import { Card } from 'antd'


class WorkCards extends React.Component {
    state = {}
    render() {
        const { work } = this.props
        return (
            <Card className='background'>
                {work.title}
            </Card>
        );
    }
}

export default WorkCards;