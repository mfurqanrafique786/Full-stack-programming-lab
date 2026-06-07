"use client";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-slate-900 text-white p-5 flex gap-8 shadow-lg">
      <Link href="/" className="hover:text-blue-400 font-bold">Home</Link>
      <Link href="/about" className="hover:text-blue-400">About</Link>
      <Link href="/contact" className="hover:text-blue-400">Contact</Link>
    </nav>
  );
}