import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { LangContext, ModeContext } from "../../services/provider/context";
import { Link ,useNavigate  } from "react-router-dom";
import { handleLogout } from "../../pages/auth/logout";

function Navbar2() {
  const { lang, setLang } = useContext(LangContext);
  const { mode, setMode } = useContext(ModeContext);

  const isAuthenticated = !!localStorage.getItem("token");
  const navigate = useNavigate();
  const logout = handleLogout(navigate);

  return (
    <Navbar>
      <Container>
        <Navbar.Brand
          href="#home"
          className="mx-3"
          style={{ color: mode === "dark" ? "black" : "white" }}
        >
          PopularMovies
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="mx-3"
            style={{ color: mode === "dark" ? "black" : "white" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/movies"
            className="mx-3"
            style={{ color: mode === "dark" ? "black" : "white" }}
          >
            movies
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/Favorites"
            className="mx-3"
            style={{ color: mode === "dark" ? "black" : "white" }}
          >
            Favorites
          </Nav.Link>

          {!isAuthenticated && (
            <>
              <Nav.Link
                as={Link}
                to="/register"
                className="mx-3"
                style={{ color: mode === "dark" ? "black" : "white" }}
              >
                register
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login"
                className="mx-3"
                style={{ color: mode === "dark" ? "black" : "white" }}
              >
                login
              </Nav.Link>
            </>
          )}
          {isAuthenticated && (
            <Nav.Link
              as={Link}
              onClick={logout}
              className="mx-3"
              style={{ color: mode === "dark" ? "black" : "white" }}
            >
              Logout
            </Nav.Link>
          )}
        </Nav>
        <Button
          variant="danger"
          size="lg"
          className="ms-auto me-3"
          onClick={() => setLang(lang == "en" ? "ar" : "en")}
        >
          {lang}
        </Button>
        <Button
          variant="danger"
          size="lg"
          className="ms-auto"
          onClick={() => setMode(mode == "dark" ? "light" : "dark")}
        >
          {mode}
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
