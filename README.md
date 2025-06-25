ShowcaseX

  

A responsive Product‑Showcase Web App built for the Front‑End Developer test assignment.  Browse, filter and sort 30 mock products, add them to a persistent (local‑storage) cart, and view details— all wrapped in a clean purple theme.

Live demo: https://showcase-x.vercel.app/

✨ Key Features

🛒 Cart Context

Global state with qty counter & localStorage persistence

🖼 Product Grid

Filtering (category / price) • Sorting (price / rating / name) • Pagination (12 per page)

📄 Product Detail

Dynamic route /product/[slug] with image, price, stars & Add‑to‑Cart

🎨 Theme

Tailwind utility classes, gradient backgrounds, glassy header

📄 Static Pages

/about & /contact (demo form)



🛒 Cart Context

Global state with qty counter & localStorage persistence

🖼 Product Grid

Filtering (category / price) • Sorting (price / rating / name) • Pagination (12 per page)

📄 Product Detail

Dynamic route /product/[slug] with image, price, stars & Add‑to‑Cart

🎨 Theme

Tailwind utility classes, gradient backgrounds, glassy header

📄 Static Pages

/about & /contact (demo form)

🗂 Project Structure

src/
  ├─ app/
  │    ├─ layout.tsx          # CartProvider + Header
  │    ├─ page.tsx            # Home (Hero + Grid)
  │    ├─ about/page.tsx
  │    ├─ contact/page.tsx
  │    └─ product/[slug]/page.tsx
  ├─ components/              # UI pieces
  ├─ context/CartContext.tsx  # Cart logic
  ├─ data/products.json       # 30 demo items
  ├─ hooks/usePagination.ts
  └─ types/product.ts

🛠 Tech Stack

Next.js 13+ (App Router)

React 18 hooks

TypeScript strict mode

Tailwind CSS

Lucide‑react icons

🚀 Getting Started Locally

# 1. Clone repo
$ git clone https://github.com/tushargandhi-code/ShowcaseX
$ cd showcasex

# 2. Install deps
$ npm install

# 3. Run dev server
$ npm run dev       # http://localhost:3000




Built with 💜 by Tushar – June 2025

