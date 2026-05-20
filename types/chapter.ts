export interface Chapter {
  id: string
  attributes: {
    title: string | null
    volume: string | null
    chapter: string | null
    pages: number
    translatedLanguage: string
    publishAt: string
    updatedAt: string
    externalUrl: string | null
  }
  relationships: ChapterRelationship[]
}

export interface ChapterRelationship {
  id: string
  type: string
  attributes?: {
    name?: string
  }
}

export interface ChapterListResponse {
  result: string
  data: Chapter[]
  total: number
  limit: number
  offset: number
}

export interface ChapterPagesResponse {
  baseUrl: string
  chapter: {
    hash: string
    data: string[]
    dataSaver: string[]
  }
}

export interface ChapterSearchParams {
  manga?: string
  limit?: number
  offset?: number
  translatedLanguage?: string[]
  order?: {
    chapter?: 'asc' | 'desc'
    updatedAt?: 'asc' | 'desc'
  }
}