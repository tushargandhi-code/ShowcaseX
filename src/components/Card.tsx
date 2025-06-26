'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CardContext';


export default function ProductCard({ p }: { p: Product }) {
  
  const { add } = useCart();

  return (
    <div
      className="group relative bg-white rounded-xl shadow-md hover:shadow-lg
                 ring-1 ring-gray-200 hover:ring-purple-400/70 transition
                 overflow-hidden hover:-translate-y-1"
    >
      {/* CATEGORY BADGE */}
      <span
        className="absolute top-2 left-2 z-10 rounded-full bg-purple-600/90
                   px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider
                   text-white shadow-sm"
      >
        {p.category}
      </span>

      {/* IMAGE */}
      <Link
              key={p.id}
              href={`/product/${p.title.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()}`}
              passHref
            >
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width:768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 
                       group-hover:scale-105"
          />
        </div>
      </Link>

      {/* DETAILS */}
      <div className="p-4 space-y-1">
        <h3 className="text-sm sm:text-base font-semibold line-clamp-1">
          {p.title}
        </h3>

        <p className="text-purple-600 font-bold text-sm sm:text-base">
          ₹{p.price.toLocaleString()}
        </p>

        <p className="text-xs text-gray-500">⭐ {p.rating}</p>
      </div>

      {/* ADD TO CART BUTTON */}
      <button
  onClick={() => {
    add({ ...p, id: Number(p.id) })
    alert("Item aaded in cart successfully");
}}
  className="absolute bottom-0 left-0 w-full translate-y-full
             group-hover:translate-y-0 bg-purple-600 text-white py-2 text-sm"
>
  Add to Cart
</button>
    </div>
  );
}
