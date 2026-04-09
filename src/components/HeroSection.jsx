import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center gy-4">
          <Col lg={7}>
            <p className="eyebrow">Personal Portfolio</p>
            <h1 className="display-4 fw-bold">A website built around the map of my life.</h1>
            <p className="hero-copy">
              Explore the places that shaped me across India, New Zealand, and the United States.
              Each location opens a story, while the rest of the site highlights my work, interests,
              and ways to connect with me.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button as={Link} to="/journey" size="lg">
                Explore My Journey
              </Button>
              <Button as={Link} to="/contact" variant="outline-light" size="lg">
                Contact Me
              </Button>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero-card">
              <div className="mini-stat">
                <span>3</span>
                <p>Countries</p>
              </div>
              <div className="mini-stat">
                <span>6</span>
                <p>Cities & regions</p>
              </div>
              <div className="mini-stat">
                <span>1</span>
                <p>Story-driven portfolio</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}