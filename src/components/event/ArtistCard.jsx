import React from 'react';
import { Disc, Music } from 'lucide-react';

export function ArtistCard({ artist }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-purple-500/40 hover:bg-gray-800/60 transition-all group">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/30 group-hover:scale-105 transition-transform"
      />
      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block">
          {artist.role}
        </span>
        <h4 className="text-base font-bold text-white truncate font-heading group-hover:text-purple-300 transition-colors">
          {artist.name}
        </h4>
        <p className="text-xs text-gray-400 truncate flex items-center gap-1 mt-0.5">
          <Disc className="w-3 h-3 text-gray-500 shrink-0" />
          <span>{artist.genre}</span>
        </p>
      </div>
    </div>
  );
}
