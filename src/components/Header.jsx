import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="w-full px-20 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <Image src={logo} alt="Logo" width={48} height={48} className="cursor-pointer" />
      </Link>

      {/* Navigacija */}
      <nav className="flex items-center space-x-6">
        <Link href="/" className="text-base md:text-lg hover:text-gray-900">
          Home
        </Link>
        <Link href="/projects" className="text-base md:text-lg hover:text-gray-900">
          Work
        </Link>
        <Link href="/about" className="text-base md:text-lg hover:text-gray-900">
          About
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center bg-black text-white px-5 py-2 rounded-full text-base md:text-lg hover:bg-gray-800"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
