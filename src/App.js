import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About'
import Blog from './components/Blog'
import './home.css'

function App(props) {

  console.log(props)
  return (
    <Layout>
      <Router basename='/'>
      {props.lng === "English" ? (
        <>
          <h1>جواد مختاری کوشیار</h1>
          <ul className="menu">
              <li><Link to="/about">درباره من</Link></li>
              <li><Link to="/email">ایمیل</Link></li>
          </ul>
          <Switch>
            
          <Route path="/about">
              <p>توسعه دهنده فرانت‌اند برنامه های تحت وب</p>              
          </Route>
          <Route path="/email">
            <p className="english">javadmokhtari (@) outlook (.) com</p>
            <p className="english">me (@) javad (.) dev</p>
          </Route>
        </Switch>
        </>          
      ) : (
        <>
        <h1>Javad Mokhtari Koushyar</h1>
        <ul className="menu">
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/email">Email</Link></li>
        </ul>
        <Switch>
        <Route path="/about">
          <p>Front-End Web Developer</p>
        </Route>
        <Route path="/email">
          <p>javadmokhtari (@) outlook (.) com</p>
          <p>me (@) javad (.) dev</p>
        </Route>
      </Switch>
      </>
      )}
      </Router>
    </Layout>
  )
}

const mapStateToProps = state => ({
  lng: state.lng
})

export default connect(mapStateToProps, null)(App)

