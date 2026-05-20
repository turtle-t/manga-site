'use client'

import { useEffect, useRef } from 'react'

interface AdBannerProps {
  slot: string
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
  className?: string
}

const AdBanner = ({ slot, format = 'auto', className = '' }: AdBannerProps) => {
  const adRef = useRef<HTMLModElement>(null)

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <div className={`ad-container w-full overflow-hidden ${className}`}>
      <ins
        ref={adRef}
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-XXXXXXXXXXXXXXXX'
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive='true'
      />
    </div>
  )
}

export default AdBanner