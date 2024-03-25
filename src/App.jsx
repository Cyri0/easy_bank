import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Latest from './components/Latest'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <Latest />
      <Footer />
    </div>
  )
}

export default App