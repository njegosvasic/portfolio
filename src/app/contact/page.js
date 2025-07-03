'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <section className={`py-8 ${!isSubmitted ? 'flex items-center justify-center min-h-[80vh]' : ''}`}>
      <div className="w-full max-w-2xl space-y-6">
        {!isSubmitted && (
          <>
            <h1 className="text-4xl font-bold text-blue-600 uppercase text-center">
              Let&rsquo;s Talk
            </h1>
            <p className="text-gray-700 text-center text-base">
              Please fill out the form below, and I&rsquo;ll get back to you as quickly as possible.
            </p>
          </>
        )}

        {!isSubmitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target
              const data = new FormData(form)

              fetch('https://formspree.io/f/xjkrzopg', {
                method: 'POST',
                body: data,
                headers: {
                  Accept: 'application/json',
                },
              })
                .then((res) => res.json())
                .then(() => setIsSubmitted(true))
                .catch((err) => console.error(err))
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Name (Optional)
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message here"
                rows={5}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold transition duration-200 hover:bg-blue-700 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-3xl font-semibold text-blue-600">Thank you!</h2>
            <p className="text-gray-700 mt-2">Got your message – I&rsquo;ll be in touch shortly.</p>
          </div>
        )}
      </div>
    </section>
  )
}
