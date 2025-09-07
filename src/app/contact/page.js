'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <section className={`py-12 ${!isSubmitted ? 'flex items-center justify-center min-h-[80vh]' : ''}`}>
      <div className="w-full max-w-2xl space-y-6 rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-slate-900 p-8">
        {!isSubmitted && (
          <>
            <h1
              className="text-4xl font-extrabold text-center bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, var(--hero-grad1), var(--hero-grad2))' }}
            >
              Let’s Talk
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center text-base">
              Please fill out the form below, and I’ll get back to you as quickly as possible.
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
                headers: { Accept: 'application/json' },
              })
                .then((res) => res.json())
                .then(() => setIsSubmitted(true))
                .catch(console.error)
            }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
                Your Name (Optional)
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--hero-grad1)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--hero-grad1)]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
                Your Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message here"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--hero-grad1)]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold text-white transition duration-300 shadow-lg bg-gradient-to-r from-[var(--hero-grad1)] to-[var(--hero-grad2)] hover:opacity-90 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center py-16">
            <CheckCircle2 className="mx-auto w-14 h-14 text-green-500 mb-4" />
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">Thank you!</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Got your message – I’ll be in touch shortly.</p>
          </div>
        )}
      </div>

      {/* Fix za Chrome autofill u light modu */}
      <style jsx>{`
        input:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
          -webkit-text-fill-color: #111827 !important;
          caret-color: #111827;
        }
        :global(.dark) input:-webkit-autofill,
        :global(.dark) textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px #0f172a inset !important;
          -webkit-text-fill-color: #f9fafb !important;
          caret-color: #f9fafb;
        }
      `}</style>
    </section>
  )
}
