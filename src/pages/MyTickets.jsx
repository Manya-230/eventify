import React, { useState } from 'react';
import { useEvents } from '../context/EventContext';
import { TicketCard } from '../components/ticket/TicketCard';
import { TicketModal } from '../components/ticket/TicketModal';
import { EmptyState } from '../components/common/EmptyState';
import { Ticket } from 'lucide-react';

export function MyTickets() {
  const { bookings, cancelBooking, allEvents } = useEvents();

  const [activeTab, setActiveTab] = useState('upcoming'); // 'upcoming', 'past', 'cancelled'
  const [selectedBookingForModal, setSelectedBookingForModal] = useState(null);

  // Filter bookings by tab
  const filteredBookings = bookings.filter((b) => {
    if (activeTab === 'cancelled') return b.status === 'Cancelled';
    if (b.status === 'Cancelled') return false;

    const evt = allEvents.find((e) => e.id === b.eventId);
    const evtDate = evt ? new Date(evt.date) : new Date();
    const today = new Date();

    if (activeTab === 'upcoming') {
      return evtDate >= today;
    } else {
      return evtDate < today;
    }
  });

  const handleCancelPass = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this ticket pass?')) {
      cancelBooking(bookingId);
    }
  };

  const selectedEventModal = selectedBookingForModal
    ? allEvents.find((e) => e.id === selectedBookingForModal.eventId)
    : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-purple-400">
          <Ticket className="w-5 h-5" />
          <span className="text-xs font-mono uppercase font-bold tracking-widest">My Passes</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          My Digital Tickets
        </h1>
        <p className="text-sm text-gray-400">
          Manage your upcoming event passes, QR codes, and booking receipts.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-800 pb-3">
        {[
          { id: 'upcoming', label: 'Upcoming Events' },
          { id: 'past', label: 'Past Events' },
          { id: 'cancelled', label: 'Cancelled Passes' }
        ].map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? 'bg-purple-950/80 border border-purple-500/60 text-purple-200 shadow-md shadow-purple-950/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Ticket List or Empty State */}
      {filteredBookings.length === 0 ? (
        <EmptyState
          type="tickets"
          title={`No ${activeTab} tickets found`}
          description="When you book tickets to concerts, festivals, or workshops, your passes will show up here."
          actionText="Discover Events Now"
          actionLink="/discover"
        />
      ) : (
        <div className="space-y-4">
          {filteredBookings.map((b) => {
            const evt = allEvents.find((e) => e.id === b.eventId);
            return (
              <TicketCard
                key={b.id}
                booking={b}
                event={evt}
                onViewPass={(booking) => setSelectedBookingForModal(booking)}
                onCancelPass={handleCancelPass}
              />
            );
          })}
        </div>
      )}

      {/* Pass Preview Modal */}
      <TicketModal
        isOpen={!!selectedBookingForModal}
        onClose={() => setSelectedBookingForModal(null)}
        booking={selectedBookingForModal}
        event={selectedEventModal}
      />
    </div>
  );
}
