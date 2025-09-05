// src/components/Work.jsx
import Image from 'next/image'
import Link from 'next/link'
import mywork1 from '../assets/mywork1.png'
import mywork2 from '../assets/mywork2.png'
import mywork3 from '../assets/mywork3.png'
import mywork4 from '../assets/mywork4.png'
import mywork5 from '../assets/mywork5.png'
import mywork6 from '../assets/mywork6.png'

export default function Work() {
  return (
    <section id="projects" className="px-4 md:px-24 py-16">
      <h2
        className="text-6xl md:text-8xl font-bold uppercase text-center mb-12"
        style={{ WebkitTextStroke: '1px #000', color: 'transparent' }}
      >
        Work
      </h2>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="flex flex-col gap-2 items-center">
            <p
              className="text-xl sm:text-2xl font-semibold uppercase"
              style={{ WebkitTextStroke: '0.5px #000', color: 'transparent' }}
            >
              Role: UX/UI Design
            </p>
            <Link
              href="/habitwave"
              className="rounded-3xl overflow-hidden shadow-md border border-gray-200 dark:border-none"
            >
              <Image
                src={mywork1}
                alt="Project 1"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </Link>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col gap-2 items-center">
            <p
              className="text-xl sm:text-2xl font-semibold uppercase"
              style={{ WebkitTextStroke: '0.5px #000', color: 'transparent' }}
            >
              Role: Front-end developer
            </p>
            <a
              href="https://dexsolutions.biz"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl overflow-hidden shadow-md border border-gray-200 dark:border-none"
            >
              <Image
                src={mywork2}
                alt="Project 2"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </a>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col gap-2 items-center">
            <p
              className="text-xl sm:text-2xl font-semibold uppercase"
              style={{ WebkitTextStroke: '0.5px #000', color: 'transparent' }}
            >
              Role: UX/UI Design
            </p>
            <a
              href="https://codewaveteam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl overflow-hidden shadow-md border border-gray-200 dark:border-none"
            >
              <Image
                src={mywork3}
                alt="Project 3"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </a>
          </div>

          {/* Project 4 */}
          {/* <div className="flex flex-col gap-2 items-center">
            <p
              className="text-xl sm:text-2xl font-semibold uppercase"
              style={{ WebkitTextStroke: '0.5px #000', color: 'transparent' }}
            >
              Role: Front-end developer
            </p>
            <a
              href="https://miconsultancy.io"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl overflow-hidden shadow-md border border-gray-200 dark:border-none"
            >
              <Image
                src={mywork4}
                alt="Project 4"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </a>
          </div> */}

          {/* Project 5 */}
          <div className="flex flex-col gap-2 items-center">
            <p
              className="text-xl sm:text-2xl font-semibold uppercase"
              style={{ WebkitTextStroke: '0.5px #000', color: 'transparent' }}
            >
              Role: UX/UI Design
            </p>
            <div className="rounded-3xl overflow-hidden shadow-md border border-gray-200 dark:border-none">
              <Image
                src={mywork5}
                alt="Project 5"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>

          {/* Project 6 */}
          {/* <div className="flex flex-col gap-2 items-center">
            <p
              className="text-xl sm:text-2xl font-semibold uppercase"
              style={{ WebkitTextStroke: '0.5px #000', color: 'transparent' }}
            >
              Role: Front-end developer
            </p>
            <a
              href="https://rentacaruzice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl overflow-hidden shadow-md border border-gray-200 dark:border-none"
            >
              <Image
                src={mywork6}
                alt="Project 6"
                className="w-full h-auto object-cover"
                width={800}
                height={600}
              />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
