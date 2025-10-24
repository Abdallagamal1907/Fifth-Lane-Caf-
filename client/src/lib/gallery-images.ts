export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'interior' | 'coffee' | 'food' | 'lifestyle';
}

// Curated high-quality coffee shop images from Unsplash
export const galleryImages: GalleryImage[] = [
  // Interior shots
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&h=800&fit=crop",
    alt: "Cozy café interior with warm lighting",
    category: "interior"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop",
    alt: "Modern coffee shop seating area",
    category: "interior"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop",
    alt: "Rustic café with wooden furnishings",
    category: "interior"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&h=800&fit=crop",
    alt: "Bright and airy café space",
    category: "interior"
  },
  // Coffee shots
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&h=800&fit=crop",
    alt: "Freshly brewed espresso shot",
    category: "coffee"
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1200&h=800&fit=crop",
    alt: "Latte art in cappuccino",
    category: "coffee"
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1200&h=800&fit=crop",
    alt: "Iced coffee with milk",
    category: "coffee"
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&h=800&fit=crop",
    alt: "Coffee beans and brewing equipment",
    category: "coffee"
  },
  {
    id: "9",
    url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&h=800&fit=crop",
    alt: "Pour over coffee being made",
    category: "coffee"
  },
  {
    id: "10",
    url: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=1200&h=800&fit=crop",
    alt: "Flat white with perfect foam",
    category: "coffee"
  },
  // Food shots
  {
    id: "11",
    url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&h=800&fit=crop",
    alt: "Fresh croissants and pastries",
    category: "food"
  },
  {
    id: "12",
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop",
    alt: "Artisan bread and baked goods",
    category: "food"
  },
  {
    id: "13",
    url: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1200&h=800&fit=crop",
    alt: "Chocolate cake slice",
    category: "food"
  },
  {
    id: "14",
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop",
    alt: "Assorted desserts and sweets",
    category: "food"
  },
  {
    id: "15",
    url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1200&h=800&fit=crop",
    alt: "Breakfast plate with coffee",
    category: "food"
  },
  // Lifestyle shots
  {
    id: "16",
    url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200&h=800&fit=crop",
    alt: "Friends enjoying coffee together",
    category: "lifestyle"
  },
  {
    id: "17",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop",
    alt: "Barista preparing coffee",
    category: "lifestyle"
  },
  {
    id: "18",
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop",
    alt: "People working in café",
    category: "lifestyle"
  },
  {
    id: "19",
    url: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1200&h=800&fit=crop",
    alt: "Coffee being poured by barista",
    category: "lifestyle"
  },
  {
    id: "20",
    url: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&h=800&fit=crop",
    alt: "Reading and relaxing with coffee",
    category: "lifestyle"
  },
  // Additional variety
  {
    id: "21",
    url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop",
    alt: "Coffee cup on wooden table",
    category: "coffee"
  },
  {
    id: "22",
    url: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&h=800&fit=crop",
    alt: "Café counter and equipment",
    category: "interior"
  },
  {
    id: "23",
    url: "https://images.unsplash.com/photo-1504627298434-2119d6928e93?w=1200&h=800&fit=crop",
    alt: "Espresso machine close-up",
    category: "coffee"
  },
  {
    id: "24",
    url: "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=1200&h=800&fit=crop",
    alt: "Outdoor café seating",
    category: "interior"
  },
];

// Hero background images (high resolution)
export const heroImages = [
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=2560&h=1440&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=2560&h=1440&fit=crop",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=2560&h=1440&fit=crop",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=2560&h=1440&fit=crop",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=2560&h=1440&fit=crop",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=2560&h=1440&fit=crop",
];
