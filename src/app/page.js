// src/app/page.js
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Work from '@/components/Work'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  )
}
