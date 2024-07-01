import { Metadata } from 'next'
import CTA from './CTA'
import Footer from './Footer'
import Hero from './Hero'
import Projects from './Projects'
import Services from './Services'
import Testimonials from './Testimonials'

//data
import { projects, services } from './data'

export const metadata: Metadata = {
  title: 'Sajid Jaber - Portfolio Website',
}

const PortFolio = () => {
  return (
    <>
      <Hero />
      <Services services={services} />
      <Projects projects={projects} />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </>
  )
}

export default PortFolio
