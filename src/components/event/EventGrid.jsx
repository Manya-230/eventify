import React from 'react';
import { EventCard } from './EventCard';
import { EmptyState } from '../common/EmptyState';

export function EventGrid({ events, loading = false, emptyTitle, emptyDescription, onResetFilters }) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-96 bg-gray-900/50 rounded-2xl animate-pulse border border-gray-800" />
        ))}
      </div>
    );
  }

  if (!events || events.length === 0) {
    return (
      <EmptyState
        type="search"
        title={emptyTitle || "No Events Match Your Filters"}
        description={emptyDescription || "Try resetting your search criteria, switching cities, or clearing category selections."}
        actionText="Reset All Filters"
        onAction={onResetFilters}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event, index) => (
        <EventCard key={event.id} event={event} priority={index < 3} />
      ))}
    </div>
  );
}
