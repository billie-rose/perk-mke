import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Admin from "../Admin";

class Login extends Component {
  state = {
    isAuthenticated: false,
    user: ""
  };

  setIsAuthenticated(isAuthenticated) {
    this.setState({ isAuthenticated });
  }

  getFormControlNode() {
    // Get the underlying <input> DOM element
    return ReactDOM.findDOMNode(this.refs.formControl);
  }

  render() {
    if (this.state.isAuthenticated)
      return <Admin user={this.getFormControlNode().value} />;
    return (
      <Card className="login">
        <Form onSubmit={() => this.setIsAuthenticated(true)}>
          <Form.Group controlId="user">
            <Form.Label>User</Form.Label>
            <input
              type="text"
              value={this.user}
              className="form control input"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button
            onClick={() => this.setIsAuthenticated(true)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Card>
    );
  }
}

export default Login;
