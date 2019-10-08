import React from 'react'
import { who } from '../data/who'
import WhoCard from '../components/whoCards'
import { Row, Col } from 'antd'

class WhoPage extends React.Component {
    state = {}
    render() {
        return (
            <div className='full-page'>
                <Row className='card-container'>
                    {who.map(about =>
                        <Col key={about.id} sm={{ span: 24 }} md={{ span: 12 }}>
                            <WhoCard about={about} />
                        </Col>
                    )}
                </Row>

            </div>
        );
    }
}

export default WhoPage;