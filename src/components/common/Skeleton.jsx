import React from 'react';

export function EventCardSkeleton() {
  return (
    <div className="bg-[#12151E] border border-gray-800/80 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-800/60 w-full" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-800/80 rounded-full w-20" />
          <div className="h-4 bg-gray-800/80 rounded-full w-14" />
        </div>
        <div className="h-6 bg-gray-800/80 rounded w-3/4" />
        <div className="h-4 bg-gray-800/60 rounded w-1/2" />
        <div className="pt-3 border-t border-gray-800/50 flex justify-between items-center">
          <div className="h-5 bg-gray-800/80 rounded w-24" />
          <div className="h-8 bg-gray-800/80 rounded-xl w-24" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <EventCardSkeleton key={i} />
      ))}
    </div>
  );
}
