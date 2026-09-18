import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

// Pages
import { Home } from './pages/Home';
import { Discover } from './pages/Discover';
import { EventDetails } from './pages/EventDetails';
import { Booking } from './pages/Booking';
import { BookingSuccess } from './pages/BookingSuccess';
import { MyTickets } from './pages/MyTickets';
import { Wishlist } from './pages/Wishlist';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { About } from './pages/About';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <EventProvider>
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-[#090B10] text-gray-100 selection:bg-purple-600 selection:text-white">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/events/:id" element={<EventDetails />} />
                  <Route path="/booking/:id" element={<Booking />} />
                  <Route path="/booking/success" element={<BookingSuccess />} />
                  <Route path="/tickets" element={<MyTickets />} />
                  <Route path="/tickets/:id" element={<MyTickets />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/about" element={<About />} />
                  {/* Fallback route */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </EventProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
