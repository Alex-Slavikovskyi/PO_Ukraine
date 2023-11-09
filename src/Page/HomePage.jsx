import React from 'react'
import { MainSection } from '../Components/MainSection'
import { AboutSection } from '../Components/AboutSection'
import { WorkSection } from '../Components/WorkSection'
import { NewsSection } from '../Components/NewsSection'
import { SupportSection } from '../Components/SupportSection'
import { PartnersSection } from '../Components/PartnersSection'
import { Footer } from '../Components/Footer'

export const HomePage = () => {
  
  return (
    <>
      <MainSection/>
      <AboutSection/>
      <WorkSection/>
      <NewsSection/>
      <SupportSection/>
      <PartnersSection />
    </>
  )
}
