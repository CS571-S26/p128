import { Card } from 'react-bootstrap'

export default function ContactInfoCard() {
  return (
    <Card className="project-card border-0 shadow-sm h-100">
      <Card.Body>
        <h2 className="h4 mb-3">Other ways to connect</h2>
        <p className="mb-2">
          <strong>Email:</strong> kkapur5@wisc.edu
        </p>
        <p className="mb-2">
          <strong>LinkedIn:</strong> linkedin.com/in/karankapur5
        </p>
        <p className="mb-0">
          <strong>GitHub:</strong> github.com/karank2512
        </p>
      </Card.Body>
    </Card>
  )
}