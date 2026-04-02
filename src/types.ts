export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: 'Running' | 'Lifestyle' | 'Basketball' | 'Training';
  image: string;
  description: string;
  color: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Max Pulse',
    brand: 'Nike',
    price: 1299,
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    description: 'The Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line.',
    color: 'bg-red-500'
  },
  {
    id: '2',
    name: 'Ultraboost Light',
    brand: 'Adidas',
    price: 1299,
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=800&auto=format&fit=crop',
    description: 'Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever.',
    color: 'bg-blue-500'
  },
  {
    id: '3',
    name: 'Cloudmonster',
    brand: 'On',
    price: 1299,
    category: 'Running',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop',
    description: 'Running on clouds taken to the next level. Big CloudTec elements for massive cushioning.',
    color: 'bg-green-500'
  },
  {
    id: '4',
    name: 'Metcon 9',
    brand: 'Nike',
    price: 1299,
    category: 'Training',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop',
    description: 'The gold standard for lifting and high-intensity training.',
    color: 'bg-orange-500'
  },
  {
    id: '5',
    name: 'Forum Low',
    brand: 'Adidas',
    price: 1299,
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop',
    description: 'More than just a shoe, it\'s a statement. The Forum hit the scene in \'84 and gained major love.',
    color: 'bg-purple-500'
  },
  {
    id: '6',
    name: 'LeBron XXI',
    brand: 'Nike',
    price: 1299,
    category: 'Basketball',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop',
    description: 'The LeBron XXI features a cabling system that works with Zoom Air cushioning for a lightweight, low-to-the-ground design.',
    color: 'bg-yellow-500'
  }
];
