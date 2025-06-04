import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree for reliable form submission
      const response = await fetch("https://formspree.io/f/mjvnddgl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          message,
          subject: "New message from your portfolio"
        })
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "rgba(0,0,0,0.9)",
        color: "#fff",
        padding: "50px 0",
        fontFamily: "'Poppins', sans-serif",
      }}
      id="contact"
    >
      <Container>
        <Row className="mb-4">
          {/* CONNECT SECTION */}
          <Col md={4} className="mb-4 mb-md-0">
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                letterSpacing: "1px",
              }}
            >
              Connect
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
              Let’s work together and bring your ideas alive!
            </p>
            
            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="alert alert-success mt-3">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="alert alert-danger mt-3">
                Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </Col>

          {/* CONTACT SECTION */}
          <Col md={4} className="mb-4 mb-md-0">
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                letterSpacing: "1px",
              }}
            >
              Contact
            </h3>
            <div className="d-flex align-items-center gap-2 my-2">
              <FaPhoneAlt style={{ color: "#20c997" }} />
              <span style={{ fontSize: "1.1rem" }}>+91 9360681833</span>
            </div>
            <div className="d-flex align-items-center gap-2 my-2">
              <FaEnvelope style={{ color: "#20c997" }} />
              <span style={{ fontSize: "1.1rem" }}>mohammedfazil8883@gmail.com</span>
            </div>
            <div className="d-flex align-items-center gap-2 my-2">
              <FaLinkedin style={{ color: "#20c997" }} />
              <a
                href="http://linkedin.com/in/mohammedfazil-s"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                linkedin.com/in/mohammedfazil-s
              </a>
            </div>
          </Col>

          {/* MESSAGE FORM SECTION */}
          <Col md={4}>
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                letterSpacing: "1px",
              }}
            >
              Send a Message
            </h3>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label style={{ fontSize: "1.1rem" }}>
                  Your email address
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    borderRadius: "25px",
                    padding: "10px",
                    fontSize: "1rem",
                    border: "1px solid #20c997",
                    boxShadow: "0 2px 10px rgba(255, 255, 255, 0.1)",
                  }}
                />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label style={{ fontSize: "1.1rem" }}>
                  Your message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  style={{
                    borderRadius: "15px",
                    padding: "10px",
                    fontSize: "1rem",
                    border: "1px solid #20c997",
                    boxShadow: "0 2px 10px rgba(255, 255, 255, 0.1)",
                  }}
                />
              </Form.Group>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: "#20c997",
                  color: "#000",
                  borderRadius: "30px",
                  border: "none",
                  fontSize: "1.1rem",
                  padding: "10px 20px",
                  fontWeight: "bold",
                  boxShadow: "0 5px 15px rgba(32, 201, 151, 0.3)",
                  transition: "all 0.3s ease-in-out",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#18a076")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#20c997")}
              >
                <FaPaperPlane />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </Col>
        </Row>

        {/* COPYRIGHT ROW */}
        <Row>
          <Col className="text-center">
            <p
              style={{
                fontSize: "1rem",
                letterSpacing: "0.5px",
                marginTop: "20px",
              }}
            >
              © 2025 Mohammed Fazil. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}