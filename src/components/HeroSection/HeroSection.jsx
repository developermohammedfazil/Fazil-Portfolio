// src/components/HeroSection.jsx
import { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';
import styles from './HeroSection.module.css';


const HeroSection = () => {
  // Lazy load background image for better performance
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/images/hero-bg.webp';
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      
      <Container className={styles.contentContainer}>
        <Row className="g-5 align-items-center">
          {/* Main Content - Left Column (Desktop) / Top (Mobile) */}
          <Col lg={7} className="text-center text-lg-start">
            <h1 className={styles.mainHeading}>
              Bringing Visions to Life<br />
              <span className={styles.highlight}>with Innovative Solutions</span>
            </h1>
            <p className={styles.subText}>
              Explore my work, connect with me, and discover my journey as a front-end developer!
            </p>
            <Button 
              variant="outline-light" 
              size="lg"
              className={styles.ctaButton}
              href="#projects"
            >
              View Work
            </Button>
          </Col>

          {/* Contact Info - Right Column (Desktop) / Bottom (Mobile) */}
          <Col lg={5} className="mt-5 mt-lg-0">
            <div className={`${styles.contactWrapper} p-4 rounded-3`}>
              <h2 className={`${styles.contactHeading} mb-4`}>Contact</h2>
              
              <div className="d-flex flex-column gap-3">
                <div className={`${styles.contactItem} d-flex align-items-center gap-3`}>
                  <BsLinkedin className={styles.icon} />
                  <a href="https://linkedin.com" target="_blank" rel="noopener" className={styles.contactLink}>
                    linkedin.com/in/yourprofile
                  </a>
                </div>

                <div className={`${styles.contactItem} d-flex align-items-center gap-3`}>
                  <BsGithub className={styles.icon} />
                  <a href="https://github.com" target="_blank" rel="noopener" className={styles.contactLink}>
                    github.com/yourusername
                  </a>
                </div>

                <div className={`${styles.contactItem} d-flex align-items-center gap-3`}>
                  <BsEnvelope className={styles.icon} />
                  <a href="mailto:your@email.com" className={styles.contactLink}>
                    your.email@example.com
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;