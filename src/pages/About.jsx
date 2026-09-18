import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Compass, ShieldCheck, Ticket, Users, Award, ArrowRight, Zap, Star } from 'lucide-react';
import { Button } from '../components/common/Button';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. HERO MISSION STATEMENT */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Our Story & Mission</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight font-heading">
          Eventify makes discovering and booking experiences simple.
        </h1>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          We believe live music, warehouse raves, cultural festivals, and comedy specials are best experienced in person. Eventify bridges fans directly to curated underground and mainstream events.
        </p>
      </div>

      {/* 2. STATS GRID COUNTERS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 rounded-3xl bg-[#12151E] border border-gray-800 text-center space-y-2">
          <p className="text-4xl font-black text-white font-mono text-gradient">150K+</p>
          <p className="text-xs font-semibold text-gray-400">Tickets Issued</p>
        </div>

        <div className="p-6 rounded-3xl bg-[#12151E] border border-gray-800 text-center space-y-2">
          <p className="text-4xl font-black text-white font-mono text-gradient">500+</p>
          <p className="text-xs font-semibold text-gray-400">Verified Promoters</p>
        </div>

        <div className="p-6 rounded-3xl bg-[#12151E] border border-gray-800 text-center space-y-2">
          <p className="text-4xl font-black text-white font-mono text-gradient">8</p>
          <p className="text-xs font-semibold text-gray-400">Metropolitan Cities</p>
        </div>

        <div className="p-6 rounded-3xl bg-[#12151E] border border-gray-800 text-center space-y-2">
          <p className="text-4xl font-black text-white font-mono text-gradient">4.9 ★</p>
          <p className="text-xs font-semibold text-gray-400">Community Rating</p>
        </div>
      </div>

      {/* 3. HOW IT WORKS */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-white font-heading">How Eventify Works</h2>
          <p className="text-xs text-gray-400">Three effortless steps to your next experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-[#12151E] border border-gray-800 space-y-4 relative">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/40 text-purple-400 flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Discover Nearby Events</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Filter by city, genre, date, or price. Explore underground raves, live concerts, and workshops with instant search.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#12151E] border border-gray-800 space-y-4 relative">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/40 text-purple-400 flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Select Pass Tier</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Choose General Admission, VIP decks, or Early Bird discounts. Complete instant checkout with transparent pricing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#12151E] border border-gray-800 space-y-4 relative">
            <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/40 text-purple-400 flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 className="text-xl font-bold text-white font-heading">Scan QR Code & Dance</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your digital QR pass is saved to your phone. Show up at the venue, scan at the gate, and enjoy the night.
            </p>
          </div>

        </div>
      </div>

      {/* 4. WHY EVENTIFY */}
      <div className="bg-gradient-to-r from-purple-950/60 via-[#12151E] to-indigo-950/60 border border-purple-500/30 rounded-3xl p-8 sm:p-12 space-y-8">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-black text-white font-heading">Why Fans Choose Eventify</h2>
          <p className="text-gray-300 text-sm">Engineered with high standards for modern event-goers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <h4 className="text-base font-bold text-white">100% Genuine Passes</h4>
            <p className="text-xs text-gray-400">Direct integration with official event organizers guarantees entry.</p>
          </div>

          <div className="space-y-2">
            <Zap className="w-6 h-6 text-purple-400" />
            <h4 className="text-base font-bold text-white">Zero Ticket Scalping</h4>
            <p className="text-xs text-gray-400">Protected barcode technology prevents duplicate selling.</p>
          </div>

          <div className="space-y-2">
            <Star className="w-6 h-6 text-amber-400" />
            <h4 className="text-base font-bold text-white">VIP Perks & Upgrades</h4>
            <p className="text-xs text-gray-400">Exclusive backstage access and fast-track queues for VIP holders.</p>
          </div>
        </div>

        <div className="pt-4">
          <Link to="/discover">
            <Button variant="primary" size="lg" icon={Compass}>
              Explore Events Now
            </Button>
          </Link>
        </div>
      </div>

    </div>
  );
}
