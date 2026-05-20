import Image from 'next/image'
import Link from 'next/link'
import { Manga } from '@/types/manga'
import { getMangaTitle } from '@/lib/mangadex'
import { getFullCoverUrl, getMangaGenres, truncateText, formatStatus, getStatusColor } from '@/lib/helpers'

interface MangaCardProps {
  manga: Manga
  showGenres?: boolean
}

const MangaCard = ({ manga, showGenres = false }: MangaCardProps) => {
  const title = getMangaTitle(manga)
  const coverUrl = getFullCoverUrl(manga, '256')
  const genres = getMangaGenres(manga).slice(0, 3)
  const status = manga.attributes.status
  const statusColor = getStatusColor(status)

  return (
    <Link href={`/manga/${manga.id}`} className='group'>
      <div className='bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-purple-500 transition-all duration-200 hover:scale-105'>

        {/* Cover Image */}
        <div className='relative aspect-[3/4] w-full'>
          <Image
            src={coverUrl}
            alt={title}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw'
          />

          {/* Status Badge */}
          <div className='absolute top-2 left-2'>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-gray-900 bg-opacity-80 ${statusColor}`}>
              {formatStatus(status)}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className='p-3'>
          <h3 className='text-white text-sm font-semibold leading-tight group-hover:text-purple-400 transition-colors'>
            {truncateText(title, 40)}
          </h3>

          {/* Genres */}
          {showGenres && genres.length > 0 && (
            <div className='flex flex-wrap gap-1 mt-2'>
              {genres.map((genre) => (
                <span
                  key={genre}
                  className='text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full'
                >
                  {genre}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export default MangaCard