import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ArrowRight, CheckCircle2, 
  Instagram, Twitter, Linkedin, Facebook, 
  Mail, Phone, MapPin, Send,
  BarChart3, Megaphone, Palette, Globe, Users,
  ExternalLink
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  company: string;
  category: 'Ads' | 'Branding' | 'Web Dev' | 'SEO';
  image: string;
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// --- Data ---
const CLIENTS = [
  "https://logo.clearbit.com/google.com",
  "https://logo.clearbit.com/amazon.com",
  "https://logo.clearbit.com/spotify.com",
  "https://logo.clearbit.com/stripe.com",
  "https://logo.clearbit.com/airbnb.com",
  "https://logo.clearbit.com/slack.com",
];

const PROJECTS: Project[] = [
  { id: 1, title: 'Global Expansion', company: 'TechFlow', category: 'Ads', image: 'https://picsum.photos/seed/tech/800/600' },
  { id: 2, title: 'Brand Reimagined', company: 'EcoStyle', category: 'Branding', image: 'https://picsum.photos/seed/brand/800/600' },
  { id: 3, title: 'E-commerce Platform', company: 'LuxeCart', category: 'Web Dev', image: 'https://picsum.photos/seed/web/800/600' },
  { id: 4, title: 'Search Dominance', company: 'GrowthCo', category: 'SEO', image: 'https://picsum.photos/seed/seo/800/600' },
  { id: 5, title: 'Social Surge', company: 'VibeMedia', category: 'Ads', image: 'https://picsum.photos/seed/social/800/600' },
  { id: 6, title: 'Identity System', company: 'NovaLabs', category: 'Branding', image: 'https://picsum.photos/seed/identity/800/600' },
];

const SERVICES: Service[] = [
  { id: 1, title: 'Social Media Marketing', description: 'Strategic content and community management to build brand loyalty.', icon: <Users className="w-8 h-8" /> },
  { id: 2, title: 'Performance Ads', description: 'Data-driven campaigns across Google, Meta, and LinkedIn for maximum ROI.', icon: <BarChart3 className="w-8 h-8" /> },
  { id: 3, title: 'Branding & Creative', description: 'Visual identities and creative assets that tell your unique story.', icon: <Palette className="w-8 h-8" /> },
  { id: 4, title: 'Website Development', description: 'High-performance, conversion-optimized websites built for scale.', icon: <Globe className="w-8 h-8" /> },
  { id: 5, title: 'Lead Generation Systems', description: 'Automated funnels that consistently deliver high-quality prospects.', icon: <Megaphone className="w-8 h-8" /> },
];

