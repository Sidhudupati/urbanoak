import { Sofa, Armchair, Laptop, Bed, BedDouble, Blinds, Sparkles, Table, UtensilsCrossed } from 'lucide-react';

export const categories = [
  { id: 'all', name: 'All', icon: Sparkles },
  { id: 'sofas', name: 'Sofas', icon: Sofa },
  { id: 'chairs', name: 'Chairs', icon: Armchair },
  { id: 'workstations', name: 'Workstations', icon: Laptop },
  { id: 'mattresses', name: 'Mattresses', icon: Bed },
  { id: 'cots', name: 'Cots', icon: BedDouble },
  { id: 'curtains', name: 'Curtains', icon: Blinds },
  { id: 'decors', name: 'Decors', icon: Sparkles },
  { id: 'centertables', name: 'Center Tables', icon: Table },
  { id: 'diningtables', name: 'Dining Tables', icon: UtensilsCrossed },
];

export const products = [
  { id: 1, name: 'Imperial Chesterfield Sofa', category: 'sofas', rating: 5.0, image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Handcrafted Italian leather with oak frame', tag: 'Bestseller' },
  { id: 2, name: 'Windsor Executive Chair', category: 'chairs', rating: 4.9, image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Ergonomic with premium upholstery', tag: 'Exclusive' },
  { id: 3, name: 'Manhattan Work Station', category: 'workstations', rating: 4.8, image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Modern design with integrated storage', tag: 'New' },
  { id: 4, name: 'Royal Memory Foam Mattress', category: 'mattresses', rating: 5.0, image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Temperature controlled comfort', tag: 'Premium' },
  { id: 5, name: 'Heritage Oak Cot', category: 'cots', rating: 4.9, image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Solid oak with hand-carved details', tag: 'Handcrafted' },
  { id: 6, name: 'Venetian Silk Curtains', category: 'curtains', rating: 4.7, image: 'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Pure silk with golden accents', tag: 'Luxury' },
  { id: 7, name: 'Art Deco Wall Collection', category: 'decors', rating: 4.8, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Gold leaf and bronze finishes', tag: 'Exclusive' },
  { id: 8, name: 'Carrara Marble Center Table', category: 'centertables', rating: 5.0, image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Italian marble with brass inlay', tag: 'Signature' },
  { id: 9, name: 'Victorian Dining Table', category: 'diningtables', rating: 4.9, image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Seats 12, solid walnut wood', tag: 'Premium' },
];

export const heroSlides = [
  {
    title: 'Timeless',
    titleAccent: 'Elegance',
    subtitle: 'Handcrafted luxury furniture engineered for the future of living',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlight: 'NEW COLLECTION 2026',
    stat: { value: '500+', label: 'Bespoke Pieces' }
  },
  {
    title: 'Classic',
    titleAccent: 'Sophistication',
    subtitle: 'Where premium craftsmanship transcends modern design boundaries',
    image: 'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlight: 'BEST SELLERS',
    stat: { value: '10K+', label: 'Happy Homes' }
  },
  {
    title: 'Heritage',
    titleAccent: '& Style',
    subtitle: 'Curated collections that define the language of luxury living',
    image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=1600',
    highlight: 'EST. 2015',
    stat: { value: '9+', label: 'Years of Craft' }
  },
];

export const features = [
  { icon: '🪵', title: 'Premium Materials', desc: 'High-quality solid wood, durable boards, and superior hardware for lasting performance' },
  { icon: '🛠️', title: 'Custom-Made', desc: 'Designed to fit your space — choose size, finish, fabric, and style' },
  { icon: '🎨', title: 'Timeless Design', desc: 'Clean lines and elegant finishes that age beautifully with your home' },
  { icon: '🚚', title: 'Ready to Ship', desc: 'Select ready furniture or place a custom order based on your needs' },
  { icon: '💬', title: 'Free Consultation', desc: 'Expert guidance to help you select the right furniture for your space' },
  { icon: '🛡️', title: 'Warranty Assured', desc: 'Reliable craftsmanship backed by warranty and dedicated after-sales support' },
];