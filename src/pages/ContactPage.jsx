import { Col, Row } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'
import ContactInfoCard from '../components/ContactInfoCard'
import SectionHeader from '../components/SectionHeader'

export default function ContactPage() {
  return (
    <>
      <section className="mb-4">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s connect"
          description="Whether it is about projects, opportunities, collaboration, or just saying hello, this page gives visitors a clear way to reach out."
        />
      </section>

      <Row className="g-4">
        <Col lg={8}>
          <ContactForm />
        </Col>
        <Col lg={4}>
          <ContactInfoCard />
        </Col>
      </Row>
    </>
  )
}