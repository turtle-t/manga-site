export interface ApiError {
  id: string
  status: number
  title: string
  detail: string
}

export interface ApiResponse<T> {
  result: 'ok' | 'error'
  response: string
  data: T
  errors?: ApiError[]
}

export type ContentRating =
  | 'safe'
  | 'suggestive'
  | 'erotica'
  | 'pornographic'

export type MangaStatus =
  | 'ongoing'
  | 'completed'
  | 'hiatus'
  | 'cancelled'

export type SortOrder =
  | 'asc'
  | 'desc'

export interface MangaSearchParams {
  title?: string
  limit?: number
  offset?: number
  contentRating?: ContentRating[]
  status?: MangaStatus[]
  order?: {
    rating?: SortOrder
    followedCount?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
  }
  includedTags?: string[]
  excludedTags?: string[]
}

export interface PaginationParams {
  limit?: number
  offset?: number
}