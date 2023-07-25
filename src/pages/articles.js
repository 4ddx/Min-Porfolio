import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const articles = () => {
  return (
    <>
    <Navbar/>
    <main className='h-[100vh] flex items-center justify-center'>
      <h1 className='text-5xl bold text-neutral-200'>
        Articles.... <br/>
        Coming Soon
      </h1>
    </main>
    <Footer/>
    </>
  )
}

export default articles