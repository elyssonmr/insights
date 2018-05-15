import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap'

import Insight from './Insight'




class InsightList extends Component {
  renderInsightsList() {
    var insights = [];
    for (let index = 0; index < 15; index++) {
      var level = (index % 2 == 0 ? 2 : 3)
      var insightData = {
        title: 'Insight Title',
        number: index + 1,
        level: level,
        theme: 'My very cool theme',
        fact: 'My really cool fact',
        source: 'google.com',
        challenges: 'Some challenges to solve the problem'
      }
      insights.push(<Insight insight={insightData}/>)
    }
    return insights
  }

  render() {
    return (
      <Col xs={12} sm={9} md={10} lg={10} className={'InsightList'}>
        <Row>
          {this.renderInsightsList()}
        </Row>
      </Col>
    );
  }
}

export default InsightList;
