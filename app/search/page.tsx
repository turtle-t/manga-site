import Link from 'next/link'
import MangaCard from '@/components/MangaCard'
import AdBanner from '@/components/AdBanner'
import { searchManga } from '@/lib/mangadex'
import { generateSearchMetadata } from '@/seo/generateMetadata'

interface SearchPageProps {
  searchParams: Promise<{ q?: string, page?: string }>
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const params = await searchParams
  return generateSearchMetadata(params.q || '')
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const query = params.q || ''
  const page = parseInt(params.page || '1')
  const limit = 24
  const offset = (page - 1) * limit

  const mangaData = query
    ? await searchManga({ title: query, limit, offset, contentRating: ['safe'] })
    : { data: [], total: 0, limit, offset, result: 'ok' }

  const manga = mangaData.data
  const total = mangaData.total
  const totalPages = Math.ceil(total / limit)

  return (
    <div className='page-transition'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>
            {query ? `Search: "${query}"` : 'Search Manga'}
          </h1>
          {query && total > 0 && (
            <p className='text-gray-400'>
              Found {total} results for "{query}"
            </p>
          )}
        </div>

        {/* Ad Banner Top */}
        <AdBanner slot='1234567890' format='horizontal' className='mb-8' />

        {/* No Query */}
        {!query && (
          <div className='text-center py-16'>
            <p className='text-gray-400 text-lg'>
              Type something in the search bar to find manga!
            </p>
          </div>
        )}

        {/* No Results */}
        {query && manga.length === 0 && (
          <div className='text-center py-16'>
            <p className='text-gray-400 text-lg'>
              No manga found for "{query}"
            </p>
            <p className='text-gray-500 text-sm mt-2'>
              Try searching with different keywords!
            </p>
          </div>
        )}

        {/* Results Grid */}
        {manga.length > 0 && (
          <>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8'>
              {manga.map((m) => (
                <MangaCard key={m.id} manga={m} showGenres />
              ))}
            </div>

            {/* Ad Banner Middle */}
            <AdBanner slot='0987654321' format='horizontal' className='mb-8' />

            {/* Pagination */}
            <div className='flex items-center justify-center gap-2 mt-8'>
              {/* Previous Page Link */}
              {page > 1 && (
                <Link
                  href={`/search?q=${query}&page=${page - 1}`}
                  className='px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors'
                >
                  Previous
                </Link>
              )}

              {/* Numbered Page Links */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const startPage = Math.max(1, page - 2)
                const pageNum = startPage + i
                
                if (pageNum > totalPages) return null
                
                return (
                  <Link
                    key={pageNum}
                    href={`/search?q=${query}&page=${pageNum}`}
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

              {/* Next Page Link */}
              {page < totalPages && (
                <Link
                  href={`/search?q=${query}&page=${page + 1}`}
                  className='px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors'
                >
                  Next
                </Link>
              )}
            </div>
          </>
        )}

      </div>
    </div>
  )
}