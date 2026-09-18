import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Ticket, ArrowRight, Sparkles, Home } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DigitalTicket } from '../components/ticket/DigitalTicket';
import { Button } from '../components/common/Button';

export function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state?.booking;
  const event = location.state?.event;

  useEffect(() => {
    // Trigger celebration confetti on mount
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback silent
    }
  }, []);

  if (!booking || !event) {
    return (
      <div className="max-w-md mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-white">No active booking found</h2>
        <p className="text-xs text-gray-400">Head over to the discover catalog to explore events.</p>
        <Link to="/discover">
          <Button variant="primary">Discover Events</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 space-y-8 text-center">
      
      {/* Success Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="space-y-3"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-950/50">
          <CheckCircle2 className="w-10 h-10 animate-bounce" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
          Your Tickets Are Confirmed!
        </h1>
        <p className="text-sm text-gray-300 max-w-md mx-auto">
          We have saved your pass to your account. Present this digital ticket at the gate for scan entry.
        </p>
      </motion.div>

      {/* Digital Ticket Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <DigitalTicket booking={booking} event={event} />
      </motion.div>

      {/* Bottom Actions */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/tickets">
          <Button variant="primary" size="lg" icon={Ticket}>
            View All My Tickets
          </Button>
        </Link>
        <Link to="/">
          <Button variant="secondary" size="lg" icon={Home}>
            Return Home
          </Button>
        </Link>
      </div>

    </div>
  );
}
