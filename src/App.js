import "./App.css";
// import '../bootstrap/dist/css/bootstrap.css';
 import 'bootstrap/dist/js/bootstrap.js';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Skills, Experience, Contact, Footer } from "./components";
import { useState } from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./components/styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <Router>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Route path="/">
          {/* <Navbar
            expand="lg"
            className="navbar"
            data-theme={darkMode ? "dark" : "light"}
          >
            <Navbar.Brand href="#home" style={{"text-decoration":"none"}} className="navname">
              Welcome!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about" style={{"text-decoration":"none"}} className="link">
                  About me
                </Nav.Link>
                <Nav.Link href="#skills" style={{"text-decoration":"none"}} className="link">
                  Skills
                </Nav.Link>
                <Nav.Link href="#experience" style={{"text-decoration":"none"}} className="link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#contact" style={{"text-decoration":"none"}} className="link">
                  Contact
                </Nav.Link>
              </Nav>
              <button
                className="button"
                onClick={toggleDarkMode}
                variant={darkMode ? "outline-light" : "outline-dark"}
              >
                {darkMode ? (
                  <FontAwesomeIcon
                    className="sun"
                    size="lg"
                    icon={faSun}
                    spin
                  />
                ) : (
                  <FontAwesomeIcon
                    className="moon"
                    size="lg"
                    icon={faMoon}
                    spin
                  />
                )}{" "}
              </button>
            </Navbar.Collapse>
          </Navbar> */}
 <nav style={{"backgroundColor":"black"}} className="navbar navbar-expand-lg navbar-dark fixed-top">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a style={{"text-decoration":"none","fontSize":"20px"}} className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a style={{"text-decoration":"none","fontSize":"20px"}} className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a style={{"text-decoration":"none","fontSize":"20px"}} className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a style={{"text-decoration":"none","fontSize":"20px"}} className="nav-link" href="#experience">Projects</a>
      </li>
      <li className="nav-item">
        <a style={{"text-decoration":"none","fontSize":"20px"}} className="nav-link" href="#contact">Contact</a>
      </li>
     
    </ul>
  </div>
</nav>

          <div id="home">
            <Home darkMode={darkMode} />
          </div>
          <div id="about">
            <About darkMode={darkMode} />
          </div>
          <div id="skills">
            <Skills darkMode={darkMode} />
          </div>
          <div id="experience">
            <Experience darkMode={darkMode} />
          </div>
          <div id="contact">
            <Contact darkMode={darkMode} />
          </div>
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
