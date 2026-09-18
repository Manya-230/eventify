import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { FilterSidebar } from '../components/event/FilterSidebar';
import { FilterDrawer } from '../components/event/FilterDrawer';
import { EventGrid } from '../components/event/EventGrid';
import { Button } from '../components/common/Button';

export function Discover() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { allEvents, selectedCity, setSelectedCity } = useEvents();

  // Filter States
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [dateFilter, setDateFilter] = useState('all');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState('recommended');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Sync URL search params
  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    const catFromUrl = searchParams.get('category');
    const cityFromUrl = searchParams.get('city');

    if (searchFromUrl !== null) setSearchQuery(searchFromUrl);
    if (catFromUrl) setSelectedCategories([catFromUrl]);
    if (cityFromUrl) setSelectedCity(cityFromUrl);
  }, [searchParams]);

  const handleCategoryToggle = (categoryName) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((c) => c !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setDateFilter('all');
    setMaxPrice(5000);
    setSortBy('recommended');
    setSelectedCity('All Cities');
    setSearchParams({});
  };

  // Multi-criteria client-side filtering logic
  const filteredEvents = useMemo(() => {
    return allEvents
      .filter((event) => {
        // City match
        if (selectedCity !== 'All Cities' && event.city.toLowerCase() !== selectedCity.toLowerCase()) {
          return false;
        }

        // Category match
        if (selectedCategories.length > 0 && !selectedCategories.includes(event.category)) {
          return false;
        }

        // Price match
        if (maxPrice < 5000 && event.price > maxPrice) {
          return false;
        }

        // Search Query match (title, artist, venue, category, city)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchTitle = event.title.toLowerCase().includes(q);
          const matchVenue = event.venue.toLowerCase().includes(q);
          const matchCity = event.city.toLowerCase().includes(q);
          const matchCategory = event.category.toLowerCase().includes(q);
          const matchArtist = event.artists?.some((a) => a.name.toLowerCase().includes(q));

          if (!matchTitle && !matchVenue && !matchCity && !matchCategory && !matchArtist) {
            return false;
          }
        }

        // Date Frame match
        if (dateFilter !== 'all') {
          const evtDate = new Date(event.date);
          const now = new Date();
          if (dateFilter === 'today') {
            if (evtDate.toDateString() !== now.toDateString()) return false;
          } else if (dateFilter === 'weekend') {
            const day = evtDate.getDay();
            // Saturday (6) or Sunday (0)
            if (day !== 0 && day !== 6) return false;
          } else if (dateFilter === 'month') {
            const nextMonth = new Date();
            nextMonth.setDate(now.getDate() + 30);
            if (evtDate < now || evtDate > nextMonth) return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
        return 0; // recommended
      });
  }, [allEvents, selectedCity, selectedCategories, maxPrice, searchQuery, dateFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Main Search Input */}
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Discover Events
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Browse live concerts, techno raves, and cultural fests near you.
          </p>
        </div>

        {/* Top Search + Mobile Filter Button Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by event title, artist, or venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12151E] border border-gray-800 focus:border-purple-500 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="lg:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-xs font-semibold text-gray-200 hover:border-purple-500"
            >
              <SlidersHorizontal className="w-4 h-4 text-purple-400" />
              <span>Filters</span>
              {selectedCategories.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-purple-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {selectedCategories.length}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-[#12151E] border border-gray-800 rounded-xl px-3 py-2 shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5 text-purple-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
              >
                <option value="recommended" className="bg-gray-900">Sort: Recommended</option>
                <option value="price-low" className="bg-gray-900">Price: Low to High</option>
                <option value="price-high" className="bg-gray-900">Price: High to Low</option>
                <option value="date" className="bg-gray-900">Date: Soonest</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout: Left Sidebar + Right Events Catalog */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block lg:col-span-3 sticky top-28">
          <FilterSidebar
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
            selectedDate={dateFilter}
            onDateChange={setDateFilter}
            maxPrice={maxPrice}
            onPriceChange={setMaxPrice}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Right Event Catalog */}
        <div className="lg:col-span-9 space-y-4">
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium pb-2 border-b border-gray-800/80">
            <span>
              Showing <strong className="text-white font-bold">{filteredEvents.length}</strong> experiences found
            </span>
            {(selectedCategories.length > 0 || searchQuery || selectedCity !== 'All Cities' || maxPrice < 5000) && (
              <button
                onClick={handleResetFilters}
                className="text-purple-400 hover:text-purple-300 font-bold underline"
              >
                Clear all active filters
              </button>
            )}
          </div>

          <EventGrid
            events={filteredEvents}
            onResetFilters={handleResetFilters}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <FilterDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        selectedCity={selectedCity}
        onCityChange={setSelectedCity}
        selectedCategories={selectedCategories}
        onCategoryToggle={handleCategoryToggle}
        selectedDate={dateFilter}
        onDateChange={setDateFilter}
        maxPrice={maxPrice}
        onPriceChange={setMaxPrice}
        onResetFilters={handleResetFilters}
      />
    </div>
  );
}
