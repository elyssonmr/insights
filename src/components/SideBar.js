import React, { Component } from 'react';
import {Col, Nav, NavItem, Panel, Well} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'



class SideBar extends Component {
  handleSelect() {

  }

  render() {
    return (
      <Col xs={12} sm={3} md={2} lg={2} className={'SideBar'}>
        <Panel className={'SidePanel'}>
        <Panel.Title className='text-center'><h1>Insights</h1></Panel.Title>
          <Panel.Body>
            <Nav bsStyle="pills" stacked activeKey={1}>
              <NavItem eventKey={1} href="/home">
                Add Insight
              </NavItem>
            </Nav>
          </Panel.Body>
        </Panel>
        <Well>
            <p>Made by <a href="http://elyssonmr.com">Élysson MR</a></p>
            <p className="contact text-center">
                <a href="https://github.com/elyssonmr">
                    <FontAwesome name="github" size="2x"/>
                </a>
                <a href="https://twitter.com/elyssonmr">
                    <FontAwesome name="twitter" size="2x"/>
                </a>
                <a href="https://linkedin.com/in/elyssonmr">
                    <FontAwesome name="linkedin" size="2x"/>
                </a>
            </p>
        </Well>
      </Col>
    );
  }
}

export default SideBar;
