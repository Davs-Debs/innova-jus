'use client'
import Link from "next/link";

export default function Footer() {

  return (
  <footer className="p-4 bg-[#FDFCF8] md:p-8 lg:p-10">
  <div className="mx-auto max-w-screen-xl text-center">
      <Link  href="" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
           <img src="assets/logo-innovajus.png" alt="" width={150} />
    </Link> 
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Todos os diretiros reservados</span>
  </div>
</footer>
  );
}
