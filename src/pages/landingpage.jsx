import CTABanner from '../components/landing/CTABanner'
import CoverageSection from '../components/landing/CoverageSection'
import CourierShowcase from '../components/landing/CourierShowcase'
import HeroSection from '../components/landing/HeroSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import ServicesGrid from '../components/landing/ServicesGrid'
import WhyUsSection from '../components/landing/WhyUsSection'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

export default function LandingPage() {
  return (
    <div className="yt-app">
      <Navbar />
      <main>
        <div className="yt-top-flow">
          <HeroSection />
          <ServicesGrid />
        </div>
        <CourierShowcase />
        <WhyUsSection />
        <HowItWorksSection />
        <CoverageSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}