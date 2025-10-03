'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#FDFCF8] shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2">

  <Link href={"/"}>  <img src="assets/logo-innovajus.png" alt="" width={150} /></Link>
       

        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          <li className="hover:text-green-700 cursor-pointer transition-colors">
            <Link href={"#como-funciona"}> COMO FUNCIONA </Link>
          </li>
          <li className="hover:text-green-700 cursor-pointer transition-colors">
            <Link href={"#sobre-nos"}> SOBRE NÓS</Link>
          </li>
          <li className="hover:text-green-700 cursor-pointer transition-colors">
            <Link href={"#faq"}> FAQ</Link>
          </li>
          <li className="hover:text-green-700 cursor-pointer transition-colors">
            <Link href={"#contato"}> CONTATO</Link>

          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 hover:text-green-700 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col items-center space-y-4 py-6 text-sm font-medium text-gray-800">
            <li className="hover:text-green-700 cursor-pointer transition-colors">
              <Link href={"#como-funciona"}> COMO FUNCIONA </Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer transition-colors">
              <Link href={"#sobre-nos"}> SOBRE NÓS</Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer transition-colors">
              <Link href={"#faq"}> FAQ</Link>
            </li>
            <li className="hover:text-green-700 cursor-pointer transition-colors">
              <Link href={"#contato"}> CONTATO</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
