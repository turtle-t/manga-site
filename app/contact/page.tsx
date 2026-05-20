import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with OtakuReads team!',
}

export default function ContactPage() {
  return (
    <div className='page-transition'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>

        {/* Header */}
        <h1 className='text-4xl font-bold text-white mb-8'>Contact Us</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

          {/* Contact Info */}
          <div className='space-y-6'>
            <div>
              <h2 className='text-2xl font-bold text-white mb-3'>Get In Touch</h2>
              <p className='text-gray-400 leading-relaxed'>
                Have a question, suggestion, or want to report an issue?
                We would love to hear from you! Fill out the form and
                we will get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='bg-purple-900 p-3 rounded-lg'>
                  <svg className='w-5 h-5 text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <div>
                  <p className='text-white font-medium'>Email</p>
                  <p className='text-gray-400 text-sm'>contact@otakureads.online</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <div className='bg-purple-900 p-3 rounded-lg'>
                  <svg className='w-5 h-5 text-purple-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div>
                  <p className='text-white font-medium'>Response Time</p>
                  <p className='text-gray-400 text-sm'>Within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-gray-800 rounded-xl p-6 space-y-4'>
            <div>
              <label className='text-white text-sm font-medium block mb-2'>
                Your Name
              </label>
              <input
                type='text'
                placeholder='John Doe'
                className='w-full bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500'
              />
            </div>

            <div>
              <label className='text-white text-sm font-medium block mb-2'>
                Email Address
              </label>
              <input
                type='email'
                placeholder='john@example.com'
                className='w-full bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500'
              />
            </div>

            <div>
              <label className='text-white text-sm font-medium block mb-2'>
                Subject
              </label>
              <input
                type='text'
                placeholder='How can we help?'
                className='w-full bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500'
              />
            </div>

            <div>
              <label className='text-white text-sm font-medium block mb-2'>
                Message
              </label>
              <textarea
                rows={5}
                placeholder='Write your message here...'
                className='w-full bg-gray-700 text-white px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500 resize-none'
              />
            </div>

            <button
              type='button'
              className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors'
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}