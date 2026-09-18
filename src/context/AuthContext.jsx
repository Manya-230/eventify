import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { useToast } from './ToastContext';

const AuthContext = createContext();

const DEMO_USER = {
  id: "usr-demo-77",
  name: "Alex Rivera",
  email: "alex.rivera@eventify.com",
  phone: "+91 98765 43210",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  memberSince: "2024",
  favoriteCategory: "Techno"
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();

  useEffect(() => {
    const savedUser = storage.getUser();
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  const loginDemoUser = () => {
    setUser(DEMO_USER);
    storage.setUser(DEMO_USER);
    addToast('Logged in as Demo User (Alex Rivera)', 'success');
  };

  const login = (email, password) => {
    const loggedInUser = {
      id: `usr-${Date.now()}`,
      name: email.split('@')[0].replace('.', ' '),
      email,
      phone: "+91 98765 12345",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      memberSince: "2026",
      favoriteCategory: "Concerts"
    };
    setUser(loggedInUser);
    storage.setUser(loggedInUser);
    addToast('Successfully signed in!', 'success');
    return true;
  };

  const signup = (name, email, password) => {
    const newUser = {
      id: `usr-${Date.now()}`,
      name,
      email,
      phone: "+91 98765 99999",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
      memberSince: "2026",
      favoriteCategory: "Techno"
    };
    setUser(newUser);
    storage.setUser(newUser);
    addToast('Welcome to Eventify! Account created.', 'success');
    return true;
  };

  const logout = () => {
    setUser(null);
    storage.setUser(null);
    addToast('Signed out successfully', 'info');
  };

  const updateProfile = (updatedFields) => {
    if (!user) return;
    const updated = { ...user, ...updatedFields };
    setUser(updated);
    storage.setUser(updated);
    addToast('Profile updated', 'success');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        loginDemoUser,
        login,
        signup,
        logout,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
