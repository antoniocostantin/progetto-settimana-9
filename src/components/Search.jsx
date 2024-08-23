import { Component } from "react";
import { Form, Button, InputGroup, Row, Col } from "react-bootstrap";
import Saga from "./Saga";

class Search extends Component {
  state = {
    search: "",
    start: false,
  };
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            {" "}
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({
                  start: true,
                });
              }}
            >
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search film"
                  onChange={(e) => {
                    this.setState({
                      search: e.target.value,
                    });
                  }}
                  value={this.state.search}
                />
                <Button type="submit" variant="outline-secondary">
                  Submit
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        {this.state.start && <Saga saga={this.state.search} />}
      </>
    );
  }
}

export default Search;
