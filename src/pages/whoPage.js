import React from 'react'
import { who } from '../data/who'
import WhoCard from '../components/whoCards'
import { Row, Col, Divider } from 'antd'

const WhoPage = () => {
    return <div className='full-page'>
        <Divider className='divider'><span className='divider-text'> 1. Who Am I?  </span></Divider>
        <Row className='card-container'>
            {who.map(about =>
                <Col key={about.id} md={{ span: 24 }} lg={{ span: 12 }}>
                    <WhoCard about={about} />
                </Col>
            )}
        </Row>
    </div>
}

export default WhoPage;