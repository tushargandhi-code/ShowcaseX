'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
      
      <div className="absolute -top-10 -left-10 size-[300px] bg-purple-500 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 size-[350px] bg-purple-900 opacity-40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 px-6 py-24 lg:py-32 relative z-10">
        {/* Text Side */}
        <div className="flex flex-col justify-center">
          <span className="uppercase tracking-widest text-sm font-semibold text-purple-200">
            Premium Products
          </span>

          <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Discover, Compare&nbsp;
            <span className="text-purple-200">and Shop</span> the Best
            <br className="hidden sm:inline" /> Tech & Lifestyle Gear
          </h1>

          <p className="mt-6 max-w-md text-purple-100/90">
            Browse hand-picked gadgets, fashion, and accessories. Filter by
            price, sort by popularity, and dive into detailed reviews on every product.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/#products"
              className="rounded-lg bg-white/90 px-6 py-3 text-purple-700 font-semibold shadow hover:bg-white transition"
            >
              Explore Products
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-white/50 px-6 py-3 text-white hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Side */}
       <div className="relative w-full h-80 sm:h-[28rem] lg:h-[540px]">
  <Image
    src="/images/hero-product.jpg"
    alt="Featured product collage"
    fill          
    priority
    className="object-cover rounded-xl shadow-xl" 
  />
</div>

      </div>

      {/* Bottom curve */}
      <svg
        className="absolute bottom-0 left-0 w-full text-white"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C480,120 960,-40 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        ></path>
      </svg>
    </section>
  );
}
