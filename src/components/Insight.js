import React, { Component } from 'react';
import {Col, Panel, ListGroup, ListGroupItem, Label} from 'react-bootstrap'


class Insight extends Component {
  level() {
    switch (this.props.insight.level) {
      case 2:
        return 'warning'
        break;
      case 3:
        return 'danger'
        break;
    
      default:
        return 'default'
        break;
    }
  }

  render() {
    return (
      <Col xs={6} sm={4} md={4} lg={4} className={'Insight'}>
        <Panel bsStyle={this.level()}>
          <Panel.Heading>{this.props.insight.title} - {this.props.insight.number}</Panel.Heading>
          <Panel.Body>
            <ListGroup>
              <ListGroupItem header="Theme">
                {this.props.insight.theme}
              </ListGroupItem>
              <ListGroupItem header="Fact">
              {this.props.insight.fact}
              </ListGroupItem>
              <ListGroupItem header="Source">
                {this.props.insight.source}
              </ListGroupItem>
              <ListGroupItem header="Theme related challenges">
                {this.props.insight.challanges}
              </ListGroupItem>
            </ListGroup>
          </Panel.Body>
        </Panel>
      </Col>
    );
  }
}

export default Insight;
