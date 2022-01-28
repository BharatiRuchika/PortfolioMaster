import { useState } from "react";
import React from "react";
import './experience.css';
import { Fade, Zoom } from "react-awesome-reveal";
import dsc from "../media/forgot.png";
import bookmyshow from "../media/bookmyshow.jpeg";
import ecommerce from "../media/ecommerce.jpg"
import tcd from "../media/kahoot.png";
import blood from "../media/blood.jpeg";
import Container from "react-bootstrap/esm/Container";
//  import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
//  import Card from "react-bootstrap/esm/Card";
import Modal from "react-bootstrap/Modal";

// const Experience = ({ darkMode }) => {
//   return (
//     <div data-theme={darkMode ? "dark" : "light"}>
//       <br></br>
//       <Fade>
//         <Container>
//           <br></br>
//           <h2 className="lead" align="center">
//             <b>- Projects -</b>
//           </h2>
//           <br></br>
//           <div className="main_con">
//             <Zoom>
//               <Row>
//                 <div className="last">
//                   <Col lg={4} sm={1}>
//                     <Card
//                       align="center"
//                       className="Fi"
//                       data-theme={darkMode ? "dark" : "light"}
//                     >
//                       <br></br>
//                       <center>
//                         <div class="flip-card">
//                           {/* <div class="flip-card-inner"> */}
//                           <div className="flip-card-front">
//                             <Card.Img
//                               className="image"
//                               variant="top"
//                               src={tcd}
//                             />
//                             <Card.Body>
//                               <Card.Title align="center">
//                                 Kahoot Quiz Game
//                               </Card.Title>
//                               <Card.Text>
//                                 <p align="center">
//                               Kahoot app built using ReactJs, NodeJs and MongoDB.

//                                 </p>
//                               </Card.Text>
//                             </Card.Body>
//                           </div>
//                           {/* </div> */}
//                         </div>
//                       </center>
//                       <br></br>
//                       <div>
//                         <a
//                           href="https://61baf07c2eb271124d439ebb--pedantic-kirch-e1484d.netlify.app/"
//                           target="_blank"
//                           rel="noreferrer noopener"
//                         >
//                           <Button
//                             variant={
//                               darkMode ? "outline-light" : "outline-dark"
//                             }
//                             className="sbtn view"
//                           >
//                             Deployed Site
//                           </Button>
//                         </a>
//                         <div>
//                           <a
//                             href="https://github.com/BharatiRuchika/Kahoot_Frontend_Project"
//                             target="_blank"
//                             rel="noreferrer noopener"
//                           >
//                             <Button
//                               variant={
//                                 darkMode ? "outline-light" : "outline-dark"
//                               }
//                               className="sbtn view"
//                             >
//                               Front-End
//                             </Button>
//                           </a>
//                           <a
//                             href="https://github.com/BharatiRuchika/Kahoot_Backend_Project"
//                             target="_blank"
//                             rel="noreferrer noopener"
//                           >
//                             <Button
//                               variant={
//                                 darkMode ? "outline-light" : "outline-dark"
//                               }
//                               className="sbtn"
//                             >
//                               Back-End
//                             </Button>
//                           </a>
//                         </div>
//                       </div>
//                       <br></br>
//                     </Card>
//                   </Col>

//                   <Col lg={4} sm={12}>
//                     <Card
//                       align="center"
//                       className="exp Fi"
//                       data-theme={darkMode ? "dark" : "light"}
//                     >
//                       <br></br>
//                       <center>
//                         <div class="flip-card">
//                           {/* <div class="flip-card-inner"> */}
//                           <div className="flip-card-front">
//                             <Card.Img
//                               className="image"
//                               variant="top"
//                               src={bookmyshow}
//                             />
//                             <Card.Body>
//                               <Card.Title align="center">
//                                 Book My Show
//                               </Card.Title>
//                               <Card.Text>
//                                 <p align="center">
//                                 Online Movie Ticket Booking System website to provide the customers facility to book tickets for a movie online and to gather information about the movies and theaters. 
//                                 </p>
//                               </Card.Text>
//                             </Card.Body>
//                           </div>
//                           {/* </div> */}
//                         </div>
//                       </center>
//                       <br></br>
//                       <div>
//                         <a
//                           href="https://61bc07885d77ba68a3fe2e3c--quirky-fermi-c446c5.netlify.app/"
//                           target="_blank"
//                           rel="noreferrer noopener"
//                         >
//                           <Button
//                             variant={
//                               darkMode ? "outline-light" : "outline-dark"
//                             }
//                             className="sbtn"
//                           >
//                             Deployed Site
//                           </Button>
//                         </a>
//                         <div>
//                           <a
//                             href="https://github.com/BharatiRuchika/Book_My_Show_Frontend"
//                             target="_blank"
//                             rel="noreferrer noopener"
//                           >
//                             <Button
//                               variant={
//                                 darkMode ? "outline-light" : "outline-dark"
//                               }
//                               className="sbtn view"
//                             >
//                               Front-End
//                             </Button>
//                           </a>
//                           <a
//                             href="https://github.com/BharatiRuchika/Book_My_Show_Back"
//                             target="_blank"
//                             rel="noreferrer noopener"
//                           >
//                             <Button
//                               variant={
//                                 darkMode ? "outline-light" : "outline-dark"
//                               }
//                               className="sbtn"
//                             >
//                               Back-End
//                             </Button>
//                           </a>
//                         </div>
//                       </div>
//                       <br></br>
//                     </Card>
//                   </Col>
//                   <Col lg={4} sm={12}>
//                     <Card
//                       align="center"
//                       className="exp Fi"
//                       data-theme={darkMode ? "dark" : "light"}
//                     >
//                       <br></br>
//                       <center>
//                         <div class="flip-card single">
//                           {/* <div class="flip-card-inner"> */}
//                           <div className="flip-card-front">
//                             <Card.Img
//                               className="image"
//                               variant="top"
//                               src={map}
//                             />
//                             <Card.Body>
//                               <Card.Title align="center">
//                                 E-Commerce Application
//                               </Card.Title>
//                               <Card.Text>
//                                 <p align="center">
//                                 Any member can register and view
// available products. only registered candidates can
// purchase the products,visitors can view and search
// products. User can view and purchase products.
// Admin can add products,edit products and modify
// products. admin can access users some information.
//                                 </p>
//                               </Card.Text>
//                             </Card.Body>
//                           </div>

//                           {/* </div> */}
//                         </div>
//                       </center>
//                       <br></br>
//                       <div>
//                         <a
//                           href="https://61dfe27e4fda60ede87d4e29--hopeful-kirch-54fde7.netlify.app/"
//                           target="_blank"
//                           rel="noreferrer noopener"
//                         >
//                           <Button
//                             variant={
//                               darkMode ? "outline-light" : "outline-dark"
//                             }
//                             className="sbtn"
//                           >
//                             Deployed Site
//                           </Button>
//                         </a>
//                         <div>
//                           <a
//                             href="https://github.com/BharatiRuchika/Ecommerce-Frontend"
//                             target="_blank"
//                             rel="noreferrer noopener"
//                           >
//                             <Button
//                               variant={
//                                 darkMode ? "outline-light" : "outline-dark"
//                               }
//                               className="sbtn view"
//                             >
//                               Front-End
//                             </Button>
//                           </a>
//                           <a
//                             href="https://github.com/BharatiRuchika/Ecommerce-Backend"
//                             target="_blank"
//                             rel="noreferrer noopener"
//                           >
//                             <Button
//                               variant={
//                                 darkMode ? "outline-light" : "outline-dark"
//                               }
//                               className="sbtn"
//                             >
//                               Back-End
//                             </Button>
//                           </a>
//                         </div>
//                       </div>

//                       <br></br>
//                     </Card>
//                   </Col>
//                 </div>
//               </Row>
//             </Zoom>
//             <br></br>
//             <Zoom>
//               <Row>
//                 <div className="last">
//                   <Col lg={5} sm={12}>
//                     <Card
//                       align="center"
//                       className="exp Fi"
//                       data-theme={darkMode ? "dark" : "light"}
//                     >
//                       <br></br>
//                       <center>
//                         <div class="flip-card single">
//                           {/* <div class="flip-card-inner"> */}
//                           <div className="flip-card-front">
//                             <Card.Img
//                               className="image"
//                               variant="top"
//                               src={reset}
//                             />
//                             <Card.Body>
//                               <Card.Title align="center">
//                                Exercise-Tracker Application
//                               </Card.Title>
//                               <Card.Text>
//                                 <p align="center">
//                                By using this application users can keep a track of the data of day-to-day exercises.No need to create an account just proceed with a name.user can add,edit and delete exercise and can see ther execrcises list.
//                                 </p>
//                               </Card.Text>
//                             </Card.Body>
//                           </div>

//                           {/* </div> */}
//                         </div>
//                       </center>
//                       <br></br>

//                       <div>
//                         <a
//                           href="https://61df1c3818048a1050489e4b--boring-tereshkova-2c571f.netlify.app/"
//                           target="_blank"
//                           rel="noreferrer noopener"
//                         >
//                           <Button
//                             variant={
//                               darkMode ? "outline-light" : "outline-dark"
//                             }
//                             className="sbtn"
//                           >
//                             Deployed Site
//                           </Button>
//                         </a>
//                         <div>
//                           <a
//                             href="https://github.com/BharatiRuchika/ExerciseTrackerFrontend"
//                             target="_blank"
//                             rel="noreferrer noopener"
//                           >
//                             <Button
//                               variant={
//                                 darkMode ? "outline-light" : "outline-dark"
//                               }
//                               className="sbtn view"
//                             >
//                               Front-End
//                             </Button>
//                           </a>
//                           <a
//                             href="https://github.com/BharatiRuchika/ExerciseTrackerBackend"
//                             target="_blank"
//                             rel="noreferrer noopener"
//                           >
//                             <Button
//                               variant={
//                                 darkMode ? "outline-light" : "outline-dark"
//                               }
//                               className="sbtn"
//                             >
//                               Back-End
//                             </Button>
//                           </a>
//                         </div>
//                       </div>

//                       <br></br>








//                       <br></br>
//                     </Card>
//                   </Col>
//                 </div>
//               </Row>
//             </Zoom>
//           </div>
//         </Container>
//       </Fade>
//       <br></br>
//       <br></br>
//     </div>
//   );
// };

// export default Experience;


// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
import { CardGroup } from "react-bootstrap";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Kahoot Multiplayer Quiz Game",
    description: `"kahoots", are user-generated multiple-choice quizzes.here in this project there are 2 actors. a)Host b)Players. Host can create a quiz and generate a pin whereas players can play the game by using the same pin.After all players finishes the quiz,host can see the scoreboard & winner.`,
    image: tcd,
    netlify: "https://61ed7f92bc1bd1bdc8e41501--ruchikaskahootgame.netlify.app/",
    BackEnd: "https://github.com/BharatiRuchika/Kahoot_Backend_Project",
    FrontEnd: "https://github.com/BharatiRuchika/Kahoot_Frontend_Project"
  },
  {
    name: "Online Movie Ticket Booking System",
    description: `The main aim of the project is any user can access the system through website at any time without going to the company. user can collect all information like as a movies Available ,list of theatres.admin maintains the user Details ,Movie details, Theatre details`,
    image: bookmyshow,
    netlify: "https://61f150b2191c14c306cc3263--ruchikasbookmyshow.netlify.app/",
    BackEnd: "https://github.com/BharatiRuchika/Book_My_Show_Back",
    FrontEnd: "https://github.com/BharatiRuchika/Book_My_Show_Frontend"
  },
  {
    name: "E-commerce Application",
    description: `Any member can register and view
    available products.only registered candidates can
    purchase the products.User can view and purchase products.Admin can add products,edit products and modify products. admin can access users some information.`,
    image: ecommerce,
    netlify: "https://61dfe27e4fda60ede87d4e29--myecommerceapplication.netlify.app/",
    BackEnd: "https://github.com/BharatiRuchika/Ecommerce-Backend",
    FrontEnd: "https://github.com/BharatiRuchika/Ecommerce-Frontend"
  },
  {
    name: "Blood-Donation Application",
    description: `A blood donation is a process whereby a person voluntarily has blood drawn to be used for future transfusions when in need at hospitals. Donation may be of whole blood or of specific components of the blood; such as red blood cells, white blood cells, plasma, and platelets.`,
    image: blood,
    netlify: "https://61f2df65932afe1091b640d0--ruchikasblooddonation.netlify.app/",
    BackEnd: "https://github.com/BharatiRuchika/BloodDonationBackend",
    FrontEnd: "https://github.com/BharatiRuchika/BloodDonationFrontEnd"
  }

];
const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)"
};

/**
 * This approach works best if you have a variable number of columns at runtime.
 * Replace `gridContainer` with `gridContainer2` at line 27 to give it a try.
 */
const gridContainer2 = {
  display: "grid",
  gridAutoColumns: "1fr",
  gridAutoFlow: "column"
};

const gridItem = {
  margin: "8px",
  border: "1px solid red",
  width: "250px"
};

const Portfolio = ({ darkMode }) => {
  const classes = useStyles();
  return (
    <>
      <div data-theme={darkMode ? "dark" : "light"}>
        <br></br>
        <h2 className="lead" align="center">
             <b>- Projects -</b>
           </h2>
           <br></br>
       {/* <Fade>
       <Container>
           <br></br>
          <h2 className="lead" align="center">
             <b>- Projects -</b>
           </h2>
           <br></br>
        <Box sx={{ width: "100%", maxWidth: 1020 }} component="div" className={classes.mainContainer}>

        
          <Grid sx={gridContainer} container spacing={2} justify="center">
          
            {projects.map((project, i) => (
              <Grid sx={gridItem} item xs={3} sm={3} md={3} key={i}>
                <Card className={classes.cardContainer}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Project 1"
                      height="140"
                      image={project.image}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>



                    <a href={project.netlify}
                      target="_blank"
                      rel="noreferrer noopener">
                      <Button variant={
                        darkMode ? "outline-light" : "outline-dark"
                      }
                        className="sbtn">
                        Live Demo
                      </Button></a>

                    <a href={project.FrontEnd}
                      target="_blank"
                      rel="noreferrer noopener">
                      <Button size="small" color="primary">
                        Front-End
                      </Button></a>

                    <a href={project.BackEnd}
                      target="_blank"
                      rel="noreferrer noopener">
                      <Button size="small" color="primary">
                        Back-End
                      </Button></a>


                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
</Container>
</Fade> */}


{/* <Box sx={{ width: "100%", maxWidth: 1020 }} component="div" className={classes.mainContainer}> */}

        
<Grid sx={gridContainer} container spacing={2} justify="center">
{projects.map((project, i) => (
<Card sx={gridItem} item xs={3} sm={3} md={3} key={i}>
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {project.description}
        </Typography>
      </CardContent>
      <CardActions>
       
        <a href={project.netlify}
                      target="_blank"
                      rel="noreferrer noopener">
                      <Button size="small" color="primary">
                        Live Demo
                      </Button></a>
        <a href={project.FrontEnd}
                      target="_blank"
                      rel="noreferrer noopener">
                      <Button size="small" color="primary">
                        Front-End
                      </Button></a>
        <a href={project.BackEnd}
                      target="_blank"
                      rel="noreferrer noopener">
                      <Button size="small" color="primary">
                        Back-End
                      </Button></a>
      </CardActions>
    </Card>))}
    </Grid>
    {/* </Box> */}
      </div>

    </>
  );
};

export default Portfolio;
