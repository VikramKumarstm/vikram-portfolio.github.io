import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import AboutPage from '../../components/About/AboutPage'
import Service from '../../components/Service/Service'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <AboutPage />
        <Service />
        <Footer />
    </div>
  )
}

export default Home