import React, { Component } from 'react'
import {Row, Container} from 'react-bootstrap';

export default class Layout extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Container>
                <Row>
                    Button goes here
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </Container>
        )
    }
}
