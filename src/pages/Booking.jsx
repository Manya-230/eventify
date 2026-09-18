import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, User, CreditCard, ShieldCheck, Check, ArrowLeft, ArrowRight, Sparkles, Tag, IndianRupee } from 'lucide-react';
import { useEvents } from '../context/EventContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { formatDate, formatTime, formatPrice, generateBookingId } from '../utils/helpers';
import { QuantitySelector } from '../components/common/QuantitySelector';
import { Button } from '../components/common/Button';

export function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allEvents, addBooking } = useEvents();
  const { user } = useAuth();
  const { addToast } = useToast();

  const event = allEvents.find((e) => e.id === id) || allEvents[0];

  // Wizard Step (1: Ticket Tier & Qty, 2: Customer Details, 3: Review & Pay)
  const [step, setStep] = useState(1);

  // Selected Ticket Tier
  const [selectedTier, setSelectedTier] = useState(event.ticketTypes?.[0] || {
    id: "ga", name: "General Admission", price: event.price, remaining: 25
  });
  const [quantity, setQuantity] = useState(1);

  // Form Fields
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');

  // Promo Code State
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);

  // Sync user profile when available
  useEffect(() => {
    if (user) {
      if (!name) setName(user.name);
      if (!email) setEmail(user.email);
      if (!phone) setPhone(user.phone || '+91 98765 43210');
    }
  }, [user]);

  // Calculations
  const subtotal = selectedTier.price * quantity;
  const platformFee = 99;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const taxableAmount = subtotal - discountAmount + platformFee;
  const gstTax = Math.round(taxableAmount * 0.18);
  const grandTotal = taxableAmount + gstTax;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'EVENTIFY10') {
      setDiscountPercent(10);
      setPromoApplied(true);
      addToast('Promo code EVENTIFY10 applied! (10% OFF)', 'success');
    } else {
      addToast('Invalid promo code. Try "EVENTIFY10"', 'error');
    }
  };

  const handleProceedToStep2 = () => {
    setStep(2);
  };

  const handleProceedToStep3 = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      addToast('Please fill in all attendee details', 'error');
      return;
    }
    setStep(3);
  };

  const handleConfirmPayment = () => {
    const bookingPayload = {
      id: generateBookingId(),
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.date,
      eventTime: event.time,
      venue: event.venue,
      city: event.city,
      ticketTypeId: selectedTier.id,
      ticketTypeName: selectedTier.name,
      quantity,
      unitPrice: selectedTier.price,
      subtotal,
      platformFee,
      discountAmount,
      gstTax,
      totalPrice: grandTotal,
      customerName: name,
      customerEmail: email,
      customerPhone: phone
    };

    const createdBooking = addBooking(bookingPayload);
    if (createdBooking) {
      navigate('/booking/success', { state: { booking: createdBooking, event } });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header & Back Action */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
          Checkout Step {step} of 3
        </span>
      </div>

      {/* Progress Bar Indicator */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { num: 1, label: 'Select Passes' },
          { num: 2, label: 'Attendee Details' },
          { num: 3, label: 'Order Summary' }
        ].map((s) => (
          <div key={s.num} className="space-y-2">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${
              step >= s.num ? 'bg-gradient-to-r from-purple-600 to-indigo-500 shadow-md shadow-purple-600/30' : 'bg-gray-800'
            }`} />
            <span className={`text-[11px] font-bold block truncate ${
              step >= s.num ? 'text-white' : 'text-gray-500'
            }`}>
              {s.num}. {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Event Header Banner Summary */}
      <div className="p-5 rounded-2xl bg-[#12151E] border border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={event.image}
            alt={event.title}
            className="w-16 h-16 rounded-xl object-cover ring-1 ring-gray-800 shrink-0"
          />
          <div>
            <h3 className="text-base font-bold text-white font-heading">{event.title}</h3>
            <p className="text-xs text-gray-400">
              {formatDate(event.date)} at {formatTime(event.time)} • {event.venue}, {event.city}
            </p>
          </div>
        </div>
      </div>

      {/* STEP 1: SELECT TICKET TIER & QUANTITY */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 bg-[#12151E] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white font-heading">Choose Ticket Category</h3>
            <p className="text-xs text-gray-400">Select your preferred tier and quantity of passes.</p>
          </div>

          {/* Tier Cards */}
          <div className="space-y-3">
            {event.ticketTypes?.map((ticket) => {
              const isSelected = selectedTier.id === ticket.id;
              return (
                <div
                  key={ticket.id}
                  onClick={() => setSelectedTier(ticket)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-purple-950/70 border-purple-500 text-white shadow-xl shadow-purple-950/40 ring-1 ring-purple-500'
                      : 'bg-gray-900/70 border-gray-800 hover:border-gray-700 hover:bg-gray-800/80 text-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold font-heading">{ticket.name}</h4>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />}
                      </div>
                      <p className="text-xs text-gray-400">{ticket.description}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-lg font-extrabold text-white font-mono">
                        {formatPrice(ticket.price)}
                      </span>
                      <span className="text-[10px] text-amber-400 block font-semibold">
                        {ticket.remaining} left
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quantity Selector */}
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
            <div>
              <span className="text-sm font-bold text-white block">Number of Tickets</span>
              <span className="text-xs text-gray-400">Max 10 tickets per order</span>
            </div>
            <QuantitySelector
              quantity={quantity}
              onChange={setQuantity}
              min={1}
              max={Math.min(10, selectedTier.remaining || 10)}
            />
          </div>

          {/* Subtotal Preview */}
          <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
            <span className="text-sm text-gray-400">Subtotal</span>
            <span className="text-xl font-extrabold text-white font-mono">{formatPrice(subtotal)}</span>
          </div>

          <Button variant="primary" fullWidth size="lg" icon={ArrowRight} onClick={handleProceedToStep2}>
            Continue to Attendee Details
          </Button>
        </motion.div>
      )}

      {/* STEP 2: ATTENDEE DETAILS */}
      {step === 2 && (
        <motion.form
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleProceedToStep3}
          className="space-y-6 bg-[#12151E] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white font-heading">Attendee Details</h3>
            <p className="text-xs text-gray-400">Your digital passes and booking ID will be sent here.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-300 block mb-1.5">Full Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Rivera"
                className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@example.com"
                  className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
            <Button variant="secondary" size="lg" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit" variant="primary" fullWidth size="lg" icon={ArrowRight}>
              Proceed to Summary & Pay
            </Button>
          </div>
        </motion.form>
      )}

      {/* STEP 3: ORDER SUMMARY & PAYMENT */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6 bg-[#12151E] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white font-heading">Order Summary</h3>
            <p className="text-xs text-gray-400">Review your ticket calculation and confirm simulated payment.</p>
          </div>

          {/* Promo Code Input */}
          <form onSubmit={handleApplyPromo} className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Promo Code (Use: EVENTIFY10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white uppercase focus:outline-none"
              />
            </div>
            <Button type="submit" variant="outline" size="sm">
              Apply
            </Button>
          </form>

          {/* Detailed Price Breakdown Table */}
          <div className="space-y-3 pt-3 border-t border-gray-800 text-xs">
            <div className="flex justify-between text-gray-300">
              <span>{selectedTier.name} × {quantity} ticket(s)</span>
              <span className="font-mono font-bold text-white">{formatPrice(subtotal)}</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Platform & Booking Fee</span>
              <span className="font-mono text-white">₹{platformFee}</span>
            </div>

            {promoApplied && (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Promo Discount (10% OFF)</span>
                <span className="font-mono">-₹{discountAmount}</span>
              </div>
            )}

            <div className="flex justify-between text-gray-400">
              <span>Govt Taxes & GST (18%)</span>
              <span className="font-mono text-white">₹{gstTax}</span>
            </div>

            <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-base font-extrabold text-white">
              <span>Total Payable Amount</span>
              <span className="text-2xl text-purple-300 font-mono">{formatPrice(grandTotal)}</span>
            </div>
          </div>

          {/* Simulated Payment Notice */}
          <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/40 text-xs text-purple-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Portfolio Demo Mode:</strong> Clicking "Complete Booking" will simulate payment processing and instantly issue your QR-coded digital pass.
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <Button variant="secondary" size="lg" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button
              variant="primary"
              fullWidth
              size="lg"
              icon={CreditCard}
              onClick={handleConfirmPayment}
            >
              Complete Booking ({formatPrice(grandTotal)})
            </Button>
          </div>
        </motion.div>
      )}

    </div>
  );
}
