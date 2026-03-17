import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ValueProps from '@/components/ValueProps'
import StatsBar from '@/components/StatsBar'
import WaitlistCTA from '@/components/WaitlistCTA'
import Footer from '@/components/Footer'
import RecsCarousel from '@/components/RecsCarouselClient'

export const metadata = {
  title: 'LOG',
  description: 'discover, share, and experience your city through the eyes of people who actually live it.',
}

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
