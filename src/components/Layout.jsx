import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import SiteNavbar from './SiteNavbar'
import Footer from './Footer'
import '../App.css'

export default function Layout() {
  return (
    <div className="site-shell">
      <SiteNavbar />
      <main>
        <Container className="py-4 py-lg-5">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
