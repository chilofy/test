import styled from 'styled-components'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Discover from './components/Discover'
import Trending from './components/Trending'
import Devices from './components/Devices'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { gradientBg } from './styles/common'

function App() {
  return (
    <Page>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Discover />
      <Trending />
      <Devices />
      <CTA />
      <Footer />
    </Page>
  )
}

const Page = styled.div`
  ${gradientBg};
`

export default App
