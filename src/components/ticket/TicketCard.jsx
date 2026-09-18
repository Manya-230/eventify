import React from 'react';
import { Calendar, MapPin, Ticket as TicketIcon, QrCode, XCircle } from 'lucide-react';
import { formatDate, formatPrice } from '../../utils/helpers';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export function TicketCard({ booking, event, onViewPass, onCancelPass }) {
  if (!event) return null;

  const isConfirmed = booking.status === 'Confirmed';

  return (
    <div className="bg-[#12151E] border border-gray-800 hover:border-purple-500/40 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 transition-all shadow-lg">
      {/* Event Graphic + Details */}
      <div className="flex items-center gap-4 flex-1">
        <img
          src={event.image}
          alt={event.title}
          className="w-20 h-20 rounded-xl object-cover ring-1 ring-gray-800 shrink-0"
        />
        <div className="space-y-1 min-w-0">
          <div className="flex items-center gap-2">
            <Badge variant={isConfirmed ? 'confirmed' : 'cancelled'}>
              {booking.status}
            </Badge>
            <span className="text-[10px] text-gray-500 font-mono">
              ID: {booking.id}
            </span>
          </div>

          <h4 className="text-base font-bold text-white truncate font-heading">
            {event.title}
          </h4>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
            <span className="flex items-center gap-1 text-purple-400 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(event.date)}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              {event.venue}, {event.city}
            </span>
          </div>
        </div>
      </div>

      {/* Ticket Meta & Action Buttons */}
      <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-gray-800 gap-3">
        <div className="text-left md:text-right">
          <span className="text-[10px] text-gray-500 block uppercase font-mono">
            {booking.quantity} Pass(es) • {booking.ticketTypeName}
          </span>
          <span className="text-base font-bold text-white font-mono">
            {formatPrice(booking.totalPrice)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isConfirmed && (
            <Button variant="outline" size="sm" icon={QrCode} onClick={() => onViewPass(booking)}>
              View Pass
            </Button>
          )}
          {isConfirmed && (
            <button
              onClick={() => onCancelPass(booking.id)}
              className="text-xs text-rose-400 hover:text-rose-300 p-2 rounded-xl hover:bg-rose-950/30 transition-colors"
              title="Cancel Pass"
            >
              <XCircle className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
