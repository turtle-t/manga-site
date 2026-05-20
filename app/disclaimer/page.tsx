import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for OtakuReads - Read our disclaimer before using our website.',
}

export default function DisclaimerPage() {
  return (
    <div className='page-transition'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        {/* Header */}
        <h1 className='text-4xl font-bold text-white mb-2'>Disclaimer</h1>
        <p className='text-gray-500 mb-8'>Last updated: January 1, 2025</p>

        <div className='space-y-8 text-gray-400 leading-relaxed'>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>General Disclaimer</h2>
            <p>
              The information provided on OtakuReads (otakureads.online) is for
              general informational and entertainment purposes only. We make no
              representations or warranties of any kind, express or implied,
              about the completeness, accuracy, or reliability of the content
              on our website.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Content Disclaimer</h2>
            <p>
              All manga content displayed on OtakuReads is sourced through the
              MangaDex API. We do not own, host, or claim any rights over the
              manga content displayed on our website. All manga titles, artwork,
              characters, and stories are the intellectual property of their
              respective creators, authors, and publishers.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Third Party Content</h2>
            <p>
              Our website displays content from third party sources including
              MangaDex. We are not responsible for the accuracy, completeness,
              or availability of this third party content. The views and opinions
              expressed in manga content do not necessarily reflect the views
              of OtakuReads.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Advertising Disclaimer</h2>
            <p>
              OtakuReads uses Google AdSense to display advertisements. These
              advertisements are provided by Google and may be targeted based
              on your browsing history. We are not responsible for the content
              of these advertisements. The display of advertisements does not
              constitute endorsement of the advertised products or services.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Availability Disclaimer</h2>
            <p>
              We do not guarantee that our website will be available at all times.
              We reserve the right to modify, suspend, or discontinue any part
              of our service at any time without notice. We shall not be liable
              for any loss or damage caused by the unavailability of our service.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>External Links Disclaimer</h2>
            <p>
              Our website may contain links to external websites. These links are
              provided for your convenience only. We have no control over the
              content of those websites and accept no responsibility for them
              or for any loss or damage that may arise from your use of them.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>Contact Us</h2>
            <p>
                <a>
              If you have any questions about this disclaimer, please contact
              us at{' '}
              
                href='mailto:contact@otakureads.online'
                className='text-purple-400 hover:text-purple-300'
             
                contact@otakureads.online
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}