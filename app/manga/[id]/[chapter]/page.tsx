import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import AdBanner from '@/components/AdBanner'
import { BreadcrumbJsonLd } from '@/seo/JsonLd'
import { generateChapterMetadata } from '@/seo/generateMetadata'
import { fetchChapterPages, fetchChapters, fetchMangaById, getMangaTitle } from '@/lib/mangadex'
import { formatChapterTitle } from '@/lib/helpers'

interface ChapterPageProps {
  params: Promise<{ id: string, chapter: string }>
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { id, chapter } = await params
  const [mangaData, chaptersData] = await Promise.all([
    fetchMangaById(id),
    fetchChapters(id, { limit: 100 })
  ])
  const manga = mangaData.data
  const chapterData = chaptersData.data.find(c => c.id === chapter)
  const title = getMangaTitle(manga)
  const chapterNum = chapterData?.attributes.chapter || '1'
  return generateChapterMetadata(title, chapterNum)
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id, chapter } = await params

  const [mangaData, chaptersData, pagesData] = await Promise.all([
    fetchMangaById(id),
    fetchChapters(id, { limit: 100 }),
    fetchChapterPages(chapter)
  ])

  if (!pagesData) notFound()

  const manga = mangaData.data
  const chapters = chaptersData.data
  const title = getMangaTitle(manga)
  const currentChapterIndex = chapters.findIndex(c => c.id === chapter)
  const currentChapter = chapters[currentChapterIndex]
  const prevChapter = chapters[currentChapterIndex + 1]
  const nextChapter = chapters[currentChapterIndex - 1]

  const { baseUrl, chapter: chapterInfo } = pagesData
  const pages = chapterInfo.data.map(
    (page) => `${baseUrl}/data/${chapterInfo.hash}/${page}`
  )

  return (
    <div className='page-transition bg-gray-950 min-h-screen'>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://otakureads.online' },
          { name: title, url: `https://otakureads.online/manga/${id}` },
          { name: formatChapterTitle(currentChapter), url: `https://otakureads.online/manga/${id}/${chapter}` },
        ]}
      />

      {/* Top Navigation */}
      <div className='sticky top-16 z-40 bg-gray-900 border-b border-gray-800 px-4 py-3'>
        <div className='max-w-4xl mx-auto flex items-center justify-between gap-4'>

          {/* Manga Title & Chapter */}
          <div className='flex flex-col'>
            <Link
              href={`/manga/${id}`}
              className='text-purple-400 hover:text-purple-300 text-sm transition-colors'
            >
              {title}
            </Link>
            <span className='text-white text-xs'>
              {currentChapter && formatChapterTitle(currentChapter)}
            </span>
          </div>

          {/* Chapter Navigation */}
          <div className='flex items-center gap-2'>
            {prevChapter && (
              <Link
                href={`/manga/${id}/${prevChapter.id}`}
                className='bg-gray-800 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg text-sm transition-colors'
              >
                Prev
              </Link>
            )}
            {nextChapter && (
              <Link
                href={`/manga/${id}/${nextChapter.id}`}
                className='bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg text-sm transition-colors'
              >
                Next
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Ad Banner Top */}
      <div className='max-w-4xl mx-auto px-4 py-4'>
        <AdBanner slot='1234567890' format='horizontal' />
      </div>

      {/* Chapter Pages */}
      <div className='max-w-4xl mx-auto px-4'>
        {pages.map((page, index) => (
          <div key={index} className='w-full mb-1'>
            {index === Math.floor(pages.length / 2) && (
              <AdBanner slot='0987654321' format='horizontal' className='my-4' />
            )}
            <Image
              src={page}
              alt={`Page ${index + 1}`}
              width={800}
              height={1200}
              className='chapter-image w-full h-auto'
              priority={index < 3}
            />
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className='max-w-4xl mx-auto px-4 py-8'>

        {/* Ad Banner Bottom */}
        <AdBanner slot='1122334455' format='horizontal' className='mb-6' />

        <div className='flex items-center justify-between gap-4'>
          {prevChapter ? (
            <Link
              href={`/manga/${id}/${prevChapter.id}`}
              className='bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors'
            >
              Previous Chapter
            </Link>
          ) : <div />}

          <Link
            href={`/manga/${id}`}
            className='bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors'
          >
            All Chapters
          </Link>

          {nextChapter ? (
            <Link
              href={`/manga/${id}/${nextChapter.id}`}
              className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors'
            >
              Next Chapter
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  )
}