import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Sparkles, TrendingUp, Calendar, Compass, ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { mockCategories } from '../data/mockCategories';
import { mockVenues } from '../data/mockVenues';
import { EventGrid } from '../components/event/EventGrid';
import { CategoryCard } from '../components/event/CategoryCard';
import { VenueCard } from '../components/event/VenueCard';
import { Button } from '../components/common/Button';

export function Home() {
  const navigate = useNavigate();
  const { allEvents, selectedCity, setSelectedCity } = useEvents();
  const [heroQuery, setHeroQuery] = useState('');

  // Filter events based on selected city for home sections
  const filteredEvents = selectedCity === 'All Cities'
    ? allEvents
    : allEvents.filter(e => e.city.toLowerCase() === selectedCity.toLowerCase());

  const featuredEvent = allEvents.find(e => e.id === "evt-afterdark-techno-jaipur") || allEvents[0];
  const trendingEvents = filteredEvents.filter(e => e.trending).slice(0, 6);
  const popularEvents = filteredEvents.filter(e => e.popular).slice(0, 6);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (heroQuery.trim()) {
      navigate(`/discover?search=${encodeURIComponent(heroQuery)}`);
    } else {
      navigate('/discover');
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Top Tag Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-300 text-xs font-semibold"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>The Premier Live Experience Platform</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] font-heading"
              >
                Find your next <span className="text-gradient">experience.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal"
              >
                Discover concerts, underground DJ nights, music festivals, workshops and unforgettable nightlife experiences near you.
              </motion.p>

              {/* Search Bar Widget */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onSubmit={handleHeroSearch}
                className="p-2 bg-[#12151E]/90 backdrop-blur-xl border border-gray-800 focus-within:border-purple-500/60 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-stretch gap-2"
              >
                <div className="flex-1 flex items-center gap-3 px-3.5 py-2">
                  <Search className="w-5 h-5 text-gray-400 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search events, artists, venues..."
                    value={heroQuery}
                    onChange={(e) => setHeroQuery(e.target.value)}
                    className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => navigate('/discover')}
                    className="px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{selectedCity}</span>
                  </button>

                  <Button type="submit" variant="primary" size="md" icon={Compass}>
                    Explore Events
                  </Button>
                </div>
              </motion.form>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-400 font-medium"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Organizers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-purple-400" />
                  <span>Instant Digital Passes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400" />
                  <span>4.9 Star Rating</span>
                </div>
              </motion.div>
            </div>

            {/* Right Hero Featured Event Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative group rounded-3xl overflow-hidden border border-gray-800/80 bg-[#12151E] shadow-2xl hover:border-purple-500/50 transition-all duration-500">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={featuredEvent.coverImage}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151E] via-black/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-purple-600/40">
                      FEATURED EVENT
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 space-y-3">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block font-mono">
                      {featuredEvent.category} • {featuredEvent.city}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight font-heading">
                      {featuredEvent.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                      {featuredEvent.tagline}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-lg font-bold text-white font-mono">
                        ₹{featuredEvent.price} onwards
                      </span>
                      <Link to={`/events/${featuredEvent.id}`}>
                        <Button variant="primary" size="sm" icon={ArrowRight}>
                          Get Passes
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. BROWSE BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Browse by Category
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Pick your vibe and discover curated experiences around you.
            </p>
          </div>
          <Link
            to="/discover"
            className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* 3. TRENDING NEAR YOU */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-500/30 text-amber-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Trending in {selectedCity}
              </h2>
              <p className="text-sm text-gray-400">
                High demand events filling up quickly this month.
              </p>
            </div>
          </div>
          <Link
            to="/discover"
            className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
          >
            <span>See Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <EventGrid
          events={trendingEvents}
          emptyTitle={`No Trending Events in ${selectedCity}`}
          emptyDescription="Check out all available events across India or select a different city."
          onResetFilters={() => setSelectedCity('All Cities')}
        />
      </section>

      {/* 4. POPULAR THIS WEEK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              Popular Events
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Hand-picked concerts, raves, and stand-up shows.
            </p>
          </div>
          <Link
            to="/discover"
            className="text-xs font-bold text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors"
          >
            <span>Explore All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <EventGrid
          events={popularEvents}
          emptyTitle="No Events Found"
          onResetFilters={() => setSelectedCity('All Cities')}
        />
      </section>

      {/* 5. TOP VENUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Iconic Venues
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Explore top amphitheaters, stadium grounds, and underground warehouses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockVenues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-gradient-to-r from-purple-950 via-indigo-950 to-gray-950 border border-purple-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 font-mono">
              Organize an Event?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
              List your experience on Eventify.
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Reach thousands of music enthusiasts, ravers, and event-goers. Real-time ticket tracking, QR gate scanning, and payout automation.
            </p>
          </div>
          <div className="shrink-0">
            <Link to="/about">
              <Button variant="primary" size="lg">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
