import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { mockEvents } from '../data/mockEvents';
import { useToast } from './ToastContext';

const EventContext = createContext();

export function EventProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const { addToast } = useToast();

  useEffect(() => {
    setWishlist(storage.getWishlist());
    setBookings(storage.getBookings());
    setSelectedCity(storage.getLocation());
    setRecentSearches(storage.getRecentSearches());
  }, []);

  const handleToggleWishlist = (eventId) => {
    const updated = storage.toggleWishlist(eventId);
    setWishlist(updated);
    const isNowWishlisted = updated.includes(eventId);
    const targetEvt = mockEvents.find(e => e.id === eventId);
    const name = targetEvt ? targetEvt.title : 'Event';
    if (isNowWishlisted) {
      addToast(`Saved "${name}" to Wishlist`, 'success');
    } else {
      addToast(`Removed "${name}" from Wishlist`, 'info');
    }
  };

  const isWishlisted = (eventId) => {
    return wishlist.includes(eventId);
  };

  const handleAddBooking = (bookingData) => {
    const newBooking = storage.addBooking(bookingData);
    if (newBooking) {
      setBookings(prev => [newBooking, ...prev]);
      addToast('Ticket booked successfully!', 'success');
      return newBooking;
    }
    return null;
  };

  const handleCancelBooking = (bookingId) => {
    const updated = storage.cancelBooking(bookingId);
    setBookings(updated);
    addToast('Booking cancelled', 'info');
  };

  const handleSetCity = (city) => {
    setSelectedCity(city);
    storage.setLocation(city);
    addToast(`Location set to ${city}`, 'info');
  };

  const handleAddRecentSearch = (term) => {
    const updated = storage.addRecentSearch(term);
    if (updated) setRecentSearches(updated);
  };

  return (
    <EventContext.Provider
      value={{
        wishlist,
        toggleWishlist: handleToggleWishlist,
        isWishlisted,
        bookings,
        addBooking: handleAddBooking,
        cancelBooking: handleCancelBooking,
        selectedCity,
        setSelectedCity: handleSetCity,
        searchQuery,
        setSearchQuery,
        recentSearches,
        addRecentSearch: handleAddRecentSearch,
        allEvents: mockEvents
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within EventProvider');
  }
  return context;
}
