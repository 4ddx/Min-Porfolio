import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import profilePict from '../../public/images/profile/pic.jpg'

const about = () => {
  return (
    <>
      <Head>
        <title>About - Ishan Kumar</title>
      </Head>
      <div className='flex flex-col h-full items-center justify-between bg-neutral-900'>
        <Navbar />
        <main className='flex flex-col items-center justify-center bg-neutral-900 w-full h-full my-[42px]'>
          <div className='w-full p-4'>
            <div className='flex flex-col md:flex-row w-full items-center justify-center md:space-x-8'>
              <div className='w-full md:w-1/2 flex items-center justify-center'>
                <Image
                  src={profilePict}
                  alt="Profile_Pic"
                  className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] skew-x-3 -skew-y-2 border-b-8 border-r-4 border-b-teal-400 border-r-neutral-600 shadow-md shadow-neutral-200/80 hover:skew-x-0 hover:skew-y-0 hover:scale-110 hover:shadow-sky-500/80 duration-300'
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col text-white tracking-tight my-4 max-w-[700px] justify-end">
                <p className="text-5xl md:text-5xl leading-tight font-bold text-left">I&apos;m Ishan Kumar. I&apos;m a first-year CS student, on a journey into the world of blockchain technology!</p>
                <div className='flex flex-col items-center justify-start w-full'>
                  <div className='mt-5'>
                    <p className='text-neutral-500 text-xl md:text-xl'>In the present day, I&apos;ve accumulated extensive experience by working with numerous startups and undertaking numerous projects for clients, hackathons, and personal projects.</p>
                    <p className='text-neutral-500 text-xl md:text-xl mt-9'>As a Blockchain Engineer, I have experience working on both large-scale projects with more than a thousand users and small side projects. My background includes building software from the ground up as part of the founding team at Wega.fun, to create the frontend and the smart-contracts for an NFT-betting dApp (ERC-721).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default about
