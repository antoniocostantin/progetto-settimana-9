import { Container } from "react-bootstrap"
import TvShows from "./TvShows"
import Saga from "./Saga"
import Search from "./Search"

function TVShow (){
    return(
        <Container fluid className="bg-dark text-light">
          <TvShows />
          <Search/>
          <Saga saga={"Harry potter"} />
          <Saga saga={"Shrek"} />
          <Saga saga={"Lord of ring"} />
          <Saga saga={"Fantastic Beasts"} />
          <Saga saga={"Twilight"} />
        </Container>
    )
}

export default TVShow