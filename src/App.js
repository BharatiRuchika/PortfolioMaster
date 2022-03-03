import "./App.css";
// import '../bootstrap/dist/css/bootstrap.css';
//  import 'bootstrap/dist/js/bootstrap.js';
import "font-awesome/css/font-awesome.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
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
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    // const nav = $("nav");
    // let navHeight = nav.outerHeight();

    // $(".navbar-toggler").on("click", function () {
    //   if (!$("#mainNav").hasClass("navbar-reduce")) {
    //     $("#mainNav").addClass("navbar-reduce");
    //   }
    // });

    // $("body").scrollspy({
    //   target: "#mainNav",
    //   offset: navHeight
    // });
    // $(".js-scroll").on("click", function () {
    //   $(".navbar-collapse").collapse("hide");
    // });

    // window.addEventListener("scroll", () => {
    //   if (window.pageYOffset > 50) {
    //     document
    //       .querySelector(".navbar-expand-md")
    //       .classList.add("navbar-reduce");
    //     document
    //       .querySelector(".navbar-expand-md")
    //       .classList.remove("navbar-trans");
    //     // this.setState({ logo: logo2 });
    //   } else {
    //     document
    //       .querySelector(".navbar-expand-md")
    //       .classList.add("navbar-trans");
    //     document
    //       .querySelector(".navbar-expand-md")
    //       .classList.remove("navbar-reduce");
    //     // this.setState({ logo: logo1 });
    //   }
    // });

    // $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    //   if (
    //     window.location.pathname.replace(/^\//, "") ===
    //     this.pathname.replace(/^\//, "") &&
    //     window.location.hostname === this.hostname
    //   ) {
    //     var target = $(this.hash);
    //     target = target.length
    //       ? target
    //       : $("[name=" + this.hash.slice(1) + "]");
    //     if (target.length) {
    //       $("html, body").animate(
    //         {
    //           scrollTop: target.offset().top - navHeight + 5
    //         },
    //         1000,
    //         "easeInExpo"
    //       );
    //       return false;
    //     }
    //   }
    // });

    // $(".js-scroll").on("click", function () {
    //   $(".navbar-collapse").collapse("hide");
    // });
  }, [])

  return (
    <Router>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Route path="/">
          <nav style={{ "backgroundColor": "black" }} className="navbar navbar-b navbar-trans navbar-expand-md navbar-dark header-nav fixed-top" id="mainNav">
            <div id="navbar-example" className="container-fluid">
              <a className="navbar-brand" href="#">Welcome !</a>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>

              </button>

              <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <a  className="js-scroll nav-link" href="#home">Home 

                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="js-scroll nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="js-scroll nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="js-scroll nav-link" href="#experience">Projects</a>
                  </li>
                  <li className="nav-item">
                    <a className="js-scroll nav-link" href="#contact">Contact</a>
                  </li>

                </ul>

              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>    
      </ul>
    </div>
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
        </Route>
      </div>
    </Router>
  );
}

export default App;
