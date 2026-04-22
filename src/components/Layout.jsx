import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import '../App.css'
import Footer from './Footer'
import SiteNavbar from './SiteNavbar'

export default function Layout() {
  return (
    <div className="site-shell d-flex flex-column">
      <SiteNavbar />
      <main className="flex-grow-1 py-5">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Container>
        <Footer />
      </Container>
    </div>
  )
}