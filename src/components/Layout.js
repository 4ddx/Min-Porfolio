import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`flex items-center w-full h-full z-0 pb-32 ${className}`}>{children}</div>
  )
}

export default Layout