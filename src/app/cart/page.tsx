'use client';

import { useCart } from '@/context/CardContext';
import Link from 'next/link';

export default function CartPage() {
  const { items, remove, totalItems } = useCart();

  if (!totalItems)
    return (
      <div className="p-10 text-center space-y-6">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <Link href="/" className="text-purple-600 underline">
          Back to products
        </Link>
      </div>
    );

  const totalCost = items.reduce(
    (sum, it) => sum + it.price * it.qty,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-bold">Your Cart ({totalItems})</h1>

      {items.map((it) => (
        <div
          key={it.id}
          className="flex items-center justify-between border-b py-4"
        >
          <span>
            {it.title} <span className="text-xs">x{it.qty}</span>
          </span>

          <div className="flex items-center gap-4">
            <span className="font-semibold">
              ₹{(it.price * it.qty).toLocaleString()}
            </span>
            <button
              onClick={() => remove(it.id)}
              className="text-red-600 text-xs"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <p className="text-right font-bold text-lg">
        Total: ₹{totalCost.toLocaleString()}
      </p>
    </div>
  );
}
