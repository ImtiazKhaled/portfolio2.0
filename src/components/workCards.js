import React from 'react'
import { Card, Tag, Row, Col } from 'antd'
import CustomIcons from './customIcons'

const WorkCards = (props) => {
    
    const iconStyle = { fontSize: 100, color: '#f78c6c' }
    const linkStyle = { fontSize: '1.5em', color: '#00cccc' } 
    const { work } = props

    return <Card className='background'>
        <div className='work-card'>
            <div className='work-card-subtitle'>
                <CustomIcons type={work.logo} IconStyles={iconStyle} />
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
            <div className='work-card-links-title'>
                Project Links
            </div>
            <Row>
            {
                work.links.map( (project) => {
                    return <Col span={2} key={project.link}>
                        <a href={project.link} className='work-card-links'>
                            <CustomIcons type={project.logo} IconStyles={linkStyle} />
                        </a>
                    </Col>
                } )
            }
            </Row>
        </div>
    </Card>
}

export default WorkCards;