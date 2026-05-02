import { HeroSection } from "@/components/home/hero-section"
import { IntroSection } from "@/components/home/intro-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { FeaturedSection } from "@/components/home/featured-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <CategoriesSection />
      <FeaturedSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
