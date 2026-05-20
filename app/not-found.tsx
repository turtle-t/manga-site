import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className='page-transition min-h-[70vh] flex items-center justify-center px-4'>
      <div className='text-center'>

        {/* 404 Text */}
        <h1 className='text-9xl font-bold text-purple-500 mb-4'>404</h1>

        {/* Manga Character */}
        <div className='text-8xl mb-6'>
          🥺
        </div>

        {/* Message */}
        <h2 className='text-3xl font-bold text-white mb-4'>
          Page Not Found!
        </h2>
        <p className='text-gray-400 text-lg mb-8 max-w-md mx-auto'>
          Looks like this page went on an adventure and never came back!
          The manga you are looking for might have been moved or deleted.
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            href='/'
            className='bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors'
          >
            Go Home
          </Link>
          <Link
            href='/manga'
            className='bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors'
          >
            Browse Manga
          </Link>
        </div>

      </div>
    </div>
  )
}