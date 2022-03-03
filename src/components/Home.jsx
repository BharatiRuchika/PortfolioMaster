import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
// import helloLight from "../media/hello-light.jpeg";
// import helloDark from "../media/hello-dark.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Wave from "react-wavify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Home = ({ darkMode }) => {
  return (
    <div>
      <AttentionSeeker shakeX>
        <Row>
          <Col style={{marginRight:'20px',marginBottom:'40px'}} lg={12} xs={12}>
         
            <h1 className="display-3 hello" align="center" >
              HELLO!<code> I'm Ruchika</code>
            </h1>
            <h2 className="lead" align="center">
              I am a&nbsp;
             <span className="txt-rotate"> Full Stack Developer</span>
              {/* <span
                className="txt-rotate"
                data-period="3000"
                data-rotate='["Full Stack Developer"]'
              ></span> */}
             
            </h2>
            
                  <a 
                  style={{alignItems:"center"}}
                    href="https://github.com/BharatiRuchika"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                   

<button type="button" style={{"fontWeight":"bold","alignItems":"center",marginLeft:'45%',marginTop:"10px"}} class="btn btn-light btn-rounded">  <FontAwesomeIcon
                        className="light"
                        size="lg"
                        icon={faGithub}
                      />Github</button>
                  </a> 
                
          </Col>
        </Row>
      </AttentionSeeker>
      <Row>
        <Container align="center" className="wave">
          <div>
            <Wave
              fill="#0275d8"
              paused={false}
              options={{
                height: 20,
                amplitude: 20,
                speed: 0.5,
                points: 3,
              }}
            />
          </div>
        </Container>
      </Row>

      <br></br>
    </div>
  );
};

export default Home;
