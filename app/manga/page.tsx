import Link from 'next/link'
import MangaCard from '@/components/MangaCard'
import AdBanner from '@/components/AdBanner'
import GenreFilter from '@/components/GenreFilter'
import { fetchPopularManga, fetchLatestManga, searchManga } from '@/lib/mangadex'

interface MangaPageProps {
  searchParams: Promise<{
    sort?: string
    page?: string
  }>
}

export default async function MangaPage({ searchParams }: MangaPageProps) {
  const params = await searchParams
  const sort = params.sort || 'popular'
  const page = parseInt(params.page || '1')
  const limit = 24
  const offset = (page - 1) * limit

  let mangaData
  let pageTitle = ''

  if (sort === 'latest') {
    mangaData = await fetchLatestManga(limit, offset)
    pageTitle = '🆕 Latest Updates'
  } else {
    mangaData = await fetchPopularManga(limit, offset)
    pageTitle = '🔥 Popular Manga'
  }

  const manga = mangaData.data
  const total = mangaData.total
  const totalPages = Math.ceil(total / limit)

  return (
    <div className='page-transition'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            Browse Manga
          </h1>
          <p className='text-gray-400'>
            Discover thousands of manga, updated daily!
          </p>
        </div>

        {/* Ad Banner Top */}
        <AdBanner slot='1234567890' format='horizontal' className='mb-8' />

        {/* Genre Filter */}
        <section className='mb-8'>
          <GenreFilter />
        </section>

        {/* Sort Buttons */}
        <div className='flex gap-3 mb-8'>
          <Link
            href='/manga?sort=popular'
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sort === 'popular'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🔥 Popular
          </Link>
          
          <Link
            href='/manga?sort=latest'
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sort === 'latest'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            🆕 Latest
          </Link>
        </div>

        {/* Page Title */}
        <h2 className='text-xl font-bold text-white mb-6'>{pageTitle}</h2>

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
              href={`/manga?sort=${sort}&page=${page - 1}`}
              className='px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors'
            >
              Previous
            </Link>
          )}

          {/* Page Numbers */}
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            // Centers the active page in the 5-page window roughly
            const startPage = Math.max(1, page - 2)
            const pageNum = startPage + i
            
            if (pageNum > totalPages) return null
            
            return (
              <Link
                key={pageNum}
                href={`/manga?sort=${sort}&page=${pageNum}`}
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
              href={`/manga?sort=${sort}&page=${page + 1}`}
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