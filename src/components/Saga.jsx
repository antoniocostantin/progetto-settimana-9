import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Saga extends Component {
  state = {
    films: [],
    isLoading: true,
  };

  componentDidMount = () => {
    this.fetchFilms();
  };

  fetchFilms = () => {
    fetch(`https://www.omdbapi.com/?apikey=17c32352&s=${this.props.saga}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((search) => {
        console.log("FILM RECUPERATE DAL SERVER", search);
        this.setState({
          films: search.Search,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
      });
  };

  render() {
    return (
      <>
        <h4 className="mb-4">{this.props.saga}</h4>
        <Row className="row-cols-2 row-cols-sm-3 row-cols-lg-6 g-4">
          {this.state.films.map((film, i) => {
            if(i < 4){
            return (
              <>
                <Col key={film.imdbID} className="mx-5 my-3" >
                  <img src={film.Poster} />
                  <p className="text-center mt-2">{film.Title}</p>
                </Col>
              </>
            )};
          })}
        </Row>
      </>
    );
  }
}

export default Saga;
