'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { genres } from '@/lib/genres'
interface GenreFilterProps {
  selectedGenre?: string
}

const GenreFilter = ({ selectedGenre }: GenreFilterProps) => {
  const pathname = usePathname()

  return (
    <div className='w-full'>
      <h3 className='text-white font-semibold mb-3'>Genres</h3>
      <div className='flex flex-wrap gap-2'>
        {/* All Button */}
        <Link
          href='/manga'
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            !selectedGenre
              ? 'bg-purple-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          All
        </Link>

        {/* Genre Buttons */}
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/genre/${genre.name.toLowerCase().replace(' ', '-')}`}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedGenre === genre.name.toLowerCase()
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GenreFilter

// Export genres for use in other files
