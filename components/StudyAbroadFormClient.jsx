'use client'

import dynamic from 'next/dynamic'

const StudyAbroadForm = dynamic(() => import('@/components/StudyAbroadForm'), { ssr: false })

export default StudyAbroadForm
