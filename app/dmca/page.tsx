import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DMCA Policy',
  description: 'DMCA Policy for OtakuReads - Learn how we handle copyright complaints.',
}

export default function DmcaPage() {
  return (
    <div className='page-transition'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        {/* Header */}
        <h1 className='text-4xl font-bold text-white mb-2'>DMCA Policy</h1>
        <p className='text-gray-500 mb-8'>Last updated: January 1, 2025</p>

        <div className='space-y-8 text-gray-400 leading-relaxed'>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Overview</h2>
            <p>
              OtakuReads respects the intellectual property rights of others and
              expects our users to do the same. In accordance with the Digital
              Millennium Copyright Act (DMCA), we will respond to legitimate
              notices of alleged copyright infringement.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Our Content Policy</h2>
            <p>
                <a>
              All manga content displayed on OtakuReads is sourced through the
              MangaDex API. We do not host, upload, or store any manga files on
              our servers. We are simply a frontend interface that displays
              content provided by MangaDex. For content removal requests related
              to MangaDex content, please also contact MangaDex directly at{' '}
              
                href='https://mangadex.org/about'
                target='_blank'
                rel='noopener noreferrer'
                className='text-purple-400 hover:text-purple-300'
             
                mangadex.org
              </a>.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Filing a DMCA Notice</h2>
            <p className='mb-3'>
              If you believe that your copyrighted work has been infringed upon,
              please send a DMCA notice to us containing the following information:
            </p>
            <ul className='list-disc list-inside space-y-2'>
              <li>Your full legal name and contact information</li>
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>The specific URL or location of the allegedly infringing content</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement that the information in your notice is accurate</li>
              <li>Your electronic or physical signature</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>How to Submit</h2>
            <p>
              Please send your DMCA notice to our designated email address:
            </p>
            <div className='bg-gray-800 rounded-lg p-4 mt-3'>
              <p className='text-white font-medium'>DMCA Agent</p>
              <p className='text-purple-400'>dmca@otakureads.online</p>
            </div>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Our Response</h2>
            <p>
              Upon receiving a valid DMCA notice, we will:
            </p>
            <ul className='list-disc list-inside space-y-2 mt-3'>
              <li>Review the complaint within 48-72 hours</li>
              <li>Remove or disable access to the allegedly infringing content</li>
              <li>Notify the affected user if applicable</li>
              <li>Forward the complaint to MangaDex if the content is hosted there</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Counter Notice</h2>
            <p>
              If you believe your content was removed by mistake, you may file a
              counter notice. Counter notices must include your contact information,
              identification of the removed content, a statement under penalty of
              perjury that you have a good faith belief the content was removed
              by mistake, and your consent to jurisdiction of your local federal
              court.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Repeat Infringers</h2>
            <p>
              OtakuReads will terminate access of users who are repeat infringers
              of intellectual property rights in appropriate circumstances.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}