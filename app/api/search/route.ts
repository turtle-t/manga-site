import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q') || ''
  const limit = searchParams.get('limit') || '6'

  try {
    const params = new URLSearchParams({
      title: query,
      limit: limit,
      'contentRating[]': 'safe',
      'includes[]': 'cover_art',
    })

    const res = await fetch(
      `https://api.mangadex.org/manga?${params}`,
      { next: { revalidate: 60 } }
    )

    const data = await res.json()

    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch' },
      { status: 500 }
    )
  }
}