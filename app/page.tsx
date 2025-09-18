import React from 'react'
import MobileNav from './components/MobileNav'
import HeroSection from './sections/HeroSection'
import AboutUs from './sections/AboutUs'
import OurServices from './sections/OurServices'
import Contact from './sections/Contact'

function HomePage() {
  return (
    <>
    <MobileNav/>
    <HeroSection/>
    <AboutUs/>
    <OurServices/>
    <Contact/>
    </>
  )
}

export default HomePage
