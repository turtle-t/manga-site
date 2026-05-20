import { Manga } from '@/types/manga'
import { getMangaTitle, getCoverUrl, getMangaCover } from '@/lib/mangadex'
import { getMangaDescription } from '@/lib/helpers'

const SITE_URL = 'https://otakureads.online'
const SITE_NAME = 'OtakuReads'

// Website JSON-LD
export const WebsiteJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Read manga online for free on OtakuReads!',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// Manga JSON-LD
export const MangaJsonLd = ({ manga }: { manga: Manga }) => {
  const title = getMangaTitle(manga)
  const description = getMangaDescription(manga)
  const coverFileName = getMangaCover(manga)
  const coverUrl = coverFileName
    ? getCoverUrl(manga.id, coverFileName, '512')
    : undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: title,
    description: description.slice(0, 200),
    url: `${SITE_URL}/manga/${manga.id}`,
    image: coverUrl,
    author: {
      '@type': 'Person',
      name: manga.relationships.find(r => r.type === 'author')?.attributes?.name || 'Unknown'
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME
    },
    genre: manga.attributes.tags
      .filter(tag => tag.attributes.group === 'genre')
      .map(tag => tag.attributes.name.en)
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

// BreadCrumb JSON-LD
export const BreadcrumbJsonLd = ({ items }: {
  items: { name: string, url: string }[]
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}