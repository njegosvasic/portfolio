// src/components/AboutSection.jsx
import Image from "next/image";
import profileImage from "../assets/ja.png";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 md:px-4 py-16">
      <h2 className="text-6xl md:text-8xl font-bold uppercase text-center mb-12 text-[var(--foreground)]">
        About
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

          <div
            className="
              absolute inset-0 rounded-3xl
              bg-black/70 text-white
              flex flex-col justify-center
              space-y-[clamp(8px,1.6vw,14px)]
            "
            style={{
              padding: "clamp(12px, 2.5vw, 24px)",
            }}
          >
            <h3
              className="font-semibold"
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                lineHeight: "1.2",
              }}
            >
              About me
            </h3>

            <p
              style={{
                fontSize: "clamp(12px, 1.6vw, 14px)",
                lineHeight: "1.45",
              }}
              className="opacity-95"
            >
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

            <p
              style={{
                fontSize: "clamp(12px, 1.5vw, 14px)",
                lineHeight: "1.45",
              }}
              className="opacity-95"
            >
              Outside of design, I try to keep things balanced. I like unwinding
              with a good video game, hitting the gym to stay active,
              experimenting with cooking (sometimes successfully), and getting
              lost in a book when I can.
            </p>

            <p
              style={{
                fontSize: "clamp(12px, 1.6vw, 14px)",
                lineHeight: "1.45",
              }}
              className="opacity-95"
            >
              These days, I’m focused on designing clean, intuitive digital
              products; and since I also enjoy front-end development, I love
              bringing those designs to life. I'm always learning and exploring
              new tools and trends to keep growing and improving.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 content-center">
          <div
            className="aspect-square rounded-3xl flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: "var(--about-green)" }}
          >
            {/* broj */}
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              2+
            </span>
            {/* labela */}
            <span className="mt-2 text-sm sm:text-base lg:text-lg">
              Years Experience
            </span>
          </div>

          <div
            className="aspect-square rounded-3xl flex flex-col items-center justify-center text-white"
            style={{ backgroundColor: "var(--about-yellow)" }}
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
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
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
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
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
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
