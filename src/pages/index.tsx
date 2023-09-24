import Email from '@/components/Email'
import Socialicons from '@/components/Socialicons'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
import React from 'react'

function Index() {
  return (
    <div className='App'>
      <Navbar/>
    
      <Socialicons/>
      <Email/>
      <main>  <Hero/>
      
      <About/></main>
     
     
    </div>
  )
}

export default Index
