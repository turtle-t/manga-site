'use client'

import Link from 'next/link'
import { useState } from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='bg-gray-900 border-b border-gray-800 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>

          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <span className='text-2xl font-bold text-purple-500'>
              Otaku
            </span>
            <span className='text-2xl font-bold text-white'>
              Reads
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className='hidden md:flex flex-1 max-w-xl mx-8'>
            <SearchBar />
          </div>

          {/* Nav Links - Desktop */}
          <div className='hidden md:flex items-center gap-6'>
            <Link
              href='/manga'
              className='text-gray-300 hover:text-purple-400 transition-colors'
            >
              Browse
            </Link>
            <Link
              href='/genre/action'
              className='text-gray-300 hover:text-purple-400 transition-colors'
            >
              Genres
            </Link>
            <Link
              href='/manga?sort=latest'
              className='text-gray-300 hover:text-purple-400 transition-colors'
            >
              Latest
            </Link>
            <Link
              href='/manga?sort=popular'
              className='text-gray-300 hover:text-purple-400 transition-colors'
            >
              Popular
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-gray-300 hover:text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Search */}
        <div className='md:hidden pb-3'>
          <SearchBar />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 flex flex-col gap-3'>
            <Link
              href='/manga'
              className='text-gray-300 hover:text-purple-400 transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Browse
            </Link>
            <Link
              href='/genre/action'
              className='text-gray-300 hover:text-purple-400 transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Genres
            </Link>
            <Link
              href='/manga?sort=latest'
              className='text-gray-300 hover:text-purple-400 transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Latest
            </Link>
            <Link
              href='/manga?sort=popular'
              className='text-gray-300 hover:text-purple-400 transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Popular
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar