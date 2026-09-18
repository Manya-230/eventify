import React from 'react';
import { useEvents } from '../context/EventContext';
import { EventGrid } from '../components/event/EventGrid';
import { EmptyState } from '../components/common/EmptyState';
import { Heart } from 'lucide-react';

export function Wishlist() {
  const { wishlist, allEvents } = useEvents();

  const wishlistedEvents = allEvents.filter((e) => wishlist.includes(e.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-rose-400">
          <Heart className="w-5 h-5 fill-current" />
          <span className="text-xs font-mono uppercase font-bold tracking-widest">Wishlist</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Your Saved Events
        </h1>
        <p className="text-sm text-gray-400">
          Keep track of events you want to attend later.
        </p>
      </div>

      {/* Grid or Empty State */}
      {wishlistedEvents.length === 0 ? (
        <EmptyState
          type="wishlist"
          title="No saved events yet"
          description="Click the heart icon on any event card to save experience passes to your personal wishlist."
          actionText="Explore Events"
          actionLink="/discover"
        />
      ) : (
        <EventGrid events={wishlistedEvents} />
      )}
    </div>
  );
}
