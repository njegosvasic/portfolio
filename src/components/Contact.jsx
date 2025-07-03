import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-12 md:px-24 bg-[linear-gradient(130deg,_#68eed3,_#00cc4b)] rounded-3xl shadow-lg"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Got ideas? I&apos;ve got time.
        </h2>
        <Link href="/contact">
          <button
            type="button"
            className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-100 hover:shadow-md transition duration-200 cursor-pointer"
          >
            Contact Me
          </button>
        </Link>
      </div>
    </section>
  );
}
