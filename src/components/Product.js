import React from 'react'
import Image from 'next/image'
const Product = ({title, href, image, githref, desc}) => {
  return (
    <div className='border-2 shadow-md shadow-slate-800 border-neutral-600 rounded-md p-4 h-96 flex flex-col justify-between hover:scale-110 hover:shadow-sky-300 duration-300'>
      <div className='border-3 border-neutral-600 rounded-md h-40 object-fill'>
      <Image className='object-cover h-full w-full' src={image} alt=""/>
      </div>
      <h2 className='font-bold underline p-1 decoration-pink-300 decoration-4 text-neutral-300 text-xl'> {title}</h2>
      <p className='text-sm font-semibold text-neutral-200'>{desc}</p>
    <div className='flex flex-row justify-between p-2 text-lg'>
    <a href={href} className='cursor-pointer text-neutral-500 hover:underline duration-300'>Website</a>
      <a href={githref} className='cursor-pointer text-neutral-500 hover:underline duration-300'>Code</a>
    </div>
    </div>
  )
}

export default Product