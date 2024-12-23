import React from 'react'
import Hero from '../components/Hero'
import UltimasLLegadas from '../components/UltimasLLegadas'
import TopValoracion from '../components/TopValoracion'
import Politicas from '../components/Politicas'
import NewsletterBox from '../components/NewsletterBox'

function Homepage() {
  return (
    <div>
      <Hero />
      <UltimasLLegadas />
      <TopValoracion />
      <Politicas />
      <NewsletterBox />
    </div>
  )
}

export default Homepage