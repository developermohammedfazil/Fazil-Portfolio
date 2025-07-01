
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import React, { useRef, useEffect, useState } from 'react';

import './Projects.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';
import Project4 from '../../assets/project4.png';
import Project5 from '../../assets/project5.png';
import Project6 from '../../assets/project6.png';
import Footer from "../../components/Footer";

const Projects = () => {
   const videoRef = useRef();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShowVideo(true);
        observer.disconnect();
      }
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  const projects = [
    {
      title: "Foodie's - Food delivery website",
      description: "A user-friendly food delivery web app that lets customers browse menus, place orders",
      image: Project1,
      github: "https://github.com/developermohammedfazil/Foodie-s",
      live: "https://68402f75b6f0a8af2c09458f--foodiesiteo1.netlify.app/"
    },
    {
      title: "Professonal-Portfolio",
      description: "Developed a responsive portfolio - Using technologies are React vite and bootstrap",
      image: Project2,
      github: "#",
      live: "#"
    },
    {
      title: "Vid-Tube - youtube clone",
      description: "Developed to got a hands on Experience with api integration",
      image: Project3,
      github: "https://github.com/developermohammedfazil/Vid-Tube",
      live: "https://vidtube2o.netlify.app/"
    },
    {
      title: "Sentiment-Analyzer",
      description: "Sentiment Analysis: Real-time response from a Node.js Express backend using sentiment logic.",
      image: Project4,
      github: "https://github.com/developermohammedfazil/Sentiment-Analyzer-o.1",
      live: "https://sentiment-analyzer-o-2.vercel.app/"
    },
      {
      title: "Shoe's shopping site",
      description: "Filtering Project this my web development internship task.",
      image: Project5,
      github: "https://github.com/developermohammedfazil/ShadowFox",
      live: "https://shadow-fox-seven.vercel.app/"
    },
      {
      title: "Dynamic Calculator",
      description: "HTML , CSS , JavaScript to developed my first project",
      image: Project6,
      github: "https://github.com/developermohammedfazil/Calculator",
      live: "https://68403f8dd7609edd67063535--calculatoro1.netlify.app/"
    },
    
  ];

  const midIndex = Math.ceil(projects.length / 2);

  return (
    <>
   <div className="project-page" ref={videoRef}>
  {showVideo && (
    <video autoPlay loop muted playsInline className="video-background">
      <source
        src="https://res.cloudinary.com/dlxvsorgs/video/upload/v1751344387/bg_ptdtm1.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  )}
   
      <div className="content-overlay">
        <Container>
          <h1 className="text-center mb-5 page-title">My Projects</h1>
          <Row className="g-4">
            <Col md={6}>
              {projects.slice(0, midIndex).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Col>
            <Col md={6}>
              {projects.slice(midIndex).map((project, index) => (
                <ProjectCard key={index + midIndex} project={project} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    <Footer/>
    </>
  );
};

// Projects.jsx (updated component)
const ProjectCard = ({ project }) => (
  <Card className="project-card mb-4">
    <div className="project-image-container">
      <Card.Img 
        variant="top" 
        src={project.image} 
        className="project-image" 
        alt={project.title}
      />
    </div>
    <div className="icon-links">
      <a href={project.github} className="github-icon" aria-label="GitHub">
        <FiGithub />
      </a>
      <a href={project.live} className="live-icon" aria-label="Live Demo">
        <FiExternalLink />
      </a>
    </div>
    <Card.Body>
      <Card.Title className="project-title">
        <span className="gradient-text">{project.title}</span>
      </Card.Title>
      <Card.Text className="project-description">
        <span className="gradient-text-light">{project.description}</span>
      </Card.Text>
    </Card.Body>
  </Card>
  
);

export default Projects;