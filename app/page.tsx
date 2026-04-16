import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import KitchenBeforeAfter from "@/components/kitchen-before-after"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationSection from "@/components/location-section"
import Footer from "@/components/footer"
import StatsSection from "@/components/stats-section"

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="min-h-screen pt-14 md:pt-16">
        <HeroSection />
        <KitchenBeforeAfter />
        <ServicesSection />
        <StatsSection />
        <AboutSection />
        <TestimonialsSection />
        <LocationSection />
        <Footer />
      </main>
    </div>
  )
}
