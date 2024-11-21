// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Name */}
        <div className="text-2xl font-bold">
            <div className="text-2xl font-bold">MyPortfolio</div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#header" className="hover:text-orange-400">
              Home
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-orange-400">
              Work
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-orange-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-orange-400">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
