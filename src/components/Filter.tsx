'use client';

import { useState, useEffect, type ChangeEvent } from 'react';

interface Props {
  categories: string[];
  category: string;
  setCategory: (c: string) => void;
  priceMax: number;
  setPriceMax: (n: number) => void;
}

export default function FilterSidebar({
  categories,
  category,
  setCategory,
  priceMax,
  setPriceMax,
}: Props) {

  const [bubbleLeft, setBubbleLeft] = useState(0);
  useEffect(() => {
   
    setBubbleLeft(((priceMax - 500) / (80000 - 500)) * 100);
  }, [priceMax]);

  return (
    <aside className="rounded-xl bg-white shadow-md h-fit ring-1 ring-gray-200 p-6 space-y-8 md:sticky md:top-24">
      {/* Category section */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3">Category</h4>
        <div className="space-y-2">
          {['All', ...categories].map((c) => {
            const checked = category === c || (c === 'All' && !category);
            return (
              <label
                key={c}
                className="flex items-center gap-3 cursor-pointer select-none text-sm font-medium"
              >
                <span
                  className={`size-4 rounded-full border
                    ${checked ? 'border-purple-600 bg-purple-600' : 'border-gray-400'}`}
                >
                  
                </span>
                <input
                  type="radio"
                  name="cat"
                  value={c}
                  checked={checked}
                  onChange={() => setCategory(c === 'All' ? '' : c)}
                  className="sr-only"
                />
                <span className={checked ? 'text-purple-700' : 'text-gray-700'}>
                  {c}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <hr className="border-t border-gray-100" />

      {/* Price slider */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Max Price (₹)</h4>
        <div className="relative">
          {/* slider */}
          <input
            type="range"
            min={500}
            max={80000}
            step={500}
            value={priceMax}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPriceMax(+e.target.value)
            }
            className="w-full accent-purple-600 cursor-pointer"
          />
          {/* bubble */}
          <span
            style={{ left: `calc(${bubbleLeft}% - 36px)` }}
            className="absolute -top-8 flex items-center justify-center h-6 px-2 rounded-md
                       bg-purple-600 text-white text-[10px] font-semibold"
          >
            ₹{priceMax.toLocaleString()}
          </span>
        </div>
      </div>
    </aside>
  );
}
