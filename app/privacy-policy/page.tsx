import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for OtakuReads - Read our privacy policy to understand how we handle your data.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className='page-transition'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        {/* Header */}
        <h1 className='text-4xl font-bold text-white mb-2'>Privacy Policy</h1>
        <p className='text-gray-500 mb-8'>Last updated: January 1, 2025</p>

        <div className='space-y-8 text-gray-400 leading-relaxed'>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>1. Introduction</h2>
            <p>
              Welcome to OtakuReads. We respect your privacy and are committed to
              protecting your personal data. This privacy policy explains how we
              collect, use, and safeguard your information when you visit our website
              otakureads.online.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>2. Information We Collect</h2>
            <p className='mb-3'>We may collect the following types of information:</p>
            <ul className='list-disc list-inside space-y-2'>
              <li>Usage data such as pages visited and time spent on site</li>
              <li>Device information such as browser type and operating system</li>
              <li>IP address for analytics and security purposes</li>
              <li>Cookies and local storage data for site functionality</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>3. How We Use Your Information</h2>
            <p className='mb-3'>We use collected information to:</p>
            <ul className='list-disc list-inside space-y-2'>
              <li>Improve our website and user experience</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Display relevant advertisements through Google AdSense</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>4. Google AdSense</h2>
            <p>
              We use Google AdSense to display advertisements on our website.
              Google AdSense uses cookies to serve ads based on your prior visits
              to our website or other websites. You may opt out of personalized
              advertising by visiting{' '}
              <a
                href='https://www.google.com/settings/ads'
                target='_blank'
                rel='noopener noreferrer'
                className='text-purple-400 hover:text-purple-300'
              >
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>5. Cookies</h2>
            <p>
              Our website uses cookies and local storage to enhance your browsing
              experience. This includes saving your reading history and bookmarks
              locally on your device. No personal data is stored on our servers.
              You can clear your browser cookies and local storage at any time
              through your browser settings.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>6. Third Party Links</h2>
            <p>
              Our website may contain links to third party websites. We are not
              responsible for the privacy practices of these websites. We encourage
              you to read the privacy policy of every website you visit.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>7. Children Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you are a parent and believe your child has provided us with
              personal information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>8. Changes to This Policy</h2>
            <p>
              We may update our privacy policy from time to time. We will notify
              you of any changes by posting the new privacy policy on this page.
              You are advised to review this policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-3'>9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact
              us at{' '}
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