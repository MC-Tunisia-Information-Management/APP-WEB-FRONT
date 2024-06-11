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
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="forminput">
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="forminput">
                    <Form.Group controlId="phoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="d-flex justify-content-center">
                    <Button
                      className="rounded-pill submit"
                      variant="primary"
                      type="submit"
                    >
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
