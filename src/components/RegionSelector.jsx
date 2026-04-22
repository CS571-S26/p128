import { Button, Card, Col, Row } from 'react-bootstrap'

export default function RegionSelector({ mapData, activeRegion, onSelectRegion }) {
  return (
    <Row className="g-4">
      {Object.entries(mapData).map(([regionName, region]) => (
        <Col md={4} key={regionName}>
          <Card className={`region-card h-100 ${activeRegion === regionName ? 'region-card-active' : ''}`}>
            <Card.Body>
              <Card.Title>{regionName}</Card.Title>
              <Card.Text>{region.summary}</Card.Text>
              <Button
                variant={activeRegion === regionName ? 'dark' : 'outline-dark'}
                onClick={() => onSelectRegion(regionName)}
              >
                View {regionName}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}