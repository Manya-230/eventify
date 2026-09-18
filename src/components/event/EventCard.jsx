import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Heart, Sparkles, ArrowUpRight } from 'lucide-react';
import { formatDate, formatTime, formatPrice } from '../../utils/helpers';
import { useEvents } from '../../context/EventContext';
import { Badge } from '../common/Badge';

export function EventCard({ event, priority = false }) {
  const navigate = useNavigate();
  const { isWishlisted, toggleWishlist } = useEvents();
  const wishlisted = isWishlisted(event.id);

  const handleHeartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(event.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="group relative bg-[#12151E] border border-gray-800/90 rounded-2xl overflow-hidden flex flex-col h-full shadow-lg hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/20 transition-all duration-300"
    >
      {/* Event Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-900">
        <img
          src={event.image}
          alt={event.title}
          loading={priority ? "eager" : "lazy"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12151E] via-transparent to-black/30" />

        {/* Badges Top Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          <Badge variant="category">{event.category}</Badge>
          
          {/* Wishlist Heart Button */}
          <button
            onClick={handleHeartClick}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all ${
              wishlisted
                ? 'bg-rose-500/90 text-white shadow-lg shadow-rose-500/40 scale-110'
                : 'bg-black/40 text-gray-300 hover:text-rose-400 hover:bg-black/70'
            }`}
            aria-label="Save to Wishlist"
          >
            <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Trending / Featured Overlay Tag */}
        {event.featured && (
          <div className="absolute bottom-3 left-3 z-10">
            <Badge variant="featured">
              <Sparkles className="w-3 h-3" /> Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2.5">
          {/* Date & Time Pill */}
          <div className="flex items-center gap-3 text-xs font-semibold text-purple-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>{formatDate(event.date)}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>{formatTime(event.time)}</span>
            </div>
          </div>

          {/* Event Title */}
          <Link to={`/events/${event.id}`} className="block group-hover:text-purple-300 transition-colors">
            <h3 className="text-lg font-bold text-white leading-snug line-clamp-2 font-heading">
              {event.title}
            </h3>
          </Link>

          {/* Venue & City */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span className="truncate">{event.venue}, <strong className="text-gray-300 font-medium">{event.city}</strong></span>
          </div>
        </div>

        {/* Footer Bar: Price & CTA */}
        <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider block">Starts From</span>
            <span className="text-base font-extrabold text-white font-mono">{formatPrice(event.price)}</span>
          </div>

          <Link
            to={`/events/${event.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-purple-300 bg-purple-950/60 hover:bg-purple-900 border border-purple-800/60 px-3.5 py-2 rounded-xl transition-all group-hover:text-white group-hover:border-purple-500"
          >
            <span>Book</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
