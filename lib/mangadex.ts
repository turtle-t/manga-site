import { Manga, MangaListResponse, MangaDetailResponse } from '@/types/manga'
import { ChapterListResponse, ChapterPagesResponse, ChapterSearchParams } from '@/types/chapter'
import { MangaSearchParams, ContentRating } from '@/types/api'

const BASE_URL = 'https://api.mangadex.org'
const COVER_BASE_URL = 'https://uploads.mangadex.org/covers'

// Get cover image URL
export const getCoverUrl = (mangaId: string, fileName: string, size?: '256' | '512'): string => {
  if (size) {
    return `${COVER_BASE_URL}/${mangaId}/${fileName}.${size}.jpg`
  }
  return `${COVER_BASE_URL}/${mangaId}/${fileName}`
}

// Get manga title
export const getMangaTitle = (manga: Manga): string => {
  return manga.attributes.title.en || Object.values(manga.attributes.title)[0] || 'Unknown Title'
}

// Get manga cover filename from relationships
export const getMangaCover = (manga: Manga): string | null => {
  const coverRelation = manga.relationships.find(r => r.type === 'cover_art')
  return coverRelation?.attributes?.fileName || null
}

// Fetch popular manga
export const fetchPopularManga = async (limit: number = 20, offset: number = 0): Promise<MangaListResponse> => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
    'order[followedCount]': 'desc',
    'contentRating[]': 'safe',
    'includes[]': 'cover_art',
  })

  const res = await fetch(`${BASE_URL}/manga?${params}`, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) throw new Error('Failed to fetch popular manga')
  return res.json()
}

// Fetch latest updated manga
export const fetchLatestManga = async (limit: number = 20, offset: number = 0): Promise<MangaListResponse> => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
    'order[updatedAt]': 'desc',
    'contentRating[]': 'safe',
    'includes[]': 'cover_art',
  })

  const res = await fetch(`${BASE_URL}/manga?${params}`, {
    next: { revalidate: 1800 }
  })

  if (!res.ok) throw new Error('Failed to fetch latest manga')
  return res.json()
}

// Search manga
export const searchManga = async (params: MangaSearchParams): Promise<MangaListResponse> => {
  const urlParams = new URLSearchParams()

  if (params.title) urlParams.set('title', params.title)
  if (params.limit) urlParams.set('limit', params.limit.toString())
  if (params.offset) urlParams.set('offset', params.offset.toString())

  const ratings: ContentRating[] = params.contentRating || ['safe']
  ratings.forEach(r => urlParams.append('contentRating[]', r))

  if (params.status) {
    params.status.forEach(s => urlParams.append('status[]', s))
  }

  if (params.order) {
    Object.entries(params.order).forEach(([key, value]) => {
      if (value) urlParams.set(`order[${key}]`, value)
    })
  }

  urlParams.append('includes[]', 'cover_art')

  const res = await fetch(`${BASE_URL}/manga?${urlParams}`, {
    next: { revalidate: 600 }
  })

  if (!res.ok) throw new Error('Failed to search manga')
  return res.json()
}

// Fetch manga by ID
export const fetchMangaById = async (id: string): Promise<MangaDetailResponse> => {
  const params = new URLSearchParams({
    'includes[]': 'cover_art',
  })

  const res = await fetch(`${BASE_URL}/manga/${id}?${params}`, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) throw new Error('Failed to fetch manga')
  return res.json()
}

// Fetch manga by genre/tag
export const fetchMangaByTag = async (tagId: string, limit: number = 20, offset: number = 0): Promise<MangaListResponse> => {
  const params = new URLSearchParams({
    limit: limit.toString(),
    offset: offset.toString(),
    'includedTags[]': tagId,
    'contentRating[]': 'safe',
    'includes[]': 'cover_art',
    'order[followedCount]': 'desc',
  })

  const res = await fetch(`${BASE_URL}/manga?${params}`, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) throw new Error('Failed to fetch manga by tag')
  return res.json()
}

// Fetch chapters for a manga
export const fetchChapters = async (mangaId: string, params?: ChapterSearchParams): Promise<ChapterListResponse> => {
  const urlParams = new URLSearchParams({
    manga: mangaId,
    limit: (params?.limit || 100).toString(),
    offset: (params?.offset || 0).toString(),
    'translatedLanguage[]': 'en',
    'order[chapter]': 'desc',
    'includes[]': 'scanlation_group',
  })

  const res = await fetch(`${BASE_URL}/chapter?${urlParams}`, {
    next: { revalidate: 1800 }
  })

  if (!res.ok) throw new Error('Failed to fetch chapters')
  return res.json()
}

// Fetch chapter pages
export const fetchChapterPages = async (chapterId: string): Promise<ChapterPagesResponse> => {
  const res = await fetch(`${BASE_URL}/at-home/server/${chapterId}`, {
    next: { revalidate: 3600 }
  })

  if (!res.ok) throw new Error('Failed to fetch chapter pages')
  return res.json()
}

// Fetch all tags
export const fetchTags = async () => {
  const res = await fetch(`${BASE_URL}/manga/tag`, {
    next: { revalidate: 86400 }
  })

  if (!res.ok) throw new Error('Failed to fetch tags')
  return res.json()
}