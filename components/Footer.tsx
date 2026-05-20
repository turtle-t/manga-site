import Link from 'next/link'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-gray-900 border-t border-gray-800 mt-auto'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>

          {/* Logo and Description */}
          <div className='col-span-1 md:col-span-2'>
            <Link href='/' className='flex items-center gap-2 mb-4'>
              <span className='text-2xl font-bold text-purple-500'>Otaku</span>
              <span className='text-2xl font-bold text-white'>Reads</span>
            </Link>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Read manga online for free on OtakuReads.
              Thousands of manga in HD quality, updated daily!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Quick Links</h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href='/' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/manga' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  Browse Manga
                </Link>
              </li>
              <li>
                <Link href='/manga?sort=latest' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  Latest Updates
                </Link>
              </li>
              <li>
                <Link href='/manga?sort=popular' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  Popular Manga
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Legal</h3>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href='/about' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/contact' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href='/privacy-policy' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href='/terms' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href='/dmca' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  DMCA
                </Link>
              </li>
              <li>
                <Link href='/disclaimer' className='text-gray-400 hover:text-purple-400 text-sm transition-colors'>
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4'>
          <p className='text-gray-500 text-sm'>
            {'©'} {year} OtakuReads. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  )
}

export default Footer