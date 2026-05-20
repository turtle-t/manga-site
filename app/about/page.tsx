import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about OtakuReads - your free manga reading destination!',
}

export default function AboutPage() {
  return (
    <div className='page-transition'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        {/* Header */}
        <h1 className='text-4xl font-bold text-white mb-8'>About Us</h1>

        {/* Content */}
        <div className='prose prose-invert max-w-none space-y-6 text-gray-400 leading-relaxed'>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Who We Are</h2>
            <p>
              Welcome to OtakuReads — your ultimate destination for reading manga online for free!
              We are a passionate team of manga lovers dedicated to bringing you the best manga
              reading experience on the web.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Our Mission</h2>
            <p>
              Our mission is simple — make manga accessible to everyone, anywhere, anytime.
              We believe that great stories should be available to all readers regardless of
              their location or budget.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>What We Offer</h2>
            <ul className='list-disc list-inside space-y-2'>
              <li>Thousands of manga titles across all genres</li>
              <li>HD quality manga pages</li>
              <li>Daily updates with the latest chapters</li>
              <li>Fast and smooth reading experience</li>
              <li>Mobile friendly design</li>
              <li>Completely free to read</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Our Content</h2>
            <p>
              All manga content on OtakuReads is provided through the MangaDex API.
              We do not host any manga files on our servers. All content belongs to
              their respective authors and publishers.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Contact Us</h2>
            <p>
              Have questions or suggestions? We would love to hear from you!
              Visit our{' '}
              <a href='/contact' className='text-purple-400 hover:text-purple-300'>
                Contact page
              </a>{' '}
              to get in touch with us.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}