import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center gy-4">
          <Col lg={7}>
            <p className="eyebrow">Personal Portfolio</p>
            <h1 className="display-4 fw-bold">Hi, I’m Karan Kapur.</h1>
            <p className="hero-copy">
              I am a Computer Science and Data Science student at UW–Madison who is interested
              in software engineering, AI, analytics, and building meaningful technology.
              This website combines my portfolio with a “Map of My Life,” where visitors can
              explore the places and experiences that shaped me across India, New Zealand,
              and the United States.
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
                <p>Locations</p>
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