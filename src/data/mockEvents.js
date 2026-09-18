export const mockEvents = [
  {
    id: "evt-afterdark-techno-jaipur",
    title: "Afterdark — A Night of Techno",
    tagline: "Immersive warehouse rave with heavy basslines and hypnotic visual production.",
    description: "Prepare for an uninhibited journey into deep melodic techno and hypnotic underground rhythms. Afterdark brings international festival-tier sound design, laser projections, and an industrial rave atmosphere to Jaipur's rawest warehouse venue.",
    category: "Techno",
    eventType: "Nightlife",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=1600&q=80",
    date: "2026-10-17",
    time: "21:00",
    duration: "6 Hours",
    venue: "The Warehouse",
    address: "Plot 42, Industrial Area Phase 2, Near MI Road",
    city: "Jaipur",
    state: "Rajasthan",
    price: 999,
    featured: true,
    trending: true,
    popular: true,
    ageLimit: "21+",
    organizer: {
      name: "Subculture Collective",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      eventsCount: 24
    },
    artists: [
      {
        id: "art-6sxnse",
        name: "6.SXNSE",
        role: "Headliner / Producer",
        genre: "Peak Time / Driving Techno",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
        spotify: "https://spotify.com",
        instagram: "@6sxnse_music"
      },
      {
        id: "art-cyberpulse",
        name: "CyberPulse",
        role: "Opening Act",
        genre: "Melodic Techno",
        image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "ga", name: "General Admission", price: 999, description: "Entry to main warehouse floor + access to outdoor bar zone.", remaining: 45 },
      { id: "vip", name: "VIP Backstage & Deck", price: 1999, description: "Elevated view deck + express queue + complimentary welcome beverage.", remaining: 12 },
      { id: "early", name: "Early Bird Entry (Before 10 PM)", price: 699, description: "Valid for entry prior to 10:00 PM strictly.", remaining: 5 }
    ],
    highlights: ["State-of-the-Art Funktion-One Sound", "Curated 360-Degree Laser Mapping", "Safe Space & Zero Harassment Policy", "Premium Cocktail Bar & Artisanal Food Trucks"]
  },
  {
    id: "evt-sunburn-boris-mumbai",
    title: "Sunburn Arena ft. Boris Brejcha",
    tagline: "The High-Tech Minimal pioneer returns to India for an epic outdoor concert.",
    description: "Get ready for the joker mask sensation! Boris Brejcha brings his iconic High-Tech Minimal sound to Mumbai for a massive outdoor sunset-to-midnight festival experience.",
    category: "Techno",
    eventType: "Concert",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    date: "2026-11-22",
    time: "17:00",
    duration: "7 Hours",
    venue: "Jio World Garden",
    address: "BKC, Bandra East",
    city: "Mumbai",
    state: "Maharashtra",
    price: 1999,
    featured: true,
    trending: true,
    popular: true,
    ageLimit: "18+",
    organizer: {
      name: "Sunburn Asia",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 4.8,
      eventsCount: 150
    },
    artists: [
      {
        id: "art-boris",
        name: "Boris Brejcha",
        role: "Headliner",
        genre: "High-Tech Minimal",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "art-ann",
        name: "Ann Clue",
        role: "Direct Support",
        genre: "Techno",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "ga", name: "Phase 1 GA", price: 1999, description: "General access standing area", remaining: 120 },
      { id: "vip", name: "Fanpit VIP", price: 3999, description: "Front stage access + VIP bar lounge", remaining: 28 }
    ],
    highlights: ["Custom Mask Giveaway", "Huge Pyrotechnics Display", "Multi-stage Experience"]
  },
  {
    id: "evt-diljit-aura-delhi",
    title: "Diljit Dosanjh — Aura India Stadium Tour",
    tagline: "The biggest Punjabi music phenomenon comes to the capital.",
    description: "Experience Diljit Dosanjh performing his greatest hits live with a massive 40-piece band, visual pyrotechnics, and infectious energy that will turn Jawaharlal Nehru Stadium into a massive celebration.",
    category: "Concert",
    eventType: "Concert",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=80",
    date: "2026-10-30",
    time: "18:30",
    duration: "4 Hours",
    venue: "Jawaharlal Nehru Stadium",
    address: "Pragati Vihar, Lodhi Road",
    city: "Delhi",
    state: "Delhi NCR",
    price: 2499,
    featured: true,
    trending: true,
    popular: true,
    ageLimit: "All Ages",
    organizer: {
      name: "Live Nation India",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      eventsCount: 88
    },
    artists: [
      {
        id: "art-diljit",
        name: "Diljit Dosanjh",
        role: "Headliner",
        genre: "Punjabi Pop / Bhangra",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "silver", name: "Silver Standing", price: 2499, description: "Arena standing zone", remaining: 80 },
      { id: "gold", name: "Gold Seated", price: 4999, description: "Reserved lower tier stadium seating", remaining: 35 },
      { id: "fanpit", name: "Fan Pit Standing", price: 8999, description: "Front stage pit right next to Diljit!", remaining: 8 }
    ],
    highlights: ["Stadium Scale Audio & Lights", "Official Merchandise Stalls", "Family Friendly Seating Zones"]
  },
  {
    id: "evt-nh7-weekender-pune",
    title: "BACARDÍ NH7 Weekender 2026",
    tagline: "The happiest music festival featuring indie, rock, hip-hop, and electronic acts.",
    description: "Three days of music, comedy, food, and festival vibes under the winter Pune sky. Over 40 artists across 4 stages.",
    category: "Festival",
    eventType: "Festival",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1600&q=80",
    date: "2026-12-05",
    time: "15:00",
    duration: "3 Days",
    venue: "Mahalaxmi Lawns",
    address: "137, Airport Rd, Yerawada",
    city: "Pune",
    state: "Maharashtra",
    price: 2999,
    featured: true,
    trending: true,
    popular: true,
    ageLimit: "16+",
    organizer: {
      name: "OML Entertainment",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.8,
      eventsCount: 65
    },
    artists: [
      {
        id: "art-peter",
        name: "Peter Cat Recording Co.",
        role: "Indie Headliner",
        genre: "Cabaret / Gypsy Jazz",
        image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "art-seedhe",
        name: "Seedhe Maut",
        role: "Hip Hop Headliner",
        genre: "Desi Hip Hop",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "season", name: "3-Day Season Pass", price: 2999, description: "Access to all 3 days across all stages", remaining: 90 },
      { id: "under21", name: "Under 21 Season Pass", price: 1999, description: "Valid for attendees below 21 years with valid ID", remaining: 40 }
    ],
    highlights: ["Art Installations & Flea Market", "Ferris Wheel & Gaming Lounge", "Pet Friendly Zones"]
  },
  {
    id: "evt-deep-house-bengaluru",
    title: "Underground Deep House & Afro Night",
    tagline: "Soulful rhythms and melodic house vibes inside Bengaluru's top rooftop space.",
    description: "Escape into warm synth pads, afro-house percussion, and deep baselines on a lush open-air glass rooftop overlooking the city skyline.",
    category: "House",
    eventType: "Nightlife",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    date: "2026-09-20",
    time: "20:00",
    duration: "5 Hours",
    venue: "SkyDeck Rooftop Lounge",
    address: "UB City, Vittal Mallya Road",
    city: "Bengaluru",
    state: "Karnataka",
    price: 799,
    featured: false,
    trending: true,
    popular: true,
    ageLimit: "21+",
    organizer: {
      name: "Rooftop Groove Series",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.7,
      eventsCount: 30
    },
    artists: [
      {
        id: "art-aether",
        name: "Aetheria",
        role: "Headliner",
        genre: "Afro House / Organic House",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "stag", name: "Stag Entry", price: 799, description: "Includes 1 drink voucher", remaining: 15 },
      { id: "couple", name: "Couple Entry", price: 1299, description: "Entry for 2 + 2 drink vouchers", remaining: 25 }
    ],
    highlights: ["Sunset Cocktail Hour", "Craft Beer Tasting", "Panoramic City Skyline View"]
  },
  {
    id: "evt-zakir-khan-ahmedabad",
    title: "Zakir Khan Live — Stand-up Comedy Special",
    tagline: "The Sakht Launda brings his hilarious new solo special to Gujarat.",
    description: "An evening of relatable story-telling, belly-aching laughter, and heart-warming observations by India's favorite comedian Zakir Khan.",
    category: "Comedy",
    eventType: "Workshop",
    image: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    date: "2026-10-12",
    time: "19:00",
    duration: "2 Hours",
    venue: "Pandit Deendayal Auditorium",
    address: "SG Highway, Bodakdev",
    city: "Ahmedabad",
    state: "Gujarat",
    price: 699,
    featured: false,
    trending: true,
    popular: true,
    ageLimit: "16+",
    organizer: {
      name: "Comedy Circuit",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      eventsCount: 42
    },
    artists: [
      {
        id: "art-zakir",
        name: "Zakir Khan",
        role: "Comedian",
        genre: "Stand-Up Comedy",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "balcony", name: "Balcony Seating", price: 699, description: "Upper floor balcony views", remaining: 50 },
      { id: "prime", name: "Prime Seats", price: 1499, description: "Front rows central view", remaining: 10 }
    ],
    highlights: ["100% Brand New Unreleased Jokes", "Air-conditioned Theater", "Valet Parking Available"]
  },
  {
    id: "evt-goa-sunsets-beach-party",
    title: "Goa Sunsets & Beach House Gathering",
    tagline: "Dance on white sands with ocean breezes and deep disco grooves.",
    description: "An legendary beach club party starting at 4 PM with golden hour ocean views, fire dancers, fresh seafood, and melodic house curation.",
    category: "Nightlife",
    eventType: "Nightlife",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    date: "2026-11-14",
    time: "16:00",
    duration: "8 Hours",
    venue: "Thalassa Beach Club",
    address: "Vagator Beach Road",
    city: "Goa",
    state: "Goa",
    price: 1499,
    featured: true,
    trending: true,
    popular: true,
    ageLimit: "21+",
    organizer: {
      name: "Goa Underground Alliance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      eventsCount: 95
    },
    artists: [
      {
        id: "art-sunset-collective",
        name: "Vagator Sunset Collective",
        role: "Resident DJs",
        genre: "Nu-Disco / Sunset House",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "pass", name: "Beach Pass Entry", price: 1499, description: "Includes sunset cocktail voucher", remaining: 35 },
      { id: "table", name: "VIP Beach Bed (4 Pax)", price: 7999, description: "Reserved beach lounger + spirit bottle", remaining: 4 }
    ],
    highlights: ["Golden Hour Sunset Ritual", "Fire Show Performance", "Fresh Seafood & Woodfired Pizza"]
  },
  {
    id: "evt-uiux-creative-coding-bengaluru",
    title: "UI/UX & Creative Coding Masterclass",
    tagline: "Hands-on workshop for modern front-end engineers and UI designers.",
    description: "Learn how to build high-converting, visually stunning web applications with React, Tailwind CSS, Framer Motion, and WebGL shader effects.",
    category: "Workshop",
    eventType: "Workshop",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    date: "2026-10-08",
    time: "10:00",
    duration: "6 Hours",
    venue: "WeWork Galaxy",
    address: "43, Residency Rd, Shanthala Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    price: 499,
    featured: false,
    trending: false,
    popular: true,
    ageLimit: "All Ages",
    organizer: {
      name: "DesignCraft India",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      eventsCount: 18
    },
    artists: [
      {
        id: "art-alex",
        name: "Alex Rivera",
        role: "Lead UI Architect",
        genre: "Front-end Architecture",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "standard", name: "Workshop Ticket", price: 499, description: "Includes code templates & completion certificate", remaining: 18 }
    ],
    highlights: ["Live Code Reviews", "Networking Lunch Provided", "Certificate of Completion"]
  },
  {
    id: "evt-iit-delhi-rendezvous",
    title: "IIT Delhi Rendezvous '26 — Pro Night",
    tagline: "North India's largest college fest featuring Bollywood & EDM mainstages.",
    description: "Annual cultural festival of IIT Delhi featuring battle of bands, fashion show finals, star night concert, and food stalls from across Delhi NCR.",
    category: "College Events",
    eventType: "Festival",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
    date: "2026-10-24",
    time: "16:00",
    duration: "2 Days",
    venue: "IIT Delhi Campus Ground",
    address: "Hauz Khas, New Delhi",
    city: "Delhi",
    state: "Delhi NCR",
    price: 399,
    featured: false,
    trending: true,
    popular: true,
    ageLimit: "Students Only",
    organizer: {
      name: "IIT Delhi Cultural Board",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.8,
      eventsCount: 12
    },
    artists: [
      {
        id: "art-mitraz",
        name: "Mitraz",
        role: "Star Night Headliner",
        genre: "Indie Pop",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "student", name: "Student Pass (All Days)", price: 399, description: "Requires valid College ID at gate", remaining: 60 }
    ],
    highlights: ["Star Night Concert", "Inter-College Dance Battle", "Flea Market & Gaming Zone"]
  },
  {
    id: "evt-jaipur-beat-fest",
    title: "Jaipur Beat Fest — Indie & Acoustic Night",
    tagline: "Serene acoustic indie rock at the historic Nahargarh Fort foothills.",
    description: "Immerse yourself in soul-stirring indie melodies, folk fusion tunes, and acoustic singer-songwriter performances framed against illuminated heritage walls.",
    category: "Bollywood",
    eventType: "Concert",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=80",
    date: "2026-11-01",
    time: "18:00",
    duration: "5 Hours",
    venue: "Nahargarh Amphitheatre",
    address: "Krishna Nagar, Brahmpuri",
    city: "Jaipur",
    state: "Rajasthan",
    price: 899,
    featured: false,
    trending: false,
    popular: true,
    ageLimit: "All Ages",
    organizer: {
      name: "Pink City Sounds",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 4.7,
      eventsCount: 22
    },
    artists: [
      {
        id: "art-parvaaz",
        name: "Parvaaz",
        role: "Headliner",
        genre: "Psychedelic Rock / Fusion",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "ga", name: "Amphitheatre Seating", price: 899, description: "Open seating pass", remaining: 40 }
    ],
    highlights: ["Acoustic Unplugged Vibes", "Heritage Royal Decor", "Rajasthani Gourmet Food Stalls"]
  },
  {
    id: "evt-sip-and-paint-mumbai",
    title: "Neon Sip & Paint Art Social",
    tagline: "Unwind with wine, glowing paints, and blacklight canvas art.",
    description: "No painting experience needed! Grab a brush, sip your favorite cocktail, and paint glowing fluorescent artwork under UV blacklight with guided instructions.",
    category: "Workshop",
    eventType: "Workshop",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80",
    date: "2026-09-28",
    time: "16:00",
    duration: "3 Hours",
    venue: "Artisan Studio Lounge",
    address: "Khar West, Linking Road",
    city: "Mumbai",
    state: "Maharashtra",
    price: 750,
    featured: false,
    trending: false,
    popular: false,
    ageLimit: "21+",
    organizer: {
      name: "Art & Unwind Society",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      eventsCount: 35
    },
    artists: [],
    ticketTypes: [
      { id: "single", name: "Solo Artist Pass", price: 750, description: "Includes canvas, neon paints, apron & 1 wine glass", remaining: 10 }
    ],
    highlights: ["All Art Materials Provided", "Complimentary Glass of Sangria", "Take Home Your Glowing Canvas"]
  },
  {
    id: "evt-psytrance-goa-nye",
    title: "Hypnotic Psytrance Gathering — NYE 2027",
    tagline: "Ring in the New Year on the magical cliffs of Vagator with non-stop psytrance.",
    description: "A 24-hour non-stop psychedelic trance journey featuring international lineup, UV decor installations, eco-conscious camp zone, and sunrise ritual.",
    category: "Techno",
    eventType: "Festival",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    coverImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80",
    date: "2026-12-31",
    time: "20:00",
    duration: "24 Hours",
    venue: "HillTop Goa",
    address: "Vagator Hilltop, Anjuna",
    city: "Goa",
    state: "Goa",
    price: 3499,
    featured: true,
    trending: true,
    popular: true,
    ageLimit: "21+",
    organizer: {
      name: "HillTop Music",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      eventsCount: 80
    },
    artists: [
      {
        id: "art-astrix",
        name: "Astrix",
        role: "NYE Midnight Set",
        genre: "Psychedelic Trance",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80"
      }
    ],
    ticketTypes: [
      { id: "nye", name: "NYE Full Access Pass", price: 3499, description: "Access to 24-hour festival area", remaining: 30 }
    ],
    highlights: ["Midnight Fireworks & Countdown", "UV Deco & 3D Visuals", "Sunrise Healing Session"]
  }
];
