import { useState } from 'react'
import { Alert, Button, Card, Col, Form, Row } from 'react-bootstrap'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <Card className="border-0 shadow-sm">
      <Card.Body className="p-4 p-lg-5">
        <h2 className="mb-3">Get in touch</h2>
        <p className="text-secondary">
          This form is set up as a polished front-end demo for now. It can later be connected to Formspree, EmailJS, or a custom backend.
        </p>

        {submitted && <Alert variant="success">Thanks! Your message has been captured in this demo interface.</Alert>}

        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about why you're reaching out..."
                />
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className="mt-4 px-4">
            Send Message
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}