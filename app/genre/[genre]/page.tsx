import Link from 'next/link'
import MangaCard from '@/components/MangaCard'
import AdBanner from '@/components/AdBanner'

import { fetchMangaByTag } from '@/lib/mangadex'
import { generateGenreMetadata } from '@/seo/generateMetadata'
import GenreFilter from '@/components/GenreFilter'
import { genres } from '@/lib/genres'

interface GenrePageProps {
  params: Promise<{ genre: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: GenrePageProps) {
  const { genre } = await params
  const genreName = genre.charAt(0).toUpperCase() + genre.slice(1)
  return generateGenreMetadata(genreName)
}

export default async function GenrePage({ params, searchParams }: GenrePageProps) {
  const { genre } = await params
  const sp = await searchParams
  const page = parseInt(sp.page || '1')
  const limit = 24
  const offset = (page - 1) * limit

  // Find genre tag ID
  const genreData = genres.find(
    g => g.name.toLowerCase().replace(' ', '-') === genre.toLowerCase()
  )

  if (!genreData) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-16 text-center'>
        <h1 className='text-3xl font-bold text-white mb-4'>Genre Not Found</h1>
        <p className='text-gray-400'>This genre does not exist!</p>
      </div>
    )
  }

  const mangaData = await fetchMangaByTag(genreData.id, limit, offset)
  const manga = mangaData.data
  const total = mangaData.total
  const totalPages = Math.ceil(total / limit)
  const genreName = genreData.name

  return (
    <div className='page-transition'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            {genreName} Manga
          </h1>
          <p className='text-gray-400'>
            Browse all {genreName} manga, updated daily!
          </p>
        </div>

        {/* Ad Banner Top */}
        <AdBanner slot='1234567890' format='horizontal' className='mb-8' />

        {/* Genre Filter */}
        <section className='mb-8'>
          <GenreFilter selectedGenre={genre} />
        </section>

        {/* Manga Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>
          {manga.map((m) => (
            <MangaCard key={m.id} manga={m} showGenres />
          ))}
        </div>

        {/* Ad Banner Middle */}
        <AdBanner slot='0987654321' format='horizontal' className='mb-8' />

        {/* Pagination */}
        <div className='flex items-center justify-center gap-2 mt-8'>
          {/* Previous */}
          {page > 1 && (
            <Link
              href={`/genre/${genre}?page=${page - 1}`}
              className='px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors'
            >
              Previous
            </Link>
          )}

          {/* Page Numbers */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const startPage = Math.max(1, page - 2)
            const pageNum = startPage + i
            
            if (pageNum > totalPages) return null
            
            return (
              <Link
                key={pageNum}
                href={`/genre/${genre}?page=${pageNum}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  pageNum === page
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {pageNum}
              </Link>
            )
          })}

          {/* Next */}
          {page < totalPages && (
            <Link
              href={`/genre/${genre}?page=${page + 1}`}
              className='px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors'
            >
              Next
            </Link>
          )}
        </div>

      </div>
    </div>
  )
}