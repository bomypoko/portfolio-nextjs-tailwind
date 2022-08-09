import Navbar from '../components/Navbar'
import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'

const index = () => {
  return (
    <div>

      <Head>
        <title>
          Ratchasri |Jr.Front-End Developer </title>
      </Head>

      <Navbar/>

      <Hero/>
    </div>
    
  )
}

export default index