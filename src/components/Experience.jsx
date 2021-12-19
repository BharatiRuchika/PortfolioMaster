// import { useState } from "react";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import dsc from "../media/forgot.png";
import bookmyshow from "../media/bookmyshow.jpeg";
import reset from "../media/reset.jpg";
import map from "../media/map.jpeg";
import tcd from "../media/kahoot.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
// import Modal from "react-bootstrap/Modal";

const Experience = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <div className="main_con">
            <Zoom>
              <Row>
                <div className="last">
                  <Col lg={4} sm={1}>
                    <Card
                      align="center"
                      className="Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={tcd}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                Kahoot Quiz Game
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                              Kahoot app built using ReactJs, NodeJs and MongoDB.
                                 
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://61baf07c2eb271124d439ebb--pedantic-kirch-e1484d.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/BharatiRuchika/Kahoot_Frontend_Project"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/BharatiRuchika/Kahoot_Backend_Project"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>

                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="exp Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={bookmyshow}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                Book My Show
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                Online Movie Ticket Booking System website to provide the customers facility to book tickets for a movie online and to gather information about the movies and theaters. 
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>
                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://61bc07885d77ba68a3fe2e3c--quirky-fermi-c446c5.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/BharatiRuchika/Book_My_Show_Frontend"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/BharatiRuchika/Book_My_Show_Back"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>
                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="exp Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card single">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={map}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                                TravelMap Application
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  Travel Map Application using
                                  React JS,NodeJs and Mongodb
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>

                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://61bf3d9c1b7c87fae735c1c2--elegant-nobel-bdeae0.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/BharatiRuchika/TravelMapFrontend"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/BharatiRuchika/TravelMapBackend"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                          
                      <br></br>
                    </Card>
                  </Col>
                </div>
              </Row>
            </Zoom>
            <br></br>
            <Zoom>
              <Row>
                <div className="last">
                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="exp Fi"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card single">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img
                              className="image"
                              variant="top"
                              src={reset}
                            />
                            <Card.Body>
                              <Card.Title align="center">
                               Reset Password
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                A Very Simple layout for Register, Login and Forgot Password operations using React JS, Node JS and Mongo DB
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>

                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      
                      <div>
                        <a
                          href="https://61bf65c6fafca8e1babaf18f--goofy-brattain-95334e.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/BharatiRuchika/ResetPasswordFrontend"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/BharatiRuchika/ResetPasswordBackend"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                          
                      <br></br>
                     
                     
                       
                            
                       
                         
                        
                     
                      <br></br>
                    </Card>
                  </Col>
                </div>
              </Row>
            </Zoom>
          </div>
        </Container>
      </Fade>
      <br></br>
      <br></br>
    </div>
  );
};

export default Experience;
