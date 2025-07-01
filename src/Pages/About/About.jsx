import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profiles from '../../assets/aboutProfile.png';
import "./About.css";
import LearningRoadmap from "./LearningRoadmap";



const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Mohammed Fazil-S.pdf";
    link.download = "MohammedFazil_Resume.pdf";
    link.click();
  };
   const handleViewOnline = () => {
    // Open PDF in new tab
    window.open('/Mohammed Fazil-S.pdf', '_blank');
  };
  return (
    <>
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center about-row">
          {/* Left Column - Profile Card */}
          <div className="col-lg-4 col-md-5 order-md-1 order-2 animate-profile">
            <div className="profile-card shadow-box">
              <div className="profile-image-container">
                <img 
                  src={profiles} 
                  alt="Mirta Akins" 
                  className="profile-image"
                />
              </div>
              
              <div className="resume-actions mt-5">
                <div className="dropdown">
                  <button 
                    className="btn btn-outline-light btn-lg resume-button dropdown-toggle w-100"
                    type="button" 
                    data-bs-toggle="dropdown"
                  >
                    Get Resume ▼
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <button 
                        className="dropdown-item" 
                        onClick={handleDownloadResume}
                      >
                        <i className="bi bi-download me-2"></i>Download PDF
                      </button>
                    </li>
                    <li>
               <button className="dropdown-item" onClick={handleViewOnline}>
                        <i className="bi bi-eye me-2"></i>View Online
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content (keep same) */}
            <div className="col-lg-8 col-md-7 order-md-2 order-1 animate-content">
            <div className="content-wrapper">
              <h1 className="display-4 fw-bold mb-3 text-light text-md-start text-center">
                I'm <span className="text-primary">Mohammed Fazil</span>
              </h1>
              <h2 className="h3 mb-4 text-light text-md-start text-center">
               Frontend Web Development specializing in<br />
                <span className="text-info"> codePen & webflow</span>
              </h2>
              <p className="lead about-description text-light opacity-75 text-md-start text-center">
               I’m a passionate Front-End Developer with hands-on experience building responsive web interfaces using HTML, CSS, JavaScript, and React.
               I’m continuously learning and expanding my skills to deliver clean, maintainable, and scalable front-end solutions.
               I’ve developed multiple real-world projects, including e-commerce sites and interactive UIs, focused on performance and user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LearningRoadmap/>
    </>
  );
};
export default About;