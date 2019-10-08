import React from 'react'
import WorkCards from '../components/workCards'
import { work } from '../data/work'
import { Row, Col } from 'antd'

class WorkPage extends React.Component {
    state = {}
    render() {
        return (
            <div className='full-page'>
                <Row className='card-container'>
                    {work.map(work =>
                        <Col key={work.id} sm={{span:24}} md={{span:12}}>
                            <WorkCards work={work} />
                        </Col>
                    )}
                </Row>
            </div>
        );
    }
}

export default WorkPage;