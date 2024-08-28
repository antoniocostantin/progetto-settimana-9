import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { Container, Row, Col } from "react-bootstrap";
import TvShows from "./components/TvShows.jsx";
import Saga from "./components/Saga.jsx";
import Settings from "./components/Settings.jsx";
import ProfileSettings from "./components/ProfileSettings.jsx";
import Search from "./components/Search.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShow from "./components/TVShow.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <MyNavbar />
      </header>
        <main className="bg-dark">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TVShow />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profilesettings" element={<ProfileSettings />} />
          <Route path="/details/:filmId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
        </main>
      <footer>
        <MyFooter />
      </footer>
    </BrowserRouter>
  );
}

export default App;
