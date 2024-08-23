import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import { Container } from 'react-bootstrap';
import TvShows from './components/TvShows.jsx';
import Saga from './components/Saga.jsx';

function App() {
  return (
   <>
   <MyNavbar/>
   <Container fluid className='bg-black text-light'>
    <TvShows/>
    <Saga saga={'Harry Potter'} />
    <Saga saga={'Deadpool'} />
    <Saga saga={'Star wars'} />
   </Container>
   <MyFooter/>
   </>
  );
}

export default App;
