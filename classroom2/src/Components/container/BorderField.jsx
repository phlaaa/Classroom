import React, { Component } from 'react'
import {Col, Container, Row} from 'reactstrap'
import Board from '../board/board'
import { SketchPicker } from 'react-color'

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
                    <Col><SketchPicker/></Col>
                </Row>
                <Row>
                    <Col><Board/></Col>
                </Row>
            </Container>
  );
}
}

export default BorderField
