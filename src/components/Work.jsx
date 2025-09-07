// src/components/Work.jsx
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import mywork1 from "../assets/mywork1.png";
import mywork2 from "../assets/mywork2.png";
import mywork3 from "../assets/mywork3.png";
import mywork5 from "../assets/mywork5.png";

const projects = [
  {
    id: 1,
    role: "Role: UX/UI Design",
    link: "/habitwave",
    external: false,
    image: mywork1,
  },
  {
    id: 2,
    role: "Role: Front-end Developer",
    link: "https://dexsolutions.biz",
    external: true,
    image: mywork2,
  },
  {
    id: 3,
    role: "Role: Front-end Developer",
    link: "https://codewaveteam.com",
    external: true,
    image: mywork3,
  },
  {
    id: 5,
    role: "Role: UX/UI Design",
    link: null, // Coming soon
    external: false,
    image: mywork5,
  },
];

export default function Work() {
  return (
    <section id="projects" className="px-4 md:px-24 py-16">
      {/* Naslov sa strelicama */}
      <div className="flex items-center justify-center gap-10 mb-16">
        <div className="animate-bounce text-gray-600 dark:text-gray-300">
          <ChevronDown size={40} strokeWidth={1.2} />
        </div>

        <h2
          className="text-6xl md:text-8xl font-bold uppercase text-center"
          style={{ WebkitTextStroke: "1.5px #000", color: "transparent" }}
        >
          Work
        </h2>

        <div className="animate-bounce text-gray-600 dark:text-gray-300">
          <ChevronDown size={40} strokeWidth={1.2} />
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((proj) => {
          const Wrapper = proj.link ? (proj.external ? "a" : Link) : "div";
          const wrapperProps = proj.link
            ? proj.external
              ? { href: proj.link, target: "_blank", rel: "noopener noreferrer" }
              : { href: proj.link }
            : {};

          return (
            <div key={proj.id} className="flex flex-col gap-2 items-center">
              {/* Role tekst */}
              <p
                className="text-base sm:text-lg font-semibold uppercase"
                style={{ WebkitTextStroke: "0.5px #000", color: "transparent" }}
              >
                {proj.role}
              </p>

              {/* Card */}
              <Wrapper
                {...wrapperProps}
                className="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-200 dark:border-none"
              >
                <Image
                  src={proj.image}
                  alt={`Project ${proj.id}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  width={800}
                  height={600}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-lg font-medium">
                    {proj.link
                      ? proj.external
                        ? "Visit Project ↗"
                        : "View Case Study"
                      : "Coming Soon"}
                  </div>
                </div>
              </Wrapper>
            </div>
          );
        })}
      </div>
    </section>
  );
}
