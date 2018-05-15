import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap'
import SideBar from './components/SideBar'
import InsightList from './components/InsightList'
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <SideBar/>
          <InsightList/>
        </Row>
      </Grid>
    );
  }
}

export default App;
