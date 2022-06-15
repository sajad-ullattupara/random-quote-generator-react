import React from "react";
import {Button, Card} from 'react-bootstrap';

class Quote extends React.Component {
  render() {
    return (
      <Card className="text-center">
        <Card.Header>Quotes</Card.Header>
        <Card.Body>
          <h1 id="quote">"{this.props.quote}"</h1>
          <h4 id="author">
            {this.props.author ? this.props.author : "Unknown"}
          </h4>
          <Button style={{padding:"20px", margin:"30px"}} variant="primary" onClick={this.props.handleClick} >
            New quote 
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Quote;