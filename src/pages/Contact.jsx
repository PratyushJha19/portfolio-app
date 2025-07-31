import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  BsFillPersonFill,
  BsEnvelopeFill,
  BsChatDotsFill,
  BsPencil,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import Layout from "../components/layout/Layout";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hurs9gi",
        "template_kx533z4",
        form.current,
        "Eb63YVcmydTsYI8Ds"
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch(() => {
        alert("Failed to send message. Try again later.");
      });
  };
  return (
    <Layout>
      <section className="contact-form-section">
        <Container>
          <div className="form-wrapper">
            <h2 className="form-title">
              Get In <span className="highlight">Touch</span>
            </h2>
            <p className="form-subtitle">
              Have a project in mind? Feel free to reach out and let's create
              something amazing together.
            </p>
            <Form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <BsFillPersonFill className="me-1" /> Full Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="user_name"
                      placeholder="Your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <BsEnvelopeFill className="me-1" /> Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="user_email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  <BsPencil className="me-1" /> Subject
                </Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  placeholder="What is this regarding?"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  <BsChatDotsFill className="me-1" /> Your Message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </Form.Group>
              <div className="text-end">
                <Button type="submit" className="send-btn">
                  Send Message <i className="bi bi-send ms-2"></i>
                </Button>
              </div>
            </Form>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
