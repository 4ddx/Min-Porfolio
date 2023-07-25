import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-row items-center justify-between w-full border p-8 bg-neutral-900'>
        <div className='flex-1 gap-4 p-4'>
        <h1 className='text-neutral-400'>Made by Ishan.</h1>
        </div>
        <div>
            <p className='text-neutral-400'>© 2023 Ishan Kumar. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer