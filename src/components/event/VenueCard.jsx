import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Users } from 'lucide-react';

export function VenueCard({ venue }) {
  return (
    <Link to={`/discover?city=${encodeURIComponent(venue.city)}`}>
      <div className="group relative rounded-2xl bg-[#12151E] border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
        <div className="relative h-40 overflow-hidden">
          <img
            src={venue.image}
            alt={venue.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12151E] via-black/40 to-transparent" />
          
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-xs font-bold text-amber-400 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>{venue.rating}</span>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h4 className="text-base font-bold text-white font-heading group-hover:text-purple-300 transition-colors">
            {venue.name}
          </h4>
          <p className="text-xs text-gray-400 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span>{venue.address}</span>
          </p>
          <div className="pt-2 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-gray-500" />
              <span>Cap: {venue.capacity.toLocaleString()}</span>
            </span>
            <span className="text-purple-400 font-semibold">{venue.upcomingEventsCount} events</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
