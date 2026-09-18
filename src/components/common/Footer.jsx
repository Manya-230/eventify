import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Send, Globe, Share2, Disc, Radio } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export function Footer() {
  const [email, setEmail] = useState('');
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      addToast('Thank you for subscribing to Eventify updates!', 'success');
      setEmail('');
    } else {
      addToast('Please enter a valid email address.', 'error');
    }
  };

  return (
    <footer className="bg-[#07090D] border-t border-gray-800/80 pt-16 pb-12 mt-20 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/60">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-heading">
                Eventify
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Find your next experience. Discover, save, and book tickets to live concerts, underground techno raves, comedy specials, and festival mainstages.
            </p>
            
            {/* Newsletter Form */}
            <div className="pt-2">
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
                Subscribe for Exclusive Event Drops
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none flex-1"
                />
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md shadow-purple-600/20"
                >
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Discover */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-heading">Discover</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/discover" className="hover:text-purple-400 transition-colors">All Events</Link></li>
              <li><Link to="/discover?category=Techno" className="hover:text-purple-400 transition-colors">Techno & Raves</Link></li>
              <li><Link to="/discover?category=Concert" className="hover:text-purple-400 transition-colors">Live Concerts</Link></li>
              <li><Link to="/discover?category=Festival" className="hover:text-purple-400 transition-colors">Music Festivals</Link></li>
              <li><Link to="/discover?category=Comedy" className="hover:text-purple-400 transition-colors">Stand-up Comedy</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-heading">Account & Passes</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/tickets" className="hover:text-purple-400 transition-colors">My Digital Tickets</Link></li>
              <li><Link to="/wishlist" className="hover:text-purple-400 transition-colors">Saved Events</Link></li>
              <li><Link to="/profile" className="hover:text-purple-400 transition-colors">User Dashboard</Link></li>
              <li><Link to="/login" className="hover:text-purple-400 transition-colors">Sign In</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Eventify</Link></li>
            </ul>
          </div>

          {/* Column 4: Cities & Venues */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider font-heading">Top Cities</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/discover?city=Jaipur" className="hover:text-purple-400 transition-colors">Jaipur</Link></li>
              <li><Link to="/discover?city=Mumbai" className="hover:text-purple-400 transition-colors">Mumbai</Link></li>
              <li><Link to="/discover?city=Delhi" className="hover:text-purple-400 transition-colors">Delhi NCR</Link></li>
              <li><Link to="/discover?city=Bengaluru" className="hover:text-purple-400 transition-colors">Bengaluru</Link></li>
              <li><Link to="/discover?city=Goa" className="hover:text-purple-400 transition-colors">Goa</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Eventify Inc. All rights reserved. Designed for unforgettable experiences.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors p-2" title="Global Network"><Globe className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors p-2" title="Share"><Share2 className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors p-2" title="Radio Streams"><Radio className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors p-2" title="Disc Jockey Sessions"><Disc className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
