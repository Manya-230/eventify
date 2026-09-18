import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Mail, Lock, LogIn, ArrowRight, UserCheck } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/common/Button';

export function Login() {
  const navigate = useNavigate();
  const { login, loginDemoUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
      navigate('/discover');
    }
  };

  const handleDemoClick = () => {
    loginDemoUser();
    navigate('/discover');
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#12151E] border border-gray-800 rounded-3xl p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-purple-600/30">
              <Sparkles className="w-5 h-5" />
            </div>
          </Link>
          <h2 className="text-2xl font-black text-white font-heading">Welcome Back</h2>
          <p className="text-xs text-gray-400">Sign in to manage your tickets and saved events.</p>
        </div>

        {/* Demo Fast Login Pill */}
        <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/50 space-y-2 text-center">
          <p className="text-xs font-bold text-purple-200">Recruiter / Portfolio Demo Mode</p>
          <p className="text-[11px] text-gray-400">One-click sign-in as Demo User (Alex Rivera)</p>
          <Button variant="primary" fullWidth size="sm" icon={UserCheck} onClick={handleDemoClick}>
            Explore as Demo User
          </Button>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-gray-800" />
          <span className="absolute bg-[#12151E] px-3 text-[10px] text-gray-500 uppercase font-mono">
            Or sign in with email
          </span>
        </div>

        {/* Standard Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-300 block mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@eventify.com"
                className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-300">Password</label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert("Use Demo Mode button above!"); }} className="text-[11px] text-purple-400 hover:underline">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-900 border border-gray-800 focus:border-purple-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <Button type="submit" variant="secondary" fullWidth size="md" icon={LogIn}>
            Sign In
          </Button>
        </form>

        <p className="text-center text-xs text-gray-400 pt-2">
          Don't have an account yet?{' '}
          <Link to="/signup" className="text-purple-400 font-bold hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}
