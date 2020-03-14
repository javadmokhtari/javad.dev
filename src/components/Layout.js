import React, { Component } from 'react'
import {Row, Container, Col, Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import changeLanguage from '../redux/actions'
import '../layout.css'

class Layout extends Component {
    constructor(props) {
        super(props)

        this.toggleLanguage = this.toggleLanguage.bind(this)
        this.mainStyle = this.mainStyle.bind(this)
        this.languageStyle = this.languageStyle.bind(this)
    }

    toggleLanguage(e) {
        
        if (this.props.lng === "English") {
            this.props.changeLanguage("فارسی")
        } else {
            this.props.changeLanguage("English")
        }
    }

    mainStyle() {
        return this.props.lng === "فارسی" ? "english" : "persian"
    }

    languageStyle() {
        return this.props.lng === "English" ? "english" : "persian"
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col className={this.languageStyle()} xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Button onClick={(e) => this.toggleLanguage(e)} variant="outline-dark">{this.props.lng}</Button>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Button variant="outline-danger">/</Button>
                    </Col>
                </Row>
                <Row className={"main " + this.mainStyle()}>
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
