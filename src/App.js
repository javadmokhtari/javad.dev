import React from 'react';
import './App.css';
import Layout from './components/Layout';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from './components/About'
import Blog from './components/Blog'

function App(props) {

  console.log(props)
  return (
    <Layout>
      <Router>
      {props.lng === "English" ? (
          <>
          <ul className="menu">
              <li><Link to="/about">درباره من</Link></li>
              <li><Link to="/blog">وبلاگ</Link></li>
          </ul>
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
        </>
      ) : (
          <ul className="menu">
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/blog">Blog</Link></li>
          </ul>
      )}
      </Router>
    </Layout>
  )
}

const mapStateToProps = state => ({
  lng: state.lng
})

export default connect(mapStateToProps, null)(App)

