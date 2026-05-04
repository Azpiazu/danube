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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustRatings />
      <Reviews />
      <Apartment />
      <BudapestMap />
      <WalkingDistances />
      <LocalRecommendations />
      <MustSeeSights />
      <FirstWalk />
      <CheckIn />
      <GuestGuide />
      <ImportantInfo />
      <Contact />
      <Footer />
    </main>
  )
}
