import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import HeroSection from "../../components/HeroSection/HeroSection";
import myImg from "../../assets/laptop.svg";
import "./Home.css";
import Footer from "../../components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <>
      <HeroSection />
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 data-aos="fade-up" style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p data-aos="fade-up" className="home-about-body">
                I fell in love with <span className="purple">Front-End Development</span> and have a solid foundation in web development principles... 🤷‍♂️
                <br />
                <br />I am fluent in classics like{" "}
                <i>
                  <b className="purple"> JavaScript. </b>
                </i>
                <br />
                <br />
                My field of interest is building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to{" "}
                  <b className="purple">MERN stack.</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with{" "}
                <i>
                  <b className="purple">
                    Modern JavaScript Libraries and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js </b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar" data-aos="zoom-in">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1 data-aos="fade-up">FIND ME ON</h1>
              <p data-aos="fade-up">
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons" data-aos="fade-up">
                  <a
                    href="https://github.com/developermohammedfazil"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons" data-aos="fade-up" data-aos-delay="200">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons" data-aos="fade-up" data-aos-delay="400">
                  <a
                    href="https://www.linkedin.com/in/mohammedfazil-s/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons" data-aos="fade-up" data-aos-delay="600">
                  <a
                    href="https://www.instagram.com/fazil_.sweetboy/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
