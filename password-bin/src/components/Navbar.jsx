import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-300 flex justify-between p-3'>
      <div className="logo">
        PASSWORD BIN
      </div>
      <ul className='flex gap-4'>
        <li>By Tarun Gattu</li>
        <li>See more Work</li>
      </ul>
    </nav>
  )
}

export default Navbar
