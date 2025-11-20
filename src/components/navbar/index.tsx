'use client'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full bg-[#FDFCF8] fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-2">

  <Link href={"/"}><motion.img
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      src="assets/logo-innovajus.png"
      alt=""
      width={150}
  /></Link>


        <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          <motion.li
              whileHover={{ scale: 1.1, color: "#15803d" }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
          >
            <Link href={"#como-funciona"}> COMO FUNCIONA </Link>
          </motion.li>
          <motion.li
              whileHover={{ scale: 1.1, color: "#15803d" }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
          >
            <Link href={"#sobre-nos"}> SOBRE NÓS</Link>
          </motion.li>
          <motion.li
              whileHover={{ scale: 1.1, color: "#15803d" }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
          >
            <Link href={"#faq"}> FAQ</Link>
          </motion.li>
          <motion.li
              whileHover={{ scale: 1.1, color: "#15803d" }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
          >
            <Link href={"#contato"}> CONTATO</Link>

          </motion.li>
        </ul>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 hover:text-green-700 transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md border-t overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-sm font-medium text-gray-800">
              {["#como-funciona", "#sobre-nos", "#faq", "#contato"].map((href, idx) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="hover:text-green-700 cursor-pointer transition-colors"
                >
                  <Link href={href} onClick={() => setIsOpen(false)}>
                    {href === "#como-funciona" && "COMO FUNCIONA"}
                    {href === "#sobre-nos" && "SOBRE NÓS"}
                    {href === "#faq" && "FAQ"}
                    {href === "#contato" && "CONTATO"}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
