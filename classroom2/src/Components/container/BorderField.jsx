import React, { Component } from 'react'
import {Col, Container, Row} from 'reactstrap'
import Board from '../board/board'
// import { SketchPicker } from 'react-color'

class BorderField extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:"black"
        }
    }
    //  colorchanger=(e)=>{
    //    this.setState({
    //        color:e.target.value
    //    },)
    // }
    render() {
        console.log(this.state.color);
        return (
            <Container fluid={true} style={{background:"black",justifyContent:"center",alignItems:"center"}}>
                {/* <Row>
                    <Col><input type="color" onChange={this.colorchanger}id="favcolor" name="favcolor" value="#ff0000"/></Col>
                </Row> */}
                <Row>
                    <Col><Board /></Col>
                </Row>
            </Container>
  );
}
}

export default BorderField
