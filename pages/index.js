import React from 'react'
import Header1 from '../components/Header1'
import Header2 from '@/components/Header2'
import Banner from '@/components/Banner'
import Photos from '@/components/Photos'
import Head from 'next/head'
import Footer from '@/components/Footer'

const Home = () => {
  return (
   <div>
    <Head>
      <title>Oyo : India's best online hotel booking site</title>
      <link rel='icon' href='/icon.png'></link>
    </Head>
    <Header1/>
    <Header2/>
    <Banner/>
    <Photos/>
    <Footer/>
   </div>
  )
}

export default Home