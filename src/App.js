import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { Container } from "react-bootstrap";
import TvShows from "./components/TvShows.jsx";
import Saga from "./components/Saga.jsx";
import Settings from "./components/Settings.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import Search from "./components/Search.jsx";

function App() {
  return (
    <>
      <header>
        <MyNavbar />
      </header>
      <main>
        <Container fluid className="bg-dark text-light">
          <TvShows />
          <Search/>
          <Saga saga={"Harry potter"} />
          <Saga saga={"Shrek"} />
          <Saga saga={"Lord of ring"} />
          <Saga saga={"Fantastic Beasts"} />
          <Saga saga={"Twilight"} />
        </Container> 
        {/*<ProfileSettings/>*/}
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
