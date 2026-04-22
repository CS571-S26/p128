import { Badge, Card, Carousel } from 'react-bootstrap'

export default function LocationGallery({ locationName, locationData, activeRegion }) {
  if (!locationData || !locationData.images) {
    return null
  }

  return (
    <Card className="location-card border-0 shadow-sm mt-4 overflow-hidden">
      <Carousel interval={null}>
        {locationData.images.map((image) => (
          <Carousel.Item key={image.alt}>
            <img className="journey-photo d-block w-100" src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>

      <Card.Body className="p-4 p-lg-5">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <Badge bg="dark">{activeRegion}</Badge>
          <Badge bg="secondary">{locationName}</Badge>
        </div>

        <p className="location-label">{locationData.subtitle}</p>
        <Card.Title className="mb-3">{locationData.title}</Card.Title>
        <Card.Text className="mb-3">{locationData.story}</Card.Text>

        <ul className="story-highlights">
          {locationData.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  )
}