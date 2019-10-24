import React from 'react'
import { Card, Tag } from 'antd'
import { CustomIcons } from './customIcons'

class WorkCards extends React.Component {
    state = {
        iconStyle: {
            fontSize: '1.5em',
            color: '#f78c6c',
        }
    }
    render() {
        const { work } = this.props
        return (
            <Card className='background'>
                <div className='work-card'>
                    <div className='work-card-subtitle'>
                        <CustomIcons type={work.logo} IconStyles={this.state.iconStyle} />
                    </div>
                    <div className='work-card-title'>
                        {work.title}
                    </div>
                    <div className='work-card-description'>
                        {work.description}
                    </div>
                    <div>
                        {
                            work.stack.map(
                                project =>
                                    <Tag key={project}>
                                        {project}
                                    </Tag>
                            )
                        }
                    </div>
                </div>
            </Card>
        );
    }
}

export default WorkCards;