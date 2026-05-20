'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { searchManga, getMangaTitle, getCoverUrl, getMangaCover } from '@/lib/mangadex'
import { Manga } from '@/types/manga'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Manga[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Fetch suggestions as user types
  useEffect(() => {
    if (query.trim().length < 2) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    // Debounce API call by 400ms
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(async () => {
      setIsLoading(true)
      try {
        const data = await searchManga({
          title: query.trim(),
          limit: 6,
          contentRating: ['safe']
        })
        setSuggestions(data.data)
        setShowSuggestions(true)
      } catch (err) {
        console.error('Search error:', err)
      } finally {
        setIsLoading(false)
      }
    }, 400)

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [query])

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setQuery('')
      setShowSuggestions(false)
      inputRef.current?.blur()
    }
  }

  const handleSuggestionClick = (manga: Manga) => {
    router.push(`/manga/${manga.id}`)
    setQuery('')
    setShowSuggestions(false)
  }

  return (
    <div ref={containerRef} className='relative w-full'>
      <form onSubmit={handleSearch}>
        <div className={`flex items-center bg-gray-800 rounded-lg border ${isFocused ? 'border-purple-500' : 'border-gray-700'} transition-colors`}>

          {/* Search Icon */}
          <div className='pl-3 text-gray-400'>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => {
              setIsFocused(true)
              if (suggestions.length > 0) setShowSuggestions(true)
            }}
            onBlur={() => setIsFocused(false)}
            placeholder='Search manga...'
            className='w-full bg-transparent text-white px-3 py-2 outline-none text-sm placeholder-gray-500'
          />

          {/* Loading Spinner */}
          {isLoading && (
            <div className='pr-2'>
              <div className='w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full animate-spin' />
            </div>
          )}

          {/* Clear Button */}
          {query && !isLoading && (
            <button
              type='button'
              onClick={() => {
                setQuery('')
                setSuggestions([])
                setShowSuggestions(false)
              }}
              className='pr-2 text-gray-400 hover:text-white transition-colors'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          )}

          {/* Search Button */}
          <button
            type='submit'
            className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-lg text-sm transition-colors'
          >
            Search
          </button>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className='absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden z-50 shadow-xl'>
          {suggestions.map((manga) => {
            const coverFileName = getMangaCover(manga)
            const coverUrl = coverFileName
              ? getCoverUrl(manga.id, coverFileName, '256')
              : '/images/placeholder.jpg'

            return (
              <button
                key={manga.id}
                onClick={() => handleSuggestionClick(manga)}
                className='w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors text-left'
              >
                {/* Cover */}
                <div className='relative w-8 h-12 shrink-0 rounded overflow-hidden'>
                  <Image
                    src={coverUrl}
                    alt={getMangaTitle(manga)}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Info */}
                <div className='flex flex-col flex-1 min-w-0'>
                  <span className='text-white text-sm font-medium truncate'>
                    {getMangaTitle(manga)}
                  </span>
                  <span className='text-gray-400 text-xs capitalize'>
                    {manga.attributes.status}
                  </span>
                </div>
              </button>
            )
          })}

          {/* View All Results */}
          <button
            onClick={handleSearch}
            className='w-full px-4 py-3 text-purple-400 hover:bg-gray-700 text-sm transition-colors text-center border-t border-gray-700'
          >
            View all results for "{query}"
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchBar