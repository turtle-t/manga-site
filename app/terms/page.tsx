import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for OtakuReads - Read our terms before using our website.',
}

export default function TermsPage() {
  return (
    <div className='page-transition'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        {/* Header */}
        <h1 className='text-4xl font-bold text-white mb-2'>Terms of Service</h1>
        <p className='text-gray-500 mb-8'>Last updated: January 1, 2025</p>

        <div className='space-y-8 text-gray-400 leading-relaxed'>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>1. Acceptance of Terms</h2>
            <p>
              By accessing and using OtakuReads (otakureads.online), you accept and
              agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>2. Use of Service</h2>
            <p className='mb-3'>By using OtakuReads you agree to:</p>
            <ul className='list-disc list-inside space-y-2'>
              <li>Use the website for personal, non-commercial purposes only</li>
              <li>Not reproduce or redistribute any content from our website</li>
              <li>Not use any automated tools to scrape or download content</li>
              <li>Not attempt to hack or disrupt our services</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>3. Content</h2>
            <p>
              All manga content displayed on OtakuReads is provided through the
              MangaDex API. We do not host, store, or own any manga content.
              All manga titles, characters, and stories are the property of their
              respective authors and publishers. We respect intellectual property
              rights and comply with DMCA regulations.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>4. Disclaimer of Warranties</h2>
            <p>
              OtakuReads is provided on an as-is and as-available basis. We make
              no warranties, expressed or implied, regarding the reliability,
              accuracy, or availability of our service. We do not guarantee that
              the website will be available at all times or that it will be
              error-free.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>5. Limitation of Liability</h2>
            <p>
              OtakuReads shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or
              inability to use our service. This includes but is not limited to
              loss of data, loss of profits, or any other damages.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>6. Third Party Services</h2>
            <p>
              Our website uses third party services including Google AdSense for
              advertising and MangaDex API for content. These services have their
              own terms of service and privacy policies which you should review
              separately.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will
              be effective immediately upon posting to the website. Your continued
              use of OtakuReads after any changes constitutes your acceptance of
              the new terms.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>8. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with
              applicable laws. Any disputes arising from these terms shall be
              resolved through appropriate legal channels.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>9. Contact Us</h2>
            <p>
              If you have any questions about these terms, please contact us at{' '}
              <a
                href='mailto:contact@otakureads.online'
                className='text-purple-400 hover:text-purple-300'
              >
                contact@otakureads.online
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}