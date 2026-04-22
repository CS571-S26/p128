import { Col, Row } from 'react-bootstrap'
import HeroSection from '../components/HeroSection'
import ProjectCard from '../components/ProjectCard'
import { portfolioProjects } from '../data/siteData'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="mt-5">
        <div className="section-heading mb-4">
          <p className="eyebrow">Featured Work</p>
          <h2>A few things I’ve built</h2>
          <p className="page-copy">
            Alongside my personal story, this site also highlights the technical work I care
            about most - building practical systems in software engineering, analytics, and AI.
          </p>
        </div>

        <Row className="g-4">
          {portfolioProjects.map((project) => (
            <Col md={6} lg={4} key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  )
}