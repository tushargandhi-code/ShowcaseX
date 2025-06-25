'use client'


import { useState, useMemo } from 'react';
import product from '@/constant/product';
import Hero from '@/components/Hero';
import Card from '@/components/Card';
import Filter from '@/components/Filter';
import Sort from '@/components/Sort';
import Pagination from '@/components/Pagination';
import { usePagination } from '@/utility/pagination';

export default function Home() {
  const products = product as Product[];

 
  const [category, setCategory] = useState('');
  const [priceMax, setPriceMax] = useState(80000);


  const [sort, setSort] = useState<'price' | 'title' | 'rating'>('price');


  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (!category || p.category === category) && p.price <= priceMax
    );

    list = [...list].sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'title') return a.title.localeCompare(b.title);
      return b.rating - a.rating;
    });

    return list;
  }, [products, category, priceMax, sort]);

  /* Pagination */
  const { slice, page, max, setPage } = usePagination(filtered, 12);

  const categories = [...new Set(products.map((p) => p.category))];

  return (
    
    <>

    <Hero/>

    
    <main className="grid bg-gradient-to-br from-white via-purple-50 to-purple-100
             px-8 py-10 gap-10 md:grid-cols-[250px_1fr]">
      {/* Sidebar */}
      <Filter
        categories={categories}
        category={category}
        setCategory={setCategory}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
      />

      {/* Product Grid + sort */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Products ({filtered.length})
          </h2>
          <Sort sort={sort} setSort={setSort} />
        </div>

        {slice.length === 0 ? (
          <p>No products match current filter.</p>
        ) : (
          <div
            id="products"
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {slice.map((p) => (
              <Card key={p.id} p={p} />
            ))}
          </div>
        )}

        {max > 1 && (
          <Pagination page={page} max={max} setPage={setPage} />
        )}
      </section>
    </main>
    </>
  );
}
