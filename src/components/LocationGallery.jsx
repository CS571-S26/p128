import { Card, Col, Row } from 'react-bootstrap'

export default function LocationGallery({ locations }) {
  return (
    <Row className="g-4 mt-1">
      {locations.map((location) => (
        <Col md={6} lg={4} key={location.name}>
          <Card className="location-card h-100 border-0 shadow-sm">
            <div className="story-image-placeholder">
              <span>{location.imageLabel}</span>
            </div>
            <Card.Body>
              <p className="location-label">{location.name}</p>
              <Card.Title>{location.title}</Card.Title>
              <Card.Text>{location.story}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}