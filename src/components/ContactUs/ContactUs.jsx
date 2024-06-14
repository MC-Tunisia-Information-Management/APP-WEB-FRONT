import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import "./contactus.css";
import upperimage from "../../assests/layerlayer.png";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import NavBar from "../NavBar/NavBar";

function ContactUs() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/contact-us",
      title: "Contact Us",
    });
  });
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    "Full Name": "",
    Email: "",
    Message: "",
  });
  const [formdisable, setDisable] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    const formDataObject = new FormData();
    formDataObject.append("Full Name", formData["Full Name"]);
    formDataObject.append("Email", formData.Email);
    formDataObject.append("Message", formData.Message);

    // Handle form submission here, e.g., send data to server
    console.log(formData);
    fetch(
      "https://script.google.com/macros/s/AKfycbx34wiyo6dKub5Zzx-Jq2J0PsTBZlbyZACmNgDTRTZev15spI-f0VZr7GL6RWTXlS0cqg/exec",
      { method: "POST", body: formDataObject }
    )
      .then((response) => {
        if (!response.ok) {
          // Log detailed error information
          return response.text().then((text) => {
            throw new Error(
              `Network response was not ok: ${response.statusText}. Response body: ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        alert("Your message has been sucessfully sent!");
        navigate("/");
      })
      .catch((error) => {
        console.log("error: ", error);
      });
    // Reset form after submission
  };

  return (
    <>
      <section className="contactus">
        <NavBar />
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
                        disabled={formdisable}
                        name="Full Name"
                        className="input"
                        value={formData["Full Name"]}
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
                        disabled={formdisable}
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="forminput">
                    <Form.Group controlId="message">
                      <Form.Control
                        type="text"
                        className="input-area"
                        disabled={formdisable}
                        name="Message"
                        as="textarea"
                        placeholder="Type your message..."
                        rows={3}
                        value={formData.Message}
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
                        disabled={formdisable}
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
                    <Button
                      className="submit"
                      disabled={formdisable}
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
