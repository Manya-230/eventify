import React from 'react';
import { Calendar, Clock, MapPin, Ticket as TicketIcon, User, Download, Share2, AlertCircle } from 'lucide-react';
import { formatDate, formatTime, formatPrice } from '../../utils/helpers';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

export function DigitalTicket({ booking, event }) {
  if (!booking || !event) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-md mx-auto bg-[#161922] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/40 select-none">
      
      {/* Header Banner */}
      <div className="relative h-44 bg-gray-900 overflow-hidden">
        <img
          src={event.coverImage || event.image}
          alt={event.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161922] via-[#161922]/50 to-transparent" />
        
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <Badge variant={booking.status === 'Confirmed' ? 'confirmed' : 'cancelled'}>
            {booking.status === 'Confirmed' ? 'Official Pass' : 'Cancelled'}
          </Badge>
          <span className="text-[10px] font-mono tracking-widest text-purple-300 bg-black/60 px-2.5 py-1 rounded-full border border-purple-500/40">
            {booking.id}
          </span>
        </div>

        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="text-xl font-black text-white leading-tight font-heading truncate">
            {event.title}
          </h3>
        </div>
      </div>

      {/* Ticket Details Body */}
      <div className="p-6 space-y-5">
        
        {/* Date & Time Grid */}
        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-gray-900/80 border border-gray-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1 mb-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" /> Date
            </span>
            <p className="text-xs font-bold text-white">{formatDate(event.date)}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1 mb-1">
              <Clock className="w-3.5 h-3.5 text-purple-400" /> Doors Open
            </span>
            <p className="text-xs font-bold text-white">{formatTime(event.time)}</p>
          </div>
        </div>

        {/* Venue Info */}
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-purple-400" /> Venue & Location
          </span>
          <p className="text-sm font-bold text-white">{event.venue}</p>
          <p className="text-xs text-gray-400">{event.address}, {event.city}</p>
        </div>

        {/* Tier & Passenger Info */}
        <div className="grid grid-cols-2 gap-4 pt-3 border-t border-gray-800/80">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
              Ticket Tier
            </span>
            <p className="text-xs font-bold text-purple-300">{booking.ticketTypeName || 'General Admission'}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
              Quantity / Admit
            </span>
            <p className="text-xs font-bold text-white font-mono">{booking.quantity} Person(s)</p>
          </div>
        </div>

        <div className="pt-2 border-t border-gray-800/80">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
            Pass Holder
          </span>
          <p className="text-xs font-semibold text-gray-200">{booking.customerName || 'Alex Rivera'}</p>
          <p className="text-[11px] text-gray-500">{booking.customerEmail || 'alex@eventify.com'}</p>
        </div>

        {/* Divider Cutout Circles */}
        <div className="relative py-2 flex items-center justify-center">
          <div className="w-full border-t border-dashed border-gray-700" />
          <div className="absolute -left-9 w-6 h-6 rounded-full bg-[#090B10]" />
          <div className="absolute -right-9 w-6 h-6 rounded-full bg-[#090B10]" />
        </div>

        {/* QR Code & Barcode Section */}
        <div className="flex flex-col items-center justify-center space-y-3 pt-1">
          <div className="p-3 bg-white rounded-2xl shadow-xl flex items-center justify-center">
            {/* Custom SVG QR Code Mockup */}
            <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="100" height="100" fill="white" />
              {/* Corner Boxes */}
              <rect x="10" y="10" width="25" height="25" fill="#090B10" />
              <rect x="15" y="15" width="15" height="15" fill="white" />
              <rect x="18" y="18" width="9" height="9" fill="#090B10" />

              <rect x="65" y="10" width="25" height="25" fill="#090B10" />
              <rect x="70" y="15" width="15" height="15" fill="white" />
              <rect x="73" y="18" width="9" height="9" fill="#090B10" />

              <rect x="10" y="65" width="25" height="25" fill="#090B10" />
              <rect x="15" y="70" width="15" height="15" fill="white" />
              <rect x="18" y="73" width="9" height="9" fill="#090B10" />

              {/* Data Blocks */}
              <rect x="42" y="12" width="12" height="6" fill="#090B10" />
              <rect x="42" y="24" width="6" height="12" fill="#090B10" />
              <rect x="12" y="42" width="16" height="6" fill="#090B10" />
              <rect x="36" y="42" width="28" height="8" fill="#090B10" />
              <rect x="72" y="42" width="16" height="6" fill="#090B10" />
              <rect x="42" y="65" width="18" height="18" fill="#090B10" />
              <rect x="68" y="68" width="18" height="18" fill="#090B10" />
            </svg>
          </div>
          
          <p className="text-[11px] font-mono text-gray-400 tracking-widest uppercase">
            SCAN AT GATE FOR ACCESS
          </p>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 flex items-center gap-3">
          <Button variant="secondary" fullWidth size="sm" icon={Download} onClick={handlePrint}>
            Download Pass
          </Button>
        </div>
      </div>
    </div>
  );
}
