const product = [
  {
    "id": 1,
    "title": "Nike Air Zoom Pegasus 40",
    "category": "Shoes",
    "price": 8999,
    "rating": 4.6,
    "image": "/images/1.jpg",
    "description": "Versatile running shoe with React foam for daily training comfort."
  },
  {
    "id": 2,
    "title": "Apple AirPods Pro 2nd Gen",
    "category": "Electronics",
    "price": 24999,
    "rating": 4.8,
    "image": "/images/2.jpg",
    "description": "Wireless earbuds featuring active noise cancellation and spatial audio."
  },
  {
    "id": 3,
    "title": "Sony WH-1000XM5 Headphones",
    "category": "Electronics",
    "price": 29990,
    "rating": 4.7,
    "image": "/images/3.jpg",
    "description": "Industry-leading ANC headphones with up to 30-hour battery life."
  },
  {
    "id": 4,
    "title": "Levi’s 511 Slim Fit Jeans",
    "category": "Clothing",
    "price": 3899,
    "rating": 4.4,
    "image": "/images/4.jpg",
    "description": "Iconic slim-fit denim with added stretch for everyday comfort."
  },
  {
    "id": 5,
    "title": "Samsung Galaxy Tab S9",
    "category": "Electronics",
    "price": 68999,
    "rating": 4.5,
    "image": "/images/5.jpg",
    "description": "11-inch AMOLED tablet with S-Pen and flagship Snapdragon chip."
  },
  {
    "id": 6,
    "title": "Adidas Ultraboost Light",
    "category": "Shoes",
    "price": 13999,
    "rating": 4.3,
    "image": "/images/6.jpg",
    "description": "High-energy return running shoe built with Light BOOST foam."
  },
  {
    "id": 7,
    "title": "Fossil Gen 6 Smartwatch",
    "category": "Accessories",
    "price": 22995,
    "rating": 4.1,
    "image": "/images/7.jpg",
    "description": "Wear OS watch with SpO₂ tracking and Snapdragon Wear 4100+."
  },
  {
    "id": 8,
    "title": "Canon EOS R50 Mirrorless",
    "category": "Cameras",
    "price": 61999,
    "rating": 4.6,
    "image": "/images/8.jpg",
    "description": "Compact APS-C mirrorless camera ideal for vloggers and creators."
  },
  {
    "id": 9,
    "title": "HP Pavilion 15 Ryzen 7",
    "category": "Computers",
    "price": 68990,
    "rating": 4.3,
    "image": "/images/9.jpg",
    "description": "15-inch laptop with Ryzen 7 7730U, 16 GB RAM and fast SSD."
  },
  {
    "id": 10,
    "title": "JBL Flip 6 Bluetooth Speaker",
    "category": "Electronics",
    "price": 9999,
    "rating": 4.5,
    "image": "/images/10.jpg",
    "description": "Portable IP67 waterproof speaker delivering punchy 30 W sound."
  },
  {
    "id": 11,
    "title": "H&M Cotton Oversized Tee",
    "category": "Clothing",
    "price": 799,
    "rating": 4.2,
    "image": "/images/11.jpg",
    "description": "Soft 100 % cotton T-shirt with relaxed street-style silhouette."
  },
  {
    "id": 12,
    "title": "Logitech MX Master 3S",
    "category": "Accessories",
    "price": 9995,
    "rating": 4.9,
    "image": "/images/12.jpg",
    "description": "Ergonomic productivity mouse with MagSpeed scroll and Quiet Clicks."
  },
  {
    "id": 13,
    "title": "Apple Watch SE (GPS, 44 mm)",
    "category": "Accessories",
    "price": 29900,
    "rating": 4.7,
    "image": "/images/13.jpg",
    "description": "Fitness, heart-rate and crash detection on a budget-friendly Apple Watch."
  },
  {
    "id": 14,
    "title": "OnePlus Nord CE 4 5G",
    "category": "Mobiles",
    "price": 24999,
    "rating": 4.3,
    "image": "/images/14.jpg",
    "description": "Smooth 120 Hz AMOLED display with 100 W SUPERVOOC charging."
  },
  {
    "id": 15,
    "title": "Realme Buds Wireless 3",
    "category": "Electronics",
    "price": 2799,
    "rating": 4.1,
    "image": "/images/15.jpg",
    "description": "Neckband earbuds with active noise cancellation and 45 h battery."
  },
  {
    "id": 16,
    "title": "Amazon Kindle 11th Gen",
    "category": "Electronics",
    "price": 9999,
    "rating": 4.6,
    "image": "/images/16.jpg",
    "description": "6-inch glare-free e-ink display with adjustable front-light."
  },
  {
    "id": 17,
    "title": "Crocs Classic Clog",
    "category": "Shoes",
    "price": 3495,
    "rating": 4.4,
    "image": "/images/17.jpg",
    "description": "Lightweight all-purpose clogs with iconic Croslite cushioning."
  },
  {
    "id": 18,
    "title": "Samsung 860 EVO 1 TB SSD",
    "category": "Computers",
    "price": 7499,
    "rating": 4.8,
    "image": "/images/18.jpg",
    "description": "Fast SATA SSD with V-NAND technology for desktops and laptops."
  },
  {
    "id": 19,
    "title": "Boat Rockerz 255 Pro+",
    "category": "Electronics",
    "price": 1499,
    "rating": 4.1,
    "image": "/images/19.jpg",
    "description": "Budget neckband with ASAP 10-min quick charge for 10 h playback."
  },
  {
    "id": 20,
    "title": "Casio Vintage A168WA-1",
    "category": "Accessories",
    "price": 2595,
    "rating": 4.0,
    "image": "/images/20.jpg",
    "description": "Retro digital watch with EL backlight and stainless-steel band."
  },
  {
    "id": 21,
    "title": "Puma Men’s Running Shorts",
    "category": "Clothing",
    "price": 1299,
    "rating": 4.2,
    "image": "/images/21.jpg",
    "description": "Moisture-wicking polyester shorts ideal for training sessions."
  },
  {
    "id": 22,
    "title": "GoPro HERO12 Black",
    "category": "Cameras",
    "price": 45990,
    "rating": 4.6,
    "image": "/images/22.jpg",
    "description": "5.3K60 action camera with HyperSmooth 6.0 stabilization."
  },
  {
    "id": 23,
    "title": "LG Ultragear 27-inch 165 Hz",
    "category": "Computers",
    "price": 25999,
    "rating": 4.5,
    "image": "/images/23.jpg",
    "description": "IPS gaming monitor with 1 ms response and HDR10 support."
  },
  {
    "id": 24,
    "title": "Wildcraft Backpack 44 L",
    "category": "Accessories",
    "price": 2499,
    "rating": 4.3,
    "image": "/images/24.jpg",
    "description": "Water-resistant laptop backpack with multiple organizer pockets."
  },
  {
    "id": 25,
    "title": "Skullcandy Dime 2 TWS",
    "category": "Electronics",
    "price": 2299,
    "rating": 4.0,
    "image": "/images/25.jpg",
    "description": "Ultra-compact true-wireless earbuds with Tile tracking built-in."
  },
  {
    "id": 26,
    "title": "Decathlon Kalenji Run 100",
    "category": "Shoes",
    "price": 2499,
    "rating": 4.2,
    "image": "/images/26.jpg",
    "description": "Lightweight entry-level running shoes for beginners."
  },
  {
    "id": 27,
    "title": "Philips OneBlade Pro",
    "category": "Personal Care",
    "price": 3599,
    "rating": 4.4,
    "image": "/images/27.jpg",
    "description": "Hybrid trimmer and shaver with 14-length precision comb."
  },
  {
    "id": 28,
    "title": "Mi 10000 mAh Power Bank",
    "category": "Electronics",
    "price": 1699,
    "rating": 4.3,
    "image": "/images/28.jpg",
    "description": "Slim power bank with 22.5 W fast charge and dual output."
  },
  {
    "id": 29,
    "title": "TWS Noise Buds VS104",
    "category": "Electronics",
    "price": 1799,
    "rating": 4.1,
    "image": "/images/29.jpg",
    "description": "Truly wireless earbuds with quad-mic ENC for clear calls."
  },
  {
    "id": 30,
    "title": "DJI Mini 3 Pro Drone",
    "category": "Cameras",
    "price": 75990,
    "rating": 4.7,
    "image": "/images/30.jpg",
    "description": "Ultra-light drone capturing 4K/60fps video with tri-directional sensors."
  }
]

export default product