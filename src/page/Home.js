import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Cards from '../components/Card'

class Homes extends Component {
    render() {
        console.log()
        return (
            <div>
                <Row>
                    <Col md={8}>
                        {this.props.posts.map((value, index) => {
                            return <Cards update={value.author.updated_at} judul={value.judul} id={value.author.id} author={value.author.name} />
                        })}
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
            </div>
        )
    }
}

export default Homes