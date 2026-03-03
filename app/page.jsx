import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ValueProps from '@/components/ValueProps'
import StatsBar from '@/components/StatsBar'
import RecsCarousel from '@/components/RecsCarousel'
import WaitlistCTA from '@/components/WaitlistCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <RecsCarousel />
        <ValueProps />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  )
}
