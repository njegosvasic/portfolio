// src/components/AboutSection.jsx
import Image from "next/image";
import profileImage from "../assets/ja.png";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-24 py-16">
      <h2
        className="text-6xl md:text-8xl font-bold uppercase text-center mb-12"
        style={{ WebkitTextStroke: "1px #000", color: "transparent" }}
      >
        About
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: image with overlayed text */}
        <div className="relative w-full rounded-3xl overflow-hidden">
          <Image
            src={profileImage}
            alt="Njegoš Vasić"
            layout="responsive"
            width={800}
            height={1000}
            className="rounded-3xl object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70 text-white p-6 sm:p-8 flex flex-col justify-center space-y-4 rounded-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold">About me</h3>
            <p className="text-sm sm:text-base leading-relaxed">
              My journey into UX/UI design started back in my IT student days,
              when I realized how much I enjoyed thinking about how people
              interact with technology. Over time, that interest grew into a
              real passion, especially after diving into the{" "}
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/8AGDFLDYHMVN?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-300 transition"
              >
                Google UX Design Certificate
              </a>
              , where I honed my skills in creating interfaces that just feel
              right to use.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              Outside of design, I try to keep things balanced. I like unwinding
              with a good video game, hitting the gym to stay active,
              experimenting with cooking (sometimes successfully), and getting
              lost in a book when I can.
            </p>

            <p className="text-sm sm:text-base leading-relaxed">
              These days, I’m focused on designing clean, intuitive digital
              products — and since I also enjoy front-end development, I love
              bringing those designs to life. I'm always learning and exploring
              new tools and trends to keep growing and improving.
            </p>
          </div>
        </div>

        {/* Right: 2x2 stats */}
        <div className="grid grid-cols-2 gap-4 content-center">
          <div
            className="aspect-square rounded-3xl flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: "var(--about-green)" }}
          >
            <span className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              2+
            </span>
            <span className="mt-2 text-sm sm:text-base lg:text-lg">
              Years Experience
            </span>
          </div>

          <div
            className="aspect-square rounded-3xl flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: "var(--about-yellow)" }}
          >
            <span className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              10+
            </span>
            <span className="mt-2 text-sm sm:text-base lg:text-lg">
              Happy Clients
            </span>
          </div>

          <div
            className="aspect-square rounded-3xl flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: "var(--about-red)" }}
          >
            <span className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              10+
            </span>
            <span className="mt-2 text-sm sm:text-base lg:text-lg">
              Successful Projects
            </span>
          </div>

          <div
            className="aspect-square rounded-3xl flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: "var(--about-blue)" }}
          >
            <span className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              100%
            </span>
            <span className="mt-2 text-sm sm:text-base lg:text-lg">
              Passion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
