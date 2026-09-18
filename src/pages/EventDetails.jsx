import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Heart, Share2, ShieldCheck, Ticket, Users, Sparkles, CheckCircle2, ArrowLeft, Disc } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { formatDate, formatTime, formatPrice } from '../utils/helpers';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ArtistCard } from '../components/event/ArtistCard';
import { EventCard } from '../components/event/EventCard';

export function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allEvents, isWishlisted, toggleWishlist } = useEvents();

  const event = allEvents.find((e) => e.id === id) || allEvents[0];
  const wishlisted = isWishlisted(event.id);

  // Find similar events in same category or city
  const similarEvents = allEvents
    .filter((e) => e.id !== event.id && (e.category === event.category || e.city === event.city))
    .slice(0, 3);

  return (
    <div className="pb-24 space-y-12">
      
      {/* 1. HERO COVER & HEADER */}
      <div className="relative w-full min-h-[60vh] bg-gray-950 overflow-hidden flex items-end pb-12 pt-28">
        {/* Cover Background */}
        <img
          src={event.coverImage || event.image}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-[#090B10]/70 to-black/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-gray-800 text-xs font-semibold text-gray-300 hover:text-white hover:bg-black/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Events</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Title & Metadata Left */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="category">{event.category}</Badge>
                <Badge variant="outline">{event.eventType}</Badge>
                {event.ageLimit && <Badge variant="outline">{event.ageLimit}</Badge>}
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight font-heading">
                {event.title}
              </h1>

              <p className="text-gray-300 text-base max-w-2xl font-normal leading-relaxed">
                {event.tagline || event.description}
              </p>

              {/* Event Metadata Cards */}
              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-semibold text-gray-200">
                <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-md border border-gray-800 px-3.5 py-2 rounded-xl">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{formatDate(event.date)}</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-md border border-gray-800 px-3.5 py-2 rounded-xl">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <span>{formatTime(event.time)} ({event.duration})</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-md border border-gray-800 px-3.5 py-2 rounded-xl">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{event.venue}, {event.city}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Right Box */}
            <div className="lg:col-span-4 flex items-center justify-end gap-3">
              <button
                onClick={() => toggleWishlist(event.id)}
                className={`p-3.5 rounded-2xl border backdrop-blur-md transition-all ${
                  wishlisted
                    ? 'bg-rose-500/90 border-rose-400 text-white shadow-lg shadow-rose-500/40'
                    : 'bg-gray-900/80 border-gray-800 text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                title="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-current' : ''}`} />
              </button>

              <Link to={`/booking/${event.id}`} className="flex-1">
                <Button variant="primary" fullWidth size="lg" icon={Ticket}>
                  Book Tickets — {formatPrice(event.price)}
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* 2. BODY CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Info Left Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* About Section */}
            <div className="bg-[#12151E] border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-xl font-bold text-white font-heading">
                About the Event
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {event.description}
              </p>

              {/* Event Highlights */}
              {event.highlights && event.highlights.length > 0 && (
                <div className="pt-4 space-y-3 border-t border-gray-800/80">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">
                    Experience Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {event.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Lineup / Performers Section */}
            {event.artists && event.artists.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Disc className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-bold text-white font-heading">
                    Artist Lineup & Performers
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.artists.map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                  ))}
                </div>
              </div>
            )}

            {/* Venue & Location Map Placeholder */}
            <div className="bg-[#12151E] border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="text-xl font-bold text-white font-heading">
                Venue & Map Location
              </h3>
              
              <div className="space-y-1">
                <h4 className="text-base font-bold text-purple-300">{event.venue}</h4>
                <p className="text-xs text-gray-400">{event.address}, {event.city}, {event.state}</p>
              </div>

              {/* Interactive Map Visual Placeholder */}
              <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                  alt="Venue Map"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-purple-950/20 backdrop-blur-xs" />
                <div className="absolute bg-black/80 backdrop-blur-md border border-purple-500/50 p-4 rounded-2xl text-center space-y-1.5 shadow-2xl">
                  <MapPin className="w-6 h-6 text-purple-400 mx-auto animate-bounce" />
                  <p className="text-xs font-bold text-white">{event.venue}</p>
                  <p className="text-[10px] text-gray-400">{event.city}, India</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(event.venue + ' ' + event.city)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-[11px] font-bold text-purple-400 underline pt-1"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Ticket Tier Box Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="bg-[#12151E] border border-gray-800 rounded-3xl p-6 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <h3 className="text-lg font-bold text-white font-heading">Ticket Categories</h3>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/40">
                  Selling Fast
                </span>
              </div>

              {/* Ticket Category Cards List */}
              <div className="space-y-3">
                {event.ticketTypes?.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="p-4 rounded-2xl bg-gray-900/90 border border-gray-800 space-y-2 hover:border-purple-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white font-heading">{ticket.name}</h4>
                      <span className="text-sm font-extrabold text-purple-300 font-mono">
                        {formatPrice(ticket.price)}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 leading-normal">{ticket.description}</p>
                    <div className="pt-1 flex items-center justify-between text-[11px] text-gray-500">
                      <span>Status: In Stock</span>
                      <span className="text-amber-400 font-semibold">{ticket.remaining} passes left</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Organizer Card */}
              {event.organizer && (
                <div className="pt-4 border-t border-gray-800 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 block">
                    Hosted by
                  </span>
                  <div className="flex items-center gap-3">
                    <img
                      src={event.organizer.avatar}
                      alt={event.organizer.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="text-xs font-bold text-white">{event.organizer.name}</h5>
                      <span className="text-[11px] text-purple-400">★ {event.organizer.rating} Rating ({event.organizer.eventsCount} events)</span>
                    </div>
                  </div>
                </div>
              )}

              <Link to={`/booking/${event.id}`}>
                <Button variant="primary" fullWidth size="lg" icon={Ticket}>
                  Book Tickets Now
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* 3. SIMILAR EVENTS */}
      {similarEvents.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-10 border-t border-gray-800/80">
          <h3 className="text-2xl font-extrabold text-white font-heading">
            You Might Also Like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </section>
      )}

      {/* Mobile Sticky Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090B10]/95 backdrop-blur-xl border-t border-gray-800 p-4 flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-gray-400 block uppercase font-mono">Starts From</span>
          <span className="text-lg font-black text-white font-mono">{formatPrice(event.price)}</span>
        </div>
        <Link to={`/booking/${event.id}`} className="flex-1">
          <Button variant="primary" fullWidth size="md" icon={Ticket}>
            Book Tickets
          </Button>
        </Link>
      </div>

    </div>
  );
}
