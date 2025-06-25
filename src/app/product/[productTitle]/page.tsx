
import product from '@/constant/product';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddToCartButton from './AddtoCart';


const slugify = (s: string) => s.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase();

export function generateStaticParams() {
  return product.map(({ title }) => ({ productTitle: slugify(title) }));
}

export default async function  ProductPage({
  params,
}: {
  params: Promise<{ productTitle: string }>;
}) {
  const { productTitle } = await params;
  const p = product.find((pr) => slugify(pr.title) === productTitle);
  if (!p) return notFound();


  return (
    <div className="bg-gradient-to-br from-white via-purple-50 to-purple-100 min-h-screen">
      <main className="max-w-6xl mx-auto px-6 py-14">
        
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-200">
       
          <div className="relative w-full h-72 sm:h-[420px] md:h-[520px]">
            <Image
              src={p.image}
              alt={p.title}
              fill
              priority
              className="object-contain md:object-cover rounded-xl bg-gray-50"
            />
          </div>

          
          <section className="flex flex-col justify-center space-y-6">
            
            <span className="inline-block w-fit bg-purple-600/90 text-xs font-semibold tracking-wider uppercase text-white px-3
             py-1 rounded-full shadow">
              {p.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight">
              {p.title}
            </h1>

            <div className="flex items-center gap-4">
              <p className="text-purple-700 text-2xl font-bold">
                ₹{p.price.toLocaleString()}
              </p>
              <span className="text-sm text-gray-500">⭐ {p.rating}</span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {p.description} This premium item is crafted with precision and engineered for peak
              performance. Designed to deliver both style and comfort, it fits perfectly into
              casual as well as athletic lifestyles, ensuring you look and feel your best every day.
            </p>

     <AddToCartButton product={p} />   
          </section>
        </div>
      </main>
    </div>
  );
}