const PROCESS = [
  { step: '01', title: 'Discovery', description: 'We dive deep into your business goals and market landscape.' },
  { step: '02', title: 'Strategy', description: 'A custom roadmap designed for measurable growth and ROI.' },
  { step: '03', title: 'Execution', description: 'Precision implementation across all digital touchpoints.' },
  { step: '04', title: 'Optimization', description: 'Continuous data analysis to scale what works best.' },
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-display font-bold flex items-center gap-2">
          <span className={`w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white`}>N</span>
          <span className={isScrolled || isMobileMenuOpen ? 'text-zinc-900' : 'text-white'}>NEXUS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors ${isScrolled ? 'text-zinc-600 hover:text-brand' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-brand/20">
            Get Proposal
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-zinc-900' : 'text-white'}`} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-zinc-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-800 hover:text-brand"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand text-white py-3 rounded-xl font-semibold mt-2">
              Get Proposal
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative bg-brand pt-40 pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-dark rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6">
              Next-Gen Marketing Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-8">
              We Grow Your Brand With <span className="text-zinc-900">Precision</span> Marketing
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Helping businesses scale with proven digital marketing systems. We combine data science with creative excellence to deliver unmatched ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                Get Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white hover:bg-zinc-50 text-brand px-8 py-4 rounded-full font-bold text-lg transition-all border border-transparent">
                Book a Strategy Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  return (
    <section className="py-16 bg-zinc-50 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-zinc-400 text-sm font-bold uppercase tracking-widest mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
          {CLIENTS.map((logo, i) => (
            <div key={i} className="flex justify-center">
              <img src={logo} alt="Client" className="h-8 object-contain" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = (totalMiliseconds / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return <span>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    { value: '20+', label: 'Successful Projects' },
    { value: '98%', label: 'Client Retention' },
    { value: '15M+', label: 'Ad Spend Managed' },
    { value: '3.5x', label: 'Average ROI' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-display font-extrabold text-brand mb-2">
                <Counter value={stat.value} />
              </h3>
              <p className="text-zinc-500 font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedWorks = () => {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900">Selected Case Studies</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-brand font-bold hover:gap-3 transition-all">
            View All Projects <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-zinc-100"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-zinc-900">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-zinc-400 text-sm font-medium mb-1">{project.company}</p>
                <h3 className="text-2xl font-display font-bold text-zinc-900 mb-6">{project.title}</h3>
                <button className="flex items-center gap-2 text-brand font-bold text-sm group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">About Nexus</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-8 leading-tight">
              Our Vision is to Redefine Digital Growth
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              We don't just run ads; we build growth engines. Our agency was founded on the principle that marketing should be a predictable investment, not a gamble. We combine cutting-edge technology with human-centric storytelling.
            </p>
            <div className="space-y-4 mb-10">
              {[
                '20+ Projects Delivered Globally',
                'ROI-Focused Strategies Only',
                'Trusted by Brands Internationally',
                'Dedicated Expert Team'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand" />
                  <span className="font-semibold text-zinc-800">{item}</span>
                </div>
              ))}
            </div>
            <button className="bg-brand text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-brand/20 hover:bg-brand-dark transition-all">
              Learn More About Us
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-white text-4xl font-display font-extrabold mb-1">10+</p>
              <p className="text-white/80 text-sm font-bold uppercase tracking-wider">Years Experience</p>
            </div>
          </motion.div>
        </div>

        <div className="pt-24 border-t border-zinc-100">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4">Our Process</h2>
            <p className="text-zinc-500">How we take your brand from where it is to where it needs to be.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-zinc-100 z-0" />
            
            {PROCESS.map((p, i) => (
              <div key={i} className="relative z-10 text-center lg:text-left">
                <div className="w-24 h-24 bg-white border-2 border-brand rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-8 shadow-lg">
                  <span className="text-3xl font-display font-extrabold text-brand">{p.step}</span>
                </div>
                <h4 className="text-xl font-bold text-zinc-900 mb-3">{p.title}</h4>
                <p className="text-zinc-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Ads', 'Branding', 'Web Dev', 'SEO'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-8">Our Success Stories</h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'bg-white text-zinc-600 hover:bg-zinc-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-zinc-100"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-brand text-xs font-bold uppercase tracking-wider mb-1">{project.category}</p>
                      <h3 className="text-xl font-display font-bold text-zinc-900">{project.company}</h3>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-sm mb-6">{project.title}</p>
                  <button className="w-full py-3 rounded-xl border border-zinc-200 text-zinc-800 font-bold text-sm hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                    View Full Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-center mb-20">
          <div className="lg:col-span-1">
            <span className="text-brand font-bold uppercase tracking-widest text-sm mb-4 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-6">How We Help You Scale</h2>
            <p className="text-zinc-500 text-lg mb-8">
              We provide end-to-end digital marketing solutions tailored to your specific business needs and growth targets.
            </p>
            <button className="flex items-center gap-2 text-brand font-bold hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -5 }}
                className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <button className="text-zinc-900 font-bold text-sm flex items-center gap-2 hover:text-brand transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    service: 'Social Media Marketing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-zinc-50 rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-16">
              <h2 className="text-4xl font-display font-bold text-zinc-900 mb-4">Let's Build Something Great</h2>
              <p className="text-zinc-500 mb-10">Fill out the form below and we'll get back to you within 24 hours with a custom proposal.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Business Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      placeholder="Acme Corp"
                      value={formData.business}
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email Address</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Required Service</label>
                  <select 
                    className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 bg-white border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none"
                    placeholder="Tell us about your goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand hover:bg-brand-dark text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand/20 transition-all flex items-center justify-center gap-3"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
            
            <div className="relative hidden lg:block overflow-hidden bg-zinc-900">
              {/* Sliding Gallery Overlay */}
              <div className="absolute inset-0 z-0">
                <motion.div 
                  animate={{ 
                    y: [0, -1000, 0] 
                  }}
                  transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="flex flex-col gap-4 p-4"
                >
                  {[1,2,3,4,5,6,1,2,3,4,5,6].map((n, i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/agency${n}/800/600`} 
                      alt="Agency Life" 
                      className="w-full aspect-video object-cover rounded-2xl opacity-40"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </motion.div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent z-10" />
              
              <div className="absolute bottom-16 left-16 right-16 z-20">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl">
                  <h4 className="text-white text-2xl font-display font-bold mb-4">Visit Our Office</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-white/80">
                      <MapPin className="w-5 h-5 text-brand" />
                      <span>123 Innovation Drive, Silicon Valley, CA</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/80">
                      <Phone className="w-5 h-5 text-brand" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/80">
                      <Mail className="w-5 h-5 text-brand" />
                      <span>hello@nexusdigital.com</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand transition-all">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-display font-bold flex items-center gap-2 mb-8">
              <span className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white">N</span>
              <span>NEXUS</span>
            </a>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Empowering brands with data-driven marketing strategies and creative excellence since 2014.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-brand hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Portfolio', 'Services', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-zinc-500 hover:text-brand transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4">
              {['Social Media', 'Performance Ads', 'Branding', 'Web Development', 'SEO'].map(link => (
                <li key={link}>
                  <a href="#services" className="text-zinc-500 hover:text-brand transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-zinc-500 mb-6">Get the latest marketing insights delivered to your inbox.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-4 focus:outline-none focus:border-brand transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand hover:bg-brand-dark px-4 rounded-lg transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Nexus Digital Agency. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-zinc-500">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Clients />
      <Stats />
      <FeaturedWorks />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
