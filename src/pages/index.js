import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Layout from '@/components/Layout'
import profilePict from '../../public/images/profile/supernova.jpg'
import Footer from '@/components/Footer'
import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ishan Kumar</title>
      </Head>
      <div className='bg-neutral-900'>
        <Navbar />
        <main className='flex items-center text-black min-h-screen w-full bg-neutral-900'>
          <Layout className='pt-0'>
            <div className='flex flex-col items-center md:flex-row justify-between w-full bg-neutral-900 gap-10'>
              <div className='w-full md:w-1/2 flex items-center justify-center'>
                <Image
                  src={profilePict}
                  alt="Profile_Pic"
                  className='w-[250px] h-[250px] rounded-full hover:scale-110 duration-300'
                />
              </div>
              <div className='flex flex-col gap-5 md:w-1/2 pr-5'>
                <h1 className='text-4xl md:text-7xl font-bold text-white max-w-[1000px] text-center md:text-left'>
                  Software engineer, student, and pen-tester.
                </h1>
                <p className='text-lg md:text-xl font-semibold text-neutral-400 max-w-[800px] text-center md:text-left'>
                  I&apos;m Ishan, a full-stack engineer creating beautiful user interfaces and finding bugs in software before the bad guys do.
                </p>
                <p className='text-lg md:text-xl font-semibold text-neutral-400 max-w-[800px] text-center md:text-left'>
                  Currently, I&apos;m working as a Blockchain Engineer at <a href='https://www.wega.fun' className='text-red-400'>Wega</a>, where we&apos;re creating an NFT-betting game to let people play games using NFTs.
                </p>
                <div className='flex flex-row items-center justify-center md:justify-start w-full p-2 mt-5 gap-10'>
                  <a href="https://twitter.com/_ishankumar_">
                    <BsTwitter className='h-10 w-10 text-neutral-500 cursor-pointer hover:scale-125 hover:text-sky-600 duration-300' />
                  </a>
                  <a href="https://www.linkedin.com/in/ishan-k-463a07205/">
                    <BsLinkedin className='h-10 w-10 text-neutral-500 cursor-pointer hover:scale-125 hover:text-sky-800 duration-300' />
                  </a>
                  <a href="https://www.github.com/4ddx">
                    <BsGithub className='h-10 w-10 text-neutral-500 cursor-pointer hover:scale-125 hover:text-gray-600 duration-300' />
                  </a>
                </div>
              </div>
            </div>
          </Layout>
        </main>
        <Footer />
      </div>
    </>
  )
}
