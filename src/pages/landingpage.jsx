import CTABanner from '../components/auth/landing/CTABanner'
import CoverageSection from '../components/auth/landing/CoverageSection'
import CourierShowcase from '../components/auth/landing/CourierShowcase'
import HeroSection from '../components/auth/landing/HeroSection'
import HowItWorksSection from '../components/auth/landing/HowItWorksSection'
import ServicesGrid from '../components/auth/landing/ServicesGrid'
import WhyUsSection from '../components/auth/landing/WhyUsSection'
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