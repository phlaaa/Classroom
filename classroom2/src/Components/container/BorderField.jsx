import React, { Component } from 'react'
import {Col, Container, Row} from 'reactstrap'
import Board from '../board/board'

class BorderField extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <Container fluid={true} style={{background:"black",justifyContent:"center",alignItems:"center"}}>
                <Row>
                </Row>
                <Row>
                    <Col><Board/></Col>
                </Row>
            </Container>
  );
}
}

export default BorderField
