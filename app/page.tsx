import Image from 'next/image'
import Link from 'next/link'
import MangaCard from '@/components/MangaCard'
import AdBanner from '@/components/AdBanner'
import GenreFilter from '@/components/GenreFilter'
import { fetchPopularManga, fetchLatestManga } from '@/lib/mangadex'

export default async function Home() {
  const [popularData, latestData] = await Promise.all([
    fetchPopularManga(12),
    fetchLatestManga(12),
  ])

  const popularManga = popularData.data
  const latestManga = latestData.data

  return (
    <div className='page-transition'>

      {/* Hero Section */}
      <section className='bg-gradient-to-b from-purple-950 to-gray-950 py-16 px-4'>
        <div className='max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Read Manga{' '}
            <span className='text-purple-400'>Online Free</span>
          </h1>
          <p className='text-gray-400 text-lg md:text-xl mb-8'>
            Thousands of manga in HD quality, updated daily!
          </p>
          <Link
            href='/manga'
            className='bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block'
          >
            Browse All Manga
          </Link>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        {/* Ad Banner Top */}
        <AdBanner slot='1234567890' format='horizontal' className='mb-8' />

        {/* Genre Filter */}
        <section className='mb-8'>
          <GenreFilter />
        </section>

        {/* Popular Manga */}
        <section className='mb-12'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-2xl font-bold text-white'>
              🔥 Popular Manga
            </h2>
            <Link
              href='/manga?sort=popular'
              className='text-purple-400 hover:text-purple-300 text-sm transition-colors'
            >
              View All
            </Link>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {popularManga.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </section>

        {/* Ad Banner Middle */}
        <AdBanner slot='0987654321' format='horizontal' className='mb-8' />

        {/* Latest Manga */}
        <section className='mb-12'>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-2xl font-bold text-white'>
              🆕 Latest Updates
            </h2>
            <Link
              href='/manga?sort=latest'
              className='text-purple-400 hover:text-purple-300 text-sm transition-colors'
            >
              View All
            </Link>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {latestManga.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </section>

        {/* Ad Banner Bottom */}
        <AdBanner slot='1122334455' format='horizontal' className='mb-8' />

      </div>
    </div>
  )
}