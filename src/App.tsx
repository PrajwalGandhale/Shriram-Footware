import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Instagram, 
  Twitter, 
  Facebook,
  ChevronRight,
  ChevronLeft,
  Star,
  Plus
} from 'lucide-react';
import { products, Product } from './types';

const Navbar = ({ cartCount }: { cartCount: number }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-display font-bold tracking-tighter">SHRIRAM FOOTWARE</a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-600">
            <a href="#" className="hover:text-brand-950 transition-colors">New Arrivals</a>
            <a href="#" className="hover:text-brand-950 transition-colors">Men</a>
            <a href="#" className="hover:text-brand-950 transition-colors">Women</a>
            <a href="#" className="hover:text-brand-950 transition-colors">Collections</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-brand-100 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:bg-brand-100 rounded-full transition-colors relative">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-brand-950 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            className="md:hidden p-2 hover:bg-brand-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display font-bold tracking-tighter">SHRIRAM FOOTWARE</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-brand-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-3xl font-display font-bold">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>New Arrivals</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Men</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Women</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
            </div>
            <div className="mt-auto pt-8 border-t border-brand-100 flex gap-6">
              <Instagram size={24} className="text-brand-400" />
              <Twitter size={24} className="text-brand-400" />
              <Facebook size={24} className="text-brand-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-50">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-10"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-950 text-white text-xs font-bold mb-6 tracking-widest uppercase">
            New Season Drop
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8">
            STEP INTO <br />
            <span className="text-brand-400">THE FUTURE.</span>
          </h1>
          <p className="text-lg text-brand-600 max-w-md mb-10 leading-relaxed">
            Discover the latest innovation in comfort and style. Our new collection combines performance technology with street-ready aesthetics.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-brand-950 text-white rounded-full font-bold flex items-center gap-2 hover:bg-brand-800 transition-colors group">
              Shop Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-brand-200 rounded-full font-bold hover:bg-white transition-colors">
              View Lookbook
            </button>
          </div>
        </motion.div>

        <div className="relative h-[400px] md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-200 rounded-full blur-3xl opacity-50" />
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" 
              alt="Featured Shoe"
              className="relative z-10 w-full max-w-lg object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="absolute bottom-10 right-0 glass p-6 rounded-2xl max-w-[200px] hidden md:block z-20">
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" className="text-yellow-400" />)}
            </div>
            <p className="text-xs font-medium text-brand-600 leading-tight">
              "The most comfortable pair I've ever owned. Perfect for all-day wear."
            </p>
            <p className="text-[10px] font-bold mt-2 uppercase tracking-wider">— Alex Rivera</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-12 h-1 bg-brand-950 rounded-full" />
        <div className="w-12 h-1 bg-brand-200 rounded-full" />
        <div className="w-12 h-1 bg-brand-200 rounded-full" />
      </div>
    </section>
  );
};

const ProductCard = ({ product, onAddToCart }: { product: Product, onAddToCart: () => void, key?: string }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group"
    >
      <div className="relative aspect-square bg-brand-100 rounded-3xl overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <button 
          onClick={onAddToCart}
          className="absolute bottom-4 right-4 w-12 h-12 bg-brand-950 text-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-800"
        >
          <Plus size={24} />
        </button>
      </div>
      <div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <span className="font-display font-bold">₹{product.price.toLocaleString('en-IN')}</span>
        </div>
        <p className="text-sm text-brand-500">{product.brand}</p>
      </div>
    </motion.div>
  );
};

const ProductSection = ({ onAddToCart }: { onAddToCart: () => void }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Running', 'Lifestyle', 'Basketball', 'Training'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-display font-bold tracking-tight mb-4">LATEST DROPS</h2>
          <p className="text-brand-500 max-w-md">Our freshest arrivals, handpicked for style and performance.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat 
                  ? 'bg-brand-950 text-white' 
                  : 'bg-brand-100 text-brand-600 hover:bg-brand-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { title: 'Fast Delivery', desc: 'Free shipping on orders over ₹499' },
    { title: '7-Day Returns', desc: 'Hassle-free returns and exchanges' },
    { title: 'Secure Payment', desc: 'Fully encrypted checkout process' },
    { title: 'Premium Quality', desc: 'Crafted with the finest materials' }
  ];

  return (
    <section className="bg-brand-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h4 className="font-display font-bold text-lg">{f.title}</h4>
            <p className="text-brand-400 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-brand-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-display font-bold tracking-tighter mb-6 block">SHRIRAM FOOTWARE</a>
            <p className="text-brand-500 text-sm leading-relaxed mb-6">
              Redefining the way you move. Premium footwear for the modern explorer.
            </p>
            <div className="flex gap-4">
              <Instagram size={20} className="text-brand-400 hover:text-brand-950 cursor-pointer transition-colors" />
              <Twitter size={20} className="text-brand-400 hover:text-brand-950 cursor-pointer transition-colors" />
              <Facebook size={20} className="text-brand-400 hover:text-brand-950 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6">Shop</h5>
            <ul className="flex flex-col gap-4 text-sm text-brand-500">
              <li><a href="#" className="hover:text-brand-950 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-950 transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-brand-950 transition-colors">Men's Shoes</a></li>
              <li><a href="#" className="hover:text-brand-950 transition-colors">Women's Shoes</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Support</h5>
            <ul className="flex flex-col gap-4 text-sm text-brand-500">
              <li><a href="#" className="hover:text-brand-950 transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-brand-950 transition-colors">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-brand-950 transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-brand-950 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Newsletter</h5>
            <p className="text-sm text-brand-500 mb-4">Join our list and get 15% off your first order.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 bg-brand-50 border border-brand-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-950"
              />
              <button className="w-10 h-10 bg-brand-950 text-white rounded-full flex items-center justify-center hover:bg-brand-800 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-400">
          <p>© 2024 SHRIRAM FOOTWARE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-950">Privacy Policy</a>
            <a href="#" className="hover:text-brand-950">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <ProductSection onAddToCart={handleAddToCart} />
        
        {/* Promotion Banner */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="relative h-[400px] rounded-[40px] overflow-hidden bg-brand-900 flex items-center p-12">
            <img 
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1200&auto=format&fit=crop" 
              alt="Promo" 
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10 max-w-lg">
              <h2 className="text-5xl font-display font-bold text-white leading-tight mb-6">
                PREMIUM <br />
                COMFORT.
              </h2>
              <p className="text-brand-300 mb-8">
                Experience the finest Indian craftsmanship combined with global technology.
              </p>
              <button className="px-8 py-4 bg-white text-brand-950 rounded-full font-bold hover:bg-brand-100 transition-colors">
                Explore Tech
              </button>
            </div>
          </div>
        </section>

        <Features />
      </main>
      <Footer />
    </div>
  );
}
