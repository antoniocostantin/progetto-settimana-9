import { useState, useEffect } from "react";
import { Row, Col, Container, Alert, Spinner } from "react-bootstrap";
import { useParams} from "react-router-dom";


function MovieDetails() {
  const [film, setFilm] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isWrong, setIsWrong] = useState(false);
    const params = useParams()

  const fetchFilms = (filmId) => {
    fetch(`https://www.omdbapi.com/?apikey=17c32352&i=${filmId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsWrong(true);

          throw new Error("La chiamata non è andata a buon fine");
        }
      })
      .then((search) => {
        
          console.log("FILM RECUPERATO DAL SERVER", search);
          setIsLoading(false);
          setFilm( search );
          setIsWrong(false);
        
      })
      .catch((err) => {
        console.log("ERRORE NEL RECUPERO DATI (internet)?", err);

        setIsWrong(true);
      });
  };

  useEffect (() => {
    const id = params
    console.log(id.filmId)
    fetchFilms(id.filmId)
    console.log(film)
  }, [])

  return (
    <>
      {isLoading ? (<Spinner animation="border" variant="danger" className="m-5 display-3"/>
      ) : (
        <>
        {isWrong && <Alert variant="danger">
          {" "}
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>Something went wrong</p>
        </Alert> }
        <Container fluid>
          <Row className="g-0 border text-light rounded overflow-hidden flex-md-row my-4 shadow-sm position-relative">
            <Col className="p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-white-50">
                {film.Genre}
              </strong>
              <h3 className="mb-0">{film.Title}</h3>
              <div className="text-white-50">{film.Released}</div>
              <p>
                {film.Plot}
              </p>
            </Col>
            <Col xs={"auto"}>
              <img src={film.Poster} alt="Poster" />
            </Col>
          </Row>
        </Container></>
      )}
    </>
  );
}

export default MovieDetails;
