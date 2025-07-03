import Image from 'next/image'
import profileImage from '../assets/ja.png'

export default function Hero() {
  return (
    <section className="px-8 py-8 flex flex-col md:flex-row md:items-stretch gap-8">
      {/* Leva kolona: 2.5/4 širine, gradientna pozadina */}
      <div
        className="w-full md:w-[62.5%] rounded-3xl p-10 flex flex-col justify-center space-y-8 shadow-lg"
        style={{
          background: '#eaebec',
          backgroundImage: 'radial-gradient(at 55% 55%, #68eed3 0px, transparent 35%), radial-gradient(at 65% 65%, #00cc4b 0px, transparent 35%)',
        }}
      >
        {/* Naslov i opis */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hey,<br />
            I'm Njegoš, a UX/UI designer<br />
            and front-end developer
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Creating fresh, user-friendly designs and snappy, responsive front-ends.  
            I love turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        {/* Dugme */}
        <a
          href="#projects"
          className="w-max inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
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
  )
}
