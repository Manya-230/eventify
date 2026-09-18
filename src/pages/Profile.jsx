import React, { useState } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid } from 'recharts';
import { User, Mail, Phone, Ticket, Heart, Calendar, IndianRupee, Sparkles, Edit3, ShieldCheck, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useEvents } from '../context/EventContext';
import { formatPrice } from '../utils/helpers';
import { Button } from '../components/common/Button';

export function Profile() {
  const { user, loginDemoUser, logout, updateProfile, isAuthenticated } = useAuth();
  const { bookings, wishlist, allEvents } = useEvents();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || 'Alex Rivera');
  const [email, setEmail] = useState(user?.email || 'alex.rivera@eventify.com');
  const [phone, setPhone] = useState(user?.phone || '+91 98765 43210');

  // Compute Analytics Metrics
  const activeBookings = bookings.filter((b) => b.status === 'Confirmed');
  const totalBookingsCount = activeBookings.reduce((acc, b) => acc + (b.quantity || 1), 0);
  const totalSpentAmount = activeBookings.reduce((acc, b) => acc + (b.totalPrice || 0), 0);

  // Mock Recharts Monthly Spending Data
  const chartData = [
    { month: 'May', spent: 1499 },
    { month: 'Jun', spent: 999 },
    { month: 'Jul', spent: 2499 },
    { month: 'Aug', spent: 1750 },
    { month: 'Sep', spent: totalSpentAmount > 0 ? totalSpentAmount : 2999 },
    { month: 'Oct', spent: 3499 }
  ];

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile({ name, email, phone });
    setIsEditing(false);
  };

  if (!isAuthenticated && !user) {
    return (
      <div className="max-w-md mx-auto py-20 px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-400 flex items-center justify-center mx-auto">
          <User className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-white font-heading">User Dashboard</h2>
        <p className="text-xs text-gray-400">Sign in to view your analytics, ticket history, and profile.</p>
        <Button variant="primary" fullWidth size="lg" onClick={loginDemoUser}>
          Sign In as Demo User
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* 1. PROFILE HEADER CARD */}
      <div className="bg-[#12151E] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center gap-5">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-4 ring-purple-500/30 shadow-xl"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {user.name}
                </h1>
                <span className="text-[10px] font-bold text-purple-300 bg-purple-950 border border-purple-800 px-2.5 py-0.5 rounded-full">
                  Member
                </span>
              </div>
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gray-500" />
                <span>{user.email}</span>
              </p>
              <p className="text-xs text-gray-400 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gray-500" />
                <span>{user.phone || '+91 98765 43210'}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={Edit3}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
            <Button variant="danger" size="sm" icon={LogOut} onClick={logout}>
              Sign Out
            </Button>
          </div>

        </div>

        {/* Edit Form Drawer */}
        {isEditing && (
          <form onSubmit={handleSaveProfile} className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-400 block mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 block mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-400 block mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl px-3 py-2 text-xs text-white"
              />
            </div>
            <div className="sm:col-span-3 flex justify-end">
              <Button type="submit" variant="primary" size="sm">
                Save Changes
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* 2. METRICS STATS CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl bg-[#12151E] border border-gray-800 space-y-2">
          <div className="flex items-center justify-between text-purple-400">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Bookings</span>
            <Ticket className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black text-white font-mono">{totalBookingsCount}</p>
          <span className="text-[11px] text-gray-500">Confirmed passes</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#12151E] border border-gray-800 space-y-2">
          <div className="flex items-center justify-between text-emerald-400">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Total Spent</span>
            <IndianRupee className="w-5 h-5" />
          </div>
          <p className="text-3xl font-black text-white font-mono">{formatPrice(totalSpentAmount)}</p>
          <span className="text-[11px] text-gray-500">Total ticket spend</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#12151E] border border-gray-800 space-y-2">
          <div className="flex items-center justify-between text-rose-400">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Wishlist Events</span>
            <Heart className="w-5 h-5 fill-current" />
          </div>
          <p className="text-3xl font-black text-white font-mono">{wishlist.length}</p>
          <span className="text-[11px] text-gray-500">Saved experiences</span>
        </div>

        <div className="p-5 rounded-2xl bg-[#12151E] border border-gray-800 space-y-2">
          <div className="flex items-center justify-between text-amber-400">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Top Category</span>
            <Sparkles className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-white font-heading">Techno</p>
          <span className="text-[11px] text-gray-500">Preferred genre</span>
        </div>

      </div>

      {/* 3. RECHARTS ACTIVITY VISUALIZATION */}
      <div className="bg-[#12151E] border border-gray-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div>
          <h3 className="text-xl font-bold text-white font-heading">Monthly Ticket Spending</h3>
          <p className="text-xs text-gray-400 mt-0.5">Overview of monthly investments in live music and experiences.</p>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#232838" />
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} tickLine={false} />
              <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} tickFormatter={(val) => `₹${val}`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#161922', borderColor: '#374151', borderRadius: '12px', color: '#FFF' }}
                formatter={(value) => [`₹${value}`, 'Spent']}
              />
              <Bar dataKey="spent" radius={[8, 8, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === chartData.length - 2 ? '#8B5CF6' : '#3B82F6'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}
