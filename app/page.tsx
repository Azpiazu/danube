import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustRatings } from "@/components/trust-ratings"
import { Reviews } from "@/components/reviews"
import { Apartment } from "@/components/apartment"
import { BudapestMap } from "@/components/budapest-map"
import { WalkingDistances } from "@/components/walking-distances"
import { LocalRecommendations } from "@/components/local-recommendations"
import { MustSeeSights } from "@/components/must-see-sights"
import { FirstWalk } from "@/components/first-walk"
import { CheckIn } from "@/components/check-in"
import { GuestGuide } from "@/components/guest-guide"
import { ImportantInfo } from "@/components/important-info"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AnimatedSection animation="fade-up" delay={0}>
        <TrustRatings />
      </AnimatedSection>
      <AnimatedSection animation="fade-up" delay={100}>
        <Reviews />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Apartment />
      </AnimatedSection>
      <AnimatedSection animation="scale" duration={800}>
        <BudapestMap />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <WalkingDistances />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <LocalRecommendations />
      </AnimatedSection>
      <AnimatedSection animation="fade-left">
        <MustSeeSights />
      </AnimatedSection>
      <AnimatedSection animation="fade-right">
        <FirstWalk />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <CheckIn />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <GuestGuide />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <ImportantInfo />
      </AnimatedSection>
      <AnimatedSection animation="fade-up">
        <Contact />
      </AnimatedSection>
      <AnimatedSection animation="fade" duration={500}>
        <Footer />
      </AnimatedSection>
    </main>
  )
}
