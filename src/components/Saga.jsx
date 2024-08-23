import { Component } from "react";
import { Row, Spinner, Alert, Col } from "react-bootstrap";
import Film from "./Film";

class Saga extends Component {
  state = {
    films: [],
    isLoading: true,
    isWrong: false,
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
          this.setState({
            ...this.state,

            isLoading: false,
            isWrong: true,
          });
          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((search) => {
        if (search.Error) {
          this.setState({
            ...this.state,

            films: [],
            isWrong: true,
          });
        } else {
          console.log("FILM RECUPERATE DAL SERVER", search);
          this.setState({
            ...this.state,

            films: search.Search,
            isWrong: false,
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);
        this.setState({
          ...this.state,

          isWrong: true,
        });
      });
  };

  render() {
    return (
      <>
        <h4 className="mb-4">{this.props.saga}</h4>
        {this.state.isWrong ? (
          <Alert variant="danger">
            {" "}
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>Something went wrong</p>
          </Alert>
        ) : (
          <>
            <Row className="row-cols-2 row-cols-sm-3 row-cols-xl-6 g-4">
              {this.state.isLoading && (
                <Col>
                  <Spinner animation="border" variant="danger" />
                </Col>
              )}
              {this.state.films.map((film, i) => {
                if (i < 4) {
                  return (
                    <>
                      <Film film={film} />
                    </>
                  );
                }
              })}
            </Row>
          </>
        )}
      </>
    );
  }
}

export default Saga;
