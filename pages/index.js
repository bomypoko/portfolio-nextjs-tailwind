import Navbar from '../components/Navbar'
import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'



const index = () => {
  return (
    <div>

      <Head>
        <title>
          Ratchasri |Jr.Front-End Developer </title>
      </Head>

      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      


    </div>
    
  )
}

export default index