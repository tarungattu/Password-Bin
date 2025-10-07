import React from 'react'
import bin from '../assets/bin.svg'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-5'>
      <div className="logo duration-100 flex items-center">
        <img src={bin} alt="Bin logo" className="h-22 w-22 mr-2" />
        <span style={{ fontFamily: "'Bitcount Single Ink', sans-serif" }}
          className='sm:text-2xl md:text-4xl'>PASSWORD BIN</span>
      </div>
      <ul className='flex md:gap-4 lg:gap-6 items-center'>
        <li >
          By{' '}
          <a
            href="https://www.linkedin.com/in/tarun-gattu123/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 md:text-2xl cursor-pointer"
          >
            Tarun Gattu
          </a>
        </li>


        <li>
          <a
            href="https://tarungattu.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            See more Work
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar
