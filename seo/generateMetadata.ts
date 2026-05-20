import { Metadata } from 'next'
import { Manga } from '@/types/manga'
import { getMangaTitle, getCoverUrl, getMangaCover } from '@/lib/mangadex'
import { getMangaDescription, getMangaGenres } from '@/lib/helpers'

const SITE_NAME = 'OtakuReads'
const SITE_URL = 'https://otakureads.online'
const SITE_DESCRIPTION = 'Read manga online for free on OtakuReads. Thousands of manga in HD quality, updated daily!'

// Default metadata for all pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: SITE_DESCRIPTION,
  keywords: ['manga', 'read manga online', 'free manga', 'anime', 'otaku', 'manga reader'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  }
}

// Generate metadata for manga detail page
export const generateMangaMetadata = (manga: Manga): Metadata => {
  const title = getMangaTitle(manga)
  const description = getMangaDescription(manga)
  const genres = getMangaGenres(manga)
  const coverFileName = getMangaCover(manga)
  const coverUrl = coverFileName
    ? getCoverUrl(manga.id, coverFileName, '512')
    : undefined

  return {
    title: `Read ${title} Manga Online Free`,
    description: description.slice(0, 160),
    keywords: [
      title,
      `${title} manga`,
      `read ${title} online`,
      `${title} free`,
      ...genres,
      'manga', 'read manga online'
    ],
    openGraph: {
      title: `Read ${title} Manga Online Free`,
      description: description.slice(0, 160),
      url: `${SITE_URL}/manga/${manga.id}`,
      images: coverUrl ? [{ url: coverUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Read ${title} Manga Online Free`,
      description: description.slice(0, 160),
      images: coverUrl ? [coverUrl] : [],
    }
  }
}

// Generate metadata for genre page
export const generateGenreMetadata = (genre: string): Metadata => {
  return {
    title: `${genre} Manga`,
    description: `Read the best ${genre} manga online for free on OtakuReads. Updated daily!`,
    keywords: [
      `${genre} manga`,
      `best ${genre} manga`,
      `read ${genre} manga online`,
      'manga', 'free manga'
    ],
    openGraph: {
      title: `${genre} Manga - OtakuReads`,
      description: `Read the best ${genre} manga online for free on OtakuReads. Updated daily!`,
      url: `${SITE_URL}/genre/${genre.toLowerCase()}`,
    }
  }
}

// Generate metadata for search page
export const generateSearchMetadata = (query: string): Metadata => {
  return {
    title: `Search: ${query}`,
    description: `Search results for "${query}" on OtakuReads. Find and read manga online for free!`,
    robots: {
      index: false,
      follow: true,
    }
  }
}

// Generate metadata for chapter page
export const generateChapterMetadata = (mangaTitle: string, chapterNum: string): Metadata => {
  return {
    title: `${mangaTitle} Chapter ${chapterNum}`,
    description: `Read ${mangaTitle} Chapter ${chapterNum} online for free on OtakuReads!`,
    keywords: [
      `${mangaTitle} chapter ${chapterNum}`,
      `read ${mangaTitle} chapter ${chapterNum}`,
      'manga', 'free manga'
    ],
    openGraph: {
      title: `${mangaTitle} Chapter ${chapterNum} - OtakuReads`,
      description: `Read ${mangaTitle} Chapter ${chapterNum} online for free on OtakuReads!`,
    }
  }
}