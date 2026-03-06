import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ValueProps from '@/components/ValueProps'
import StatsBar from '@/components/StatsBar'
import WaitlistCTA from '@/components/WaitlistCTA'
import Footer from '@/components/Footer'

const RecsCarousel = dynamic(() => import('@/components/RecsCarousel'), { ssr: false })

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
