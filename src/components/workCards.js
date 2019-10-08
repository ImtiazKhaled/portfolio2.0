import React from 'react'
import { Card, Tag } from 'antd'
import { CustomIcons } from './customIcons'

class WorkCards extends React.Component {
    state = {
        iconStyle: {
            fontSize: '3em',        
            color: 'black',
        }
    }
    render() {
        const { work } = this.props
        return (
            <Card className='background' hoverable >
                <div>
                    {work.title}
                </div>
                <div>
                    <CustomIcons type={work.logo} IconStyles={this.state.iconStyle} />
                </div>
                <div>
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
            </Card>
        );
    }
}

export default WorkCards;