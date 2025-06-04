// src/components/HeroSection.jsx
import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';
import Fazil from '../../assets/FazilSweetboy.png';

const HeroSection = () => {
  const navigate = useNavigate();

  // Preload image for performance
  useEffect(() => {
    const img = new Image();
    img.src = Fazil;
  }, []);

  return (
    <section className={`${styles.heroSection} pt-5`}>
      {/* 
         pt-5 adds some top padding so the content appears below the navbar.
         The overlay can be used for styling (e.g., a semi-transparent background).
      */}
      <div className={styles.overlay}></div>
      
      <Container className={`${styles.contentContainer} pt-5 mt-4`}>
        <Row className="g-5 align-items-center">
          {/* Left Column - Content (Approximately 65% width on large screens) */}
          <Col xs={12} lg={7} className="text-center text-lg-start mb-5 mb-lg-0">
            <div className={styles.contentWrapper}>
              <h1 className={styles.mainHeading}>
                Bringing Visions to Life<br />
                <span className={styles.highlight}>with Innovative Solutions</span>
              </h1>
              <p className={styles.subText}>
                Explore my work, connect with me, and discover my journey as a front-end developer!
              </p>
              
              {/* Buttons and Icons */}
              <div className="d-flex flex-column align-items-center align-items-lg-start">
                {/* "View Work" Button */}
                <Button 
                  variant="outline-light" 
                  size="lg"
                  className={`${styles.ctaButton} mb-4`}
                  href="#projects"
                >
                  View Work
                </Button>

                {/* "Contact" Button */}
                <Button 
                variant="primary" 
                className={`${styles.contactButton} mb-4`} // Use module styles
                onClick={() => navigate('/contact')}
              >
                Contact
              </Button>

                  
                {/* Social Icons */}
                <div className="d-flex gap-4">
                  <a 
                    href="http://linkedin.com/in/mohammedfazil-s" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactLink}
                  >
                    <BsLinkedin className={styles.icon} />
                  </a>
                  <a 
                    href="https://github.com/developermohammedfazil" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactLink}
                  >
                    <BsGithub className={styles.icon} />
                  </a>
                  <a 
                    href="mailto:mohammedfazil8883@gmail.com" 
                    className={styles.contactLink}
                  >
                    <BsEnvelope className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          
          {/* Right Column - Image (Approximately 35% width on large screens) */}
          <Col xs={12} lg={5} className="text-center">
            <img 
              src={Fazil}
              alt="Profile"
              className="img-fluid"
              style={{ borderRadius: '10px' }} // Adjust border radius as needed
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
