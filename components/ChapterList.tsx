'use client'

import Link from 'next/link'
import { Chapter } from '@/types/chapter'
import { formatChapterTitle, formatDate } from '@/lib/helpers'

interface ChapterListProps {
  chapters: Chapter[]
  mangaId: string
}

const ChapterList = ({ chapters, mangaId }: ChapterListProps) => {
  if (chapters.length === 0) {
    return (
      <div className='text-center py-8 text-gray-400'>
        No chapters available yet.
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-1 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin'>
      {chapters.map((chapter) => {
        const scanlationGroup = chapter.relationships.find(
          r => r.type === 'scanlation_group'
        )?.attributes?.name

        return (
          <Link
            key={chapter.id}
            href={`/manga/${mangaId}/${chapter.id}`}
            className='flex items-center justify-between bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors group'
          >
            {/* Chapter Info */}
            <div className='flex flex-col'>
              <span className='text-white text-sm font-medium group-hover:text-purple-400 transition-colors'>
                {formatChapterTitle(chapter)}
              </span>
              {scanlationGroup && (
                <span className='text-gray-500 text-xs mt-0.5'>
                  {scanlationGroup}
                </span>
              )}
            </div>

            {/* Date & Arrow */}
            <div className='flex items-center gap-3'>
              <span className='text-gray-500 text-xs'>
                {formatDate(chapter.attributes.publishAt)}
              </span>
              <svg
                className='w-4 h-4 text-gray-500 group-hover:text-purple-400 transition-colors'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ChapterList
