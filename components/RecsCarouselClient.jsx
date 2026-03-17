'use client'

import dynamic from 'next/dynamic'

const RecsCarousel = dynamic(() => import('@/components/RecsCarousel'), { ssr: false })

export default RecsCarousel
