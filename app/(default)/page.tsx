export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import OurCompany from '@/components/ourCompany'
import DoneWorks from '@/components/doneWorks'

export default function Home() {
  return (
    <>
      <Hero />
      <OurCompany/>
      <Features />
      <Zigzag />
      <DoneWorks/>
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
