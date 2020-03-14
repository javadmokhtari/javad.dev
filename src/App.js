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
import './home.css'

function App(props) {

  console.log(props)
  return (
    <Layout>
      <Router>
      {props.lng === "English" ? (
          <>
          <Switch>
          <Route path="/">
            <h1>جواد مختاری کوشیار</h1>
            <ul className="menu">
                <li><Link to="/about">درباره من</Link></li>
                <li><Link to="/blog">وبلاگ</Link></li>
            </ul>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
        </>
      ) : (
        <>
        <Switch>
        <Route path="/">
          <h1>Javad Mokhtari Koushyar</h1>
          <ul className="menu">
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/blog">Blog</Link></li>
          </ul>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
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

