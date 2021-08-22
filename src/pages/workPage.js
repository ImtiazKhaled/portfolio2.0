import React from 'react'
import WorkCards from '../components/workCards'
import { work } from '../data/work'
import { Row, Col, Divider } from 'antd'

const WorkPage = () => {
    return <div className='full-page'>
        <Divider className='divider'><span className='divider-text'> 2. What do I do?  </span></Divider>
        <Row className='card-container'>
            {work.map(work =>
                <Col key={work.id} md={{ span: 24 }} lg={{ span: 12 }}>
                    <WorkCards work={work} />
                </Col>
            )}
        </Row>
    </div>
}

export default WorkPage;