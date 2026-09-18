const KEYS = {
  WISHLIST: 'eventify_wishlist',
  BOOKINGS: 'eventify_bookings',
  USER: 'eventify_user',
  LOCATION: 'eventify_location',
  RECENT_SEARCHES: 'eventify_recent_searches'
};

export const storage = {
  // Wishlist
  getWishlist: () => {
    try {
      const data = localStorage.getItem(KEYS.WISHLIST);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading wishlist', e);
      return [];
    }
  },
  toggleWishlist: (eventId) => {
    try {
      const current = storage.getWishlist();
      const index = current.indexOf(eventId);
      let updated;
      if (index >= 0) {
        updated = current.filter(id => id !== eventId);
      } else {
        updated = [...current, eventId];
      }
      localStorage.setItem(KEYS.WISHLIST, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error updating wishlist', e);
      return [];
    }
  },
  isWishlisted: (eventId) => {
    const current = storage.getWishlist();
    return current.includes(eventId);
  },

  // Bookings
  getBookings: () => {
    try {
      const data = localStorage.getItem(KEYS.BOOKINGS);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error reading bookings', e);
      return [];
    }
  },
  addBooking: (booking) => {
    try {
      const current = storage.getBookings();
      const newBooking = {
        ...booking,
        id: booking.id || `EVT-${Date.now()}`,
        bookedAt: new Date().toISOString(),
        status: 'Confirmed'
      };
      const updated = [newBooking, ...current];
      localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(updated));
      return newBooking;
    } catch (e) {
      console.error('Error adding booking', e);
      return null;
    }
  },
  cancelBooking: (bookingId) => {
    try {
      const current = storage.getBookings();
      const updated = current.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' } : b);
      localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.error('Error cancelling booking', e);
      return [];
    }
  },

  // User Auth
  getUser: () => {
    try {
      const data = localStorage.getItem(KEYS.USER);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },
  setUser: (user) => {
    try {
      if (!user) {
        localStorage.removeItem(KEYS.USER);
      } else {
        localStorage.setItem(KEYS.USER, JSON.stringify(user));
      }
    } catch (e) {
      console.error('Error setting user', e);
    }
  },

  // Location
  getLocation: () => {
    try {
      return localStorage.getItem(KEYS.LOCATION) || 'All Cities';
    } catch (e) {
      return 'All Cities';
    }
  },
  setLocation: (city) => {
    try {
      localStorage.setItem(KEYS.LOCATION, city);
    } catch (e) {
      console.error('Error setting location', e);
    }
  },

  // Recent Searches
  getRecentSearches: () => {
    try {
      const data = localStorage.getItem(KEYS.RECENT_SEARCHES);
      return data ? JSON.parse(data) : ['Techno', 'Jaipur', 'Diljit Dosanjh', 'Comedy'];
    } catch (e) {
      return [];
    }
  },
  addRecentSearch: (query) => {
    if (!query || !query.trim()) return;
    try {
      const current = storage.getRecentSearches();
      const filtered = current.filter(item => item.toLowerCase() !== query.toLowerCase());
      const updated = [query.trim(), ...filtered].slice(0, 6);
      localStorage.setItem(KEYS.RECENT_SEARCHES, JSON.stringify(updated));
      return updated;
    } catch (e) {
      return [];
    }
  }
};
