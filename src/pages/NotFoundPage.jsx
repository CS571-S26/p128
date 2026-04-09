import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <Card className="border-0 shadow-sm text-center p-4">
      <Card.Body>
        <h1>404</h1>
        <p>The page you requested does not exist.</p>
        <Button as={Link} to="/" variant="dark">
          Return Home
        </Button>
      </Card.Body>
    </Card>
  )
}
