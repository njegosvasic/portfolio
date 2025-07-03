// src/components/AboutSection.jsx
import Image from "next/image";
import profileImage from "../assets/ja.png";

export default function AboutSection() {
  return (
    <section id="about" className="px-8 py-16">
      <h2
        className="text-6xl md:text-8xl font-bold uppercase text-center mb-12"
        style={{ WebkitTextStroke: "1px #000", color: "transparent" }}
      >
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: image with overlayed text */}
        <div className="relative h-full w-full rounded-3xl overflow-hidden">
          <Image
            src={profileImage}
            alt="Njegoš Vasić"
            layout="responsive"
            width={800}
            height={1000}
            className="rounded-3xl object-cover"
            priority
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 text-white p-8 flex flex-col justify-center space-y-4 rounded-3xl">
            <h3 className="text-3xl font-semibold">About me</h3>
            <p className="text-[14px] sm:text-base leading-relaxed">
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

            <p className="text-[14px] sm:text-base leading-relaxed">
              Outside of design, I try to keep things balanced. I like unwinding
              with a good video game, hitting the gym to stay active,
              experimenting with cooking (sometimes successfully), and getting
              lost in a book when I can.
            </p>

            <p className="text-[14px] sm:text-base leading-relaxed">
              These days, I’m focused on designing clean, intuitive digital
              products — and since I also enjoy front-end development, I love
              bringing those designs to life. I'm always learning and exploring
              new tools and trends to keep growing and improving.
            </p>
          </div>
        </div>

        {/* Right: 2x2 stats */}
        <div className="grid grid-cols-2 gap-4 content-center">
          <div className="aspect-square bg-green-500 rounded-3xl flex flex-col items-center justify-center text-white">
            <span className="text-4xl font-bold">2+</span>
            <span className="mt-2 text-base">Years Experience</span>
          </div>
          <div className="aspect-square bg-yellow-400 rounded-3xl flex flex-col items-center justify-center text-white">
            <span className="text-4xl font-bold">10+</span>
            <span className="mt-2 text-base">Happy Clients</span>
          </div>
          <div className="aspect-square bg-red-500 rounded-3xl flex flex-col items-center justify-center text-white">
            <span className="text-4xl font-bold">10+</span>
            <span className="mt-2 text-base">Successful Projects</span>
          </div>
          <div className="aspect-square bg-blue-500 rounded-3xl flex flex-col items-center justify-center text-white">
            <span className="text-4xl font-bold">100%</span>
            <span className="mt-2 text-base">Passion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
