import { Container } from "react-bootstrap"
import Saga from "./Saga"


function Home (){
    return(
        <Container fluid className="bg-dark text-light">
          <Saga saga={"Thor"} />
          <Saga saga={"Avengers"} />
          <Saga saga={"Lord of ring"} />
          <Saga saga={"Twilight"} />
        </Container>
    )
}

export default Home