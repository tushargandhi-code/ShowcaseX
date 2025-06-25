'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CardContext';   

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();               

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-extrabold text-purple-700">
          Showcase<span className="text-purple-500">X</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-700 hover:text-purple-700 transition
                         before:absolute before:-bottom-0.5 before:left-0 before:h-[2px]
                         before:w-0 before:bg-purple-600 before:transition-all
                         hover:before:w-full"
            >
              {link.label}
            </Link>
          ))}

          {/* Cart */}
          <Link href="/cart" className="relative text-gray-700 hover:text-purple-700">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-[10px] rounded-full px-[6px] py-[2px] leading-none">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-700">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur divide-y">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
            >
              {link.label}
            </Link>
          ))}

          {/* Cart Mobile */}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-6 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Cart
            {totalItems > 0 && (
              <span className="ml-auto bg-purple-600 text-white text-[10px] rounded-full px-[6px] py-[2px] leading-none">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
}
