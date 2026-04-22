import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <section className="mb-4">
        <p className="eyebrow">Contact</p>
        <h1>Let’s connect</h1>
        <p className="page-copy">
          Whether it is about projects, opportunities, collaboration, or just saying hello,
          this page gives visitors a clear way to reach out.
        </p>
      </section>

      <ContactForm />
    </>
  )
}