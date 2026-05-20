const SITE_NAME = 'OtakuReads'
const SITE_URL = 'https://otakureads.online'

interface OpenGraphProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'book'
}

export const OpenGraph = ({
  title = SITE_NAME,
  description = 'Read manga online for free on OtakuReads!',
  image,
  url = SITE_URL,
  type = 'website'
}: OpenGraphProps) => {
  return (
    <>
      {/* Open Graph */}
      <meta property='og:type' content={type} />
      <meta property='og:site_name' content={SITE_NAME} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      {image && <meta property='og:image' content={image} />}

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {image && <meta name='twitter:image' content={image} />}

      {/* WhatsApp & Telegram */}
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
    </>
  )
}

export default OpenGraph