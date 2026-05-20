import { Manga } from '@/types/manga'
import { Chapter } from '@/types/chapter'
import { getCoverUrl, getMangaCover } from './mangadex'

// Get full cover image URL from manga object
export const getFullCoverUrl = (manga: Manga, size?: '256' | '512'): string => {
  const fileName = getMangaCover(manga)
  if (!fileName) return '/images/placeholder.jpg'
  return getCoverUrl(manga.id, fileName, size)
}

// Get manga description
export const getMangaDescription = (manga: Manga): string => {
  return manga.attributes.description?.en || 'No description available.'
}

// Get manga genres from tags
export const getMangaGenres = (manga: Manga): string[] => {
  return manga.attributes.tags
    .filter(tag => tag.attributes.group === 'genre')
    .map(tag => tag.attributes.name.en)
}

// Get manga themes from tags
export const getMangaThemes = (manga: Manga): string[] => {
  return manga.attributes.tags
    .filter(tag => tag.attributes.group === 'theme')
    .map(tag => tag.attributes.name.en)
}

// Format chapter title
export const formatChapterTitle = (chapter: Chapter): string => {
  const num = chapter.attributes.chapter
  const title = chapter.attributes.title
  if (num && title) return `Chapter ${num} - ${title}`
  if (num) return `Chapter ${num}`
  if (title) return title
  return 'Oneshot'
}

// Format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Format manga status
export const formatStatus = (status: string): string => {
  return status.charAt(0).toUpperCase() + status.slice(1)
}

// Truncate text
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

// Get status color
export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'ongoing': return 'text-green-400'
    case 'completed': return 'text-blue-400'
    case 'hiatus': return 'text-yellow-400'
    case 'cancelled': return 'text-red-400'
    default: return 'text-gray-400'
  }
}

// Format large numbers
export const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
  return num.toString()
}

// Generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

// Local storage helpers for bookmarks
export const getBookmarks = (): string[] => {
  if (typeof window === 'undefined') return []
  const bookmarks = localStorage.getItem('otakureads_bookmarks')
  return bookmarks ? JSON.parse(bookmarks) : []
}

export const addBookmark = (mangaId: string): void => {
  const bookmarks = getBookmarks()
  if (!bookmarks.includes(mangaId)) {
    bookmarks.push(mangaId)
    localStorage.setItem('otakureads_bookmarks', JSON.stringify(bookmarks))
  }
}

export const removeBookmark = (mangaId: string): void => {
  const bookmarks = getBookmarks()
  const updated = bookmarks.filter(id => id !== mangaId)
  localStorage.setItem('otakureads_bookmarks', JSON.stringify(updated))
}

export const isBookmarked = (mangaId: string): boolean => {
  const bookmarks = getBookmarks()
  return bookmarks.includes(mangaId)
}

// Local storage helpers for reading history
export const getReadingHistory = (): { mangaId: string, chapterId: string, chapterNum: string }[] => {
  if (typeof window === 'undefined') return []
  const history = localStorage.getItem('otakureads_history')
  return history ? JSON.parse(history) : []
}

export const addToHistory = (mangaId: string, chapterId: string, chapterNum: string): void => {
  const history = getReadingHistory()
  const filtered = history.filter(h => h.mangaId !== mangaId)
  filtered.unshift({ mangaId, chapterId, chapterNum })
  const trimmed = filtered.slice(0, 50)
  localStorage.setItem('otakureads_history', JSON.stringify(trimmed))
}

export const getLastRead = (mangaId: string): { chapterId: string, chapterNum: string } | null => {
  const history = getReadingHistory()
  const found = history.find(h => h.mangaId === mangaId)
  return found ? { chapterId: found.chapterId, chapterNum: found.chapterNum } : null
}