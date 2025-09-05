import Image from "next/image";
import profileImage from "../assets/ja.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-8 py-8 flex flex-col md:flex-row md:items-stretch gap-8"
    >
      {/* Leva kolona: 2.5/4 širine, gradientna pozadina */}
      <div
        className="w-full md:w-[62.5%] rounded-3xl p-10 flex flex-col justify-center space-y-8 shadow-lg dark:shadow-none transition-colors"
        style={{
          background: `
      radial-gradient(at 55% 55%, var(--hero-grad1) 0, transparent 35%),
      radial-gradient(at 65% 65%, var(--hero-grad2) 0, transparent 35%),
      var(--hero-base)
    `,
        }}
      >
        {/* Naslov i opis */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--foreground)]">
            Hey,
            <br />
            I'm Njegoš, a UX/UI designer
            <br />
            and front-end developer
          </h1>
          <p className="text-lg leading-relaxed text-[var(--foreground)]">
            Creating fresh, user-friendly designs and snappy, responsive
            front-ends. I love turning complex problems into simple, beautiful
            solutions.
          </p>
        </div>

        {/* Dugme – crno u light, belo u dark */}
        <a
          href="#projects"
          className="w-max inline-block px-6 py-3 rounded-full font-medium transition-opacity duration-200 hover:opacity-80"
          style={{
            backgroundColor: "var(--cta-bg)",
            color: "var(--cta-fg)",
          }}
        >
          See my work
        </a>
      </div>

      {/* Desna kolona: 1.5/4 širine, slika sa zaobljenim ivicama */}
      <div className="w-full md:w-[37.5%] rounded-3xl overflow-hidden shadow-lg">
        <Image
          src={profileImage}
          alt="Njegoš Vasić"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
