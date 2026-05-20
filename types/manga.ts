export interface MangaTitle {
  en?: string
  ja?: string
  [key: string]: string | undefined
}

export interface MangaTag {
  id: string
  attributes: {
    name: {
      en: string
    }
    group: string
  }
}

export interface MangaRelationship {
  id: string
  type: string
  attributes?: {
    fileName?: string
    name?: string
  }
}

export interface Manga {
  id: string
  attributes: {
    title: MangaTitle
    description: { en?: string }
    status: string
    year: number | null
    contentRating: string
    tags: MangaTag[]
    lastChapter: string | null
    lastVolume: string | null
  }
  relationships: MangaRelationship[]
}

export interface MangaListResponse {
  result: string
  data: Manga[]
  total: number
  limit: number
  offset: number
}

export interface MangaDetailResponse {
  result: string
  data: Manga
}

export interface CoverArt {
  id: string
  attributes: {
    fileName: string
    volume: string | null
  }
}