export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

export const menuCategories = [
  "All",
  "Hot Coffee",
  "Cold Coffee",
  "Fresh Juices & Smoothies",
  "Milkshakes & Desserts",
  "Signature Creations"
] as const;

export const menuItems: MenuItem[] = [
  // Hot Coffee
  {
    id: "1",
    name: "Espresso",
    description: "Pure, concentrated coffee with a rich crema.",
    price: "EGP 35",
    category: "Hot Coffee"
  },
  {
    id: "2",
    name: "Americano",
    description: "Espresso balanced with hot water for a clean, bold cup.",
    price: "EGP 40",
    category: "Hot Coffee"
  },
  {
    id: "3",
    name: "Cappuccino",
    description: "Espresso with steamed milk and a silky foam crown.",
    price: "EGP 45",
    category: "Hot Coffee"
  },
  {
    id: "4",
    name: "Flat White",
    description: "Smooth micro-foamed milk over a double ristretto.",
    price: "EGP 50",
    category: "Hot Coffee"
  },
  {
    id: "5",
    name: "Café Mocha",
    description: "Espresso, chocolate, steamed milk, whipped finish.",
    price: "EGP 55",
    category: "Hot Coffee"
  },
  {
    id: "6",
    name: "Turkish Coffee",
    description: "Traditional, finely ground, aromatic.",
    price: "EGP 30",
    category: "Hot Coffee"
  },
  // Cold Coffee
  {
    id: "7",
    name: "Iced Latte",
    description: "Double espresso, chilled milk, served over ice.",
    price: "EGP 50",
    category: "Cold Coffee"
  },
  {
    id: "8",
    name: "Cold Brew",
    description: "Slow-steeped for sweetness and low acidity.",
    price: "EGP 55",
    category: "Cold Coffee"
  },
  {
    id: "9",
    name: "Nitro Cold Brew",
    description: "Infused with nitrogen for a creamy, stout-like texture.",
    price: "EGP 60",
    category: "Cold Coffee"
  },
  {
    id: "10",
    name: "Iced Caramel Macchiato",
    description: "Layered espresso, milk, caramel drizzle.",
    price: "EGP 60",
    category: "Cold Coffee"
  },
  {
    id: "11",
    name: "Affogato",
    description: "Espresso poured over vanilla gelato.",
    price: "EGP 65",
    category: "Cold Coffee"
  },
  // Fresh Juices & Smoothies
  {
    id: "12",
    name: "Sunrise Orange",
    description: "Fresh-squeezed oranges, hint of mint.",
    price: "EGP 40",
    category: "Fresh Juices & Smoothies"
  },
  {
    id: "13",
    name: "Green Boost",
    description: "Kale, green apple, cucumber, lemon.",
    price: "EGP 50",
    category: "Fresh Juices & Smoothies"
  },
  {
    id: "14",
    name: "Berry Bliss Smoothie",
    description: "Mixed berries, banana, almond milk.",
    price: "EGP 55",
    category: "Fresh Juices & Smoothies"
  },
  {
    id: "15",
    name: "Mango Lassi",
    description: "Creamy mango, yogurt, touch of cardamom.",
    price: "EGP 50",
    category: "Fresh Juices & Smoothies"
  },
  // Milkshakes & Desserts
  {
    id: "16",
    name: "Classic Vanilla Shake",
    description: "Creamy, thick, with whipped cream.",
    price: "EGP 55",
    category: "Milkshakes & Desserts"
  },
  {
    id: "17",
    name: "Chocolate Overload",
    description: "Rich chocolate shake topped with cocoa dust.",
    price: "EGP 60",
    category: "Milkshakes & Desserts"
  },
  {
    id: "18",
    name: "Pastries",
    description: "Butter croissant, almond croissant, pain au chocolat.",
    price: "EGP 25",
    category: "Milkshakes & Desserts"
  },
  {
    id: "19",
    name: "Signature Cake",
    description: "Rotating seasonal cake (ask at counter).",
    price: "EGP 45",
    category: "Milkshakes & Desserts"
  },
  // Signature Creations
  {
    id: "20",
    name: "Fifth Lane Nitro",
    description: "Cold drip with citrus infusion and silky foam.",
    price: "EGP 70",
    category: "Signature Creations"
  },
  {
    id: "21",
    name: "Rose Latte",
    description: "Espresso, steamed milk, fragrant rose syrup, gold dust (optional).",
    price: "EGP 65",
    category: "Signature Creations"
  },
  {
    id: "22",
    name: "Spiced Cardamom Capp",
    description: "Cappuccino with a hint of cardamom and orange zest.",
    price: "EGP 60",
    category: "Signature Creations"
  },
];
