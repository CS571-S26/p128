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
          <p className="eyebrow">Portfolio Snapshot</p>
          <h2>What this site represents</h2>
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
