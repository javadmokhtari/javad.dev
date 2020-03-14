import React, { Component } from 'react'
import {Row, Container, Col} from 'react-bootstrap'
import { connect } from 'react-redux'
import { changeLanguage } from '../redux/actions'

class Layout extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>Col1</Col>
                    <Col>Col2</Col>
                </Row>
                <Row>
                    <h1>My Name Goes Here</h1>
                    {this.props.children}
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    lng: state.lng
  })
  
export default connect(mapStateToProps, { changeLanguage })(Layout)
