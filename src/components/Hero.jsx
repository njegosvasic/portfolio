// src/components/Hero.jsx
import Image from "next/image";
import profileImage from "../assets/ja.png";

export default function Hero() {
  return (
    <section
      className="px-4 md:px-6 py-10 md:py-20 relative"
      style={{ "--heroSquare": "clamp(280px, 32vw, 480px)" }}
    >
      <div className="mx-auto max-w-[1200px] grid gap-10 lg:gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1
            className={`
              text-3xl sm:text-4xl md:text-4xl font-extrabold
              tracking-tight leading-snug sm:leading-tight md:leading-[1.1]
              bg-clip-text text-transparent
            `}
            style={{
              backgroundImage: `linear-gradient(to right, var(--hero-grad1), var(--hero-grad2))`,
            }}
          >
            Hey, I&apos;m Njegoš <br />
            <span className="text-[var(--foreground)]">
              UX/UI Designer
            </span>{" "}
            <br />
            <span className="text-[var(--foreground)]">
              Front-end Developer
            </span>
          </h1>

          <p className="max-w-lg mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-[var(--foreground)]/80">
            I craft modern, user-friendly designs and build responsive
            front-ends that feel fast and natural. My passion is turning complex
            problems into simple, beautiful solutions.
          </p>

          <a
            href="#projects"
            className="w-fit inline-block px-6 py-3 rounded-full font-medium text-base shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300 mx-auto lg:mx-0"
            style={{
              background: "var(--cta-grad)",
              color: "#fff",
            }}
          >
            See my work
          </a>
        </div>

        <div
          className="relative rounded-[2rem] overflow-hidden mx-auto lg:justify-self-end shadow-xl"
          style={{
            width: "var(--heroSquare)",
            height: "var(--heroSquare)",
            background: "var(--hero-base)",
          }}
        >
          <Image
            src={profileImage}
            alt="Njegoš Vasić"
            fill
            className="object-cover rounded-[2rem]"
            priority
            sizes="(min-width:1024px) 33vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
