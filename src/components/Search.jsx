import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import Saga from "./Saga";

class Search extends Component {
  state = {
    search: "",
    start: false,
  };
  render() {
    return (
      <div className="my-4">
        <Form onSubmit={(e) => {
              e.preventDefault();
              this.setState({
                start: true,
              });
            }}>
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
          <Button type="submit" variant="info" className="my-3">Submit</Button>
        </Form>
        {this.state.start && <Saga saga={this.state.search} />}
      </div>
    );
  }
}

export default Search;
