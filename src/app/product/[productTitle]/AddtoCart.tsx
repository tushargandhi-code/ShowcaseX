'use client';

import { useCart } from "@/context/CardContext";


export default function AddToCartButton({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <button
      onClick={() => {
        add({ ...product, id: Number(product.id) })
        alert("Item aaded in cart successfully");
    }}
      className="self-start bg-purple-600 hover:bg-purple-700 text-white font-medium px-7 py-3 rounded-lg shadow"
    >
      Add to Cart
    </button>
  );
}
