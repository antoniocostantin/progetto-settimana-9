import { Component } from "react";
import { Col} from 'react-bootstrap'

class Film extends Component{
    render(){
        return(
            <Col key={this.props.film.imdbID} className="mx-5 my-3" >
                  <img src={this.props.film.Poster} />
                  <p className="text-center mt-2">{this.props.film.Title}</p>
                </Col>
        )
    }
}

export default Film