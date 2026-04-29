import { Card, Col, Row } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { portfolioProjects } from '../data/siteData'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="mt-5">
        <SectionHeader
          eyebrow="Featured Work"
          title="A few things I’ve built"
          description="Alongside my personal story, this site also highlights the technical work I care about most — building practical systems in software engineering, analytics, and AI."
        />

        <Row className="g-4">
          {portfolioProjects.map((project) => (
            <Col md={6} lg={4} key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </section>

      <section className="mt-5">
        <SectionHeader
          eyebrow="About Me"
          title="More than just a portfolio"
          description="This website is designed to combine my technical background with the personal experiences that shaped me. The goal is to make the site feel both professional and human."
        />

        <Card className="project-card border-0 shadow-sm">
          <Card.Body>
            <p className="mb-0">
              I’m a Computer Science and Data Science student at UW–Madison with interests in
              software engineering, machine learning, analytics, and building useful products.
              The “Map of My Life” is the core interactive element of this website and helps tell
              that story through the places that have shaped my life across India, New Zealand,
              and the United States.
            </p>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}