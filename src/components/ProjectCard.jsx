import { Badge, Card } from 'react-bootstrap'

export default function ProjectCard({ title, description, tags }) {
  return (
    <Card className="project-card h-100 border-0 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <Badge bg="dark" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  )
}