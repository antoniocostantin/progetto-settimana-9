import { Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Film ({ film}){
    const navigate = useNavigate()


        return(
            <Col key={film.imdbID} className="mx-5 my-3" onClick={() => {
                navigate('/details/' + film.imdbID)
              }} >
                  <img src={film.Poster} />
                  <p className="text-center mt-2">{film.Title}</p>
                </Col>
        )
    
}

export default Film