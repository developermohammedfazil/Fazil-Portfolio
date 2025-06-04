import { useState, lazy, Suspense } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const MapComponent = lazy(() => import('./MapComponent'));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
     await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formData,
  import.meta.env.VITE_EMAILJS_USER_ID
);
      
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="p-4 contact-section">
      <Row>
        {/* Left Column - Contact Form */}
        <Col md={6} className="pr-md-4 contact-form-column">
          <h2 className="mb-4">Contact Me</h2>
          {submitStatus && (
            <Alert variant={submitStatus.success ? 'success' : 'danger'}>
              {submitStatus.message}
            </Alert>
          )}
          <p className="lead mb-4">
            I’m open to new opportunities and collaborations! If you’re looking for someone who can bring fresh ideas and deliver impactful results, let’s get in touch!
          </p>

          <Form onSubmit={handleSubmit}>
            
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6} className="pe-md-2">
                <Form.Control 
                  type="text" 
                  placeholder="Name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="form-field"
                />
              </Col>
              <Col md={6} className="ps-md-2">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="form-field"
                />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="form-field"
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="form-field message-field"
              />
            </Form.Group>

          </Form>
            {/* ... (existing form fields remain the same) ... */}
            
            <div className="d-flex justify-content-end">
              <Button 
                variant="primary" 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'SEND'}
              </Button>
            </div>
          </Form>
        </Col>

        {/* Right Column - Map */}
        <Col md={6} className="pl-md-4 map-column">
          <Suspense fallback={<div className="map-loading">Loading map...</div>}>
            <MapComponent />
          </Suspense>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;