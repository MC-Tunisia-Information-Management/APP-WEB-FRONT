import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./contactus.css";
import upperimage from "../../assests/layerlayer.png";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section className="contactus">
        <div className="contactus-upper">
          <div>
            <img className="upperimage" src={upperimage} alt="" />
          </div>
          <div className="contactus-form-and-title">
            <div className="contactus-text-type1">CONTACT US</div>
            <Container className="form">
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={12} className="forminput">
                    <Form.Group controlId="fullName">
                      <Form.Control
                        type="text"
                        name="fullName"
                        className="input"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="forminput">
                    <Form.Group controlId="email">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="forminput">
                    <Form.Group controlId="phoneNumber">
                      <Form.Control
                        type="tel"
                        className="input-area"
                        name="phoneNumber"
                        as="textarea"
                        placeholder="Type your message..."
                        rows={3}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col
                    md={12}
                    className="forminput d-flex justify-content-center"
                  >
                    <Form.Group controlId="acceptTerms" className="mb-3">
                      <Form.Check
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="terms-checkbox"
                        required
                        label={
                          <>
                            I accept the <a href="/terms">Terms</a>
                          </>
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="d-flex justify-content-center">
                    <Button className="submit" variant="primary" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
