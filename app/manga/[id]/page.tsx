import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import AdBanner from '@/components/AdBanner'
import ChapterList from '@/components/ChapterList'
import { BreadcrumbJsonLd, MangaJsonLd } from '@/seo/JsonLd'
import { generateMangaMetadata } from '@/seo/generateMetadata'
import { fetchMangaById, fetchChapters, getMangaTitle } from '@/lib/mangadex'
import { getFullCoverUrl, getMangaDescription, getMangaGenres, getMangaThemes, formatStatus, getStatusColor, getLastRead } from '@/lib/helpers'

interface MangaDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: MangaDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const data = await fetchMangaById(id)
  return generateMangaMetadata(data.data)
}

export default async function MangaDetailPage({ params }: MangaDetailPageProps) {
  const { id } = await params

  const [mangaData, chaptersData] = await Promise.all([
    fetchMangaById(id),
    fetchChapters(id, { limit: 100 })
  ])

  if (!mangaData.data) notFound()

  const manga = mangaData.data
  const chapters = chaptersData.data
  const title = getMangaTitle(manga)
  const description = getMangaDescription(manga)
  const coverUrl = getFullCoverUrl(manga, '512')
  const genres = getMangaGenres(manga)
  const themes = getMangaThemes(manga)
  const status = manga.attributes.status
  const statusColor = getStatusColor(status)
  const firstChapter = chapters[chapters.length - 1]

  return (
    <div className='page-transition'>
      <MangaJsonLd manga={manga} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://otakureads.online' },
          { name: 'Manga', url: 'https://otakureads.online/manga' },
          { name: title, url: `https://otakureads.online/manga/${id}` },
        ]}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>

        {/* Ad Banner Top */}
        <AdBanner slot='1234567890' format='horizontal' className='mb-8' />

        {/* Manga Info */}
        <div className='flex flex-col md:flex-row gap-8 mb-8'>

          {/* Cover */}
          <div className='w-full md:w-64 flex-shrink-0'>
            <div className='relative aspect-[3/4] w-full md:w-64 rounded-lg overflow-hidden'>
              <Image
                src={coverUrl}
                alt={title}
                fill
                className='object-cover'
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div className='flex-1'>
            <h1 className='text-3xl font-bold text-white mb-2'>{title}</h1>

            {/* Status & Year */}
            <div className='flex items-center gap-3 mb-4'>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-gray-800 ${statusColor}`}>
                {formatStatus(status)}
              </span>
              {manga.attributes.year && (
                <span className='text-gray-400 text-sm'>
                  {manga.attributes.year}
                </span>
              )}
            </div>

            {/* Description */}
            <p className='text-gray-400 text-sm leading-relaxed mb-4'>
              {description}
            </p>

            {/* Genres */}
            {genres.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-4'>
                {genres.map((genre) => (
                  <Link
                    key={genre}
                    href={`/genre/${genre.toLowerCase().replace(' ', '-')}`}
                    className='text-xs bg-purple-900 text-purple-300 px-3 py-1 rounded-full hover:bg-purple-800 transition-colors'
                  >
                    {genre}
                  </Link>
                ))}
              </div>
            )}

            {/* Themes */}
            {themes.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-6'>
                {themes.map((theme) => (
                  <span
                    key={theme}
                    className='text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full'
                  >
                    {theme}
                  </span>
                ))}
              </div>
            )}

            {/* Read Buttons */}
            <div className='flex gap-3'>
              {firstChapter && (
                <Link
                  href={`/manga/${id}/${firstChapter.id}`}
                  className='bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors'
                >
                  Start Reading
                </Link>
              )}
              {chapters[0] && (
                <Link
                  href={`/manga/${id}/${chapters[0].id}`}
                  className='bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors'
                >
                  Latest Chapter
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Ad Banner Middle */}
        <AdBanner slot='0987654321' format='horizontal' className='mb-8' />

        {/* Chapter List */}
        <section>
          <h2 className='text-xl font-bold text-white mb-4'>
            Chapters ({chapters.length})
          </h2>
          <ChapterList chapters={chapters} mangaId={id} />
        </section>

        {/* Ad Banner Bottom */}
        <AdBanner slot='1122334455' format='horizontal' className='mb-8' />

      </div>
    </div>
  )
}