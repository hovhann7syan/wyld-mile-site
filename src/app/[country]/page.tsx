"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const destinationsData = [
  {
    slug: "cyprus",
    country: "Cyprus",
    city: "Ayia Napa",
    price3: "$493",
    price7: "$593",
    flight: "Yerevan - Larnaca (Direct RT)",
    hotel: "Luxury Villa (shoulder season)",
    activity: "Zenobia Wreck Dive",
    image: "https://picsum.photos/seed/cyprus/1920/1080",
    desc: "Experience world-class nightlife in Ayia Napa combined with an iconic wreck dive at the Zenobia site.",
    itinerary3: [
      { day: "Day 1", desc: "Arrival, Nissi Beach, Ocean Basket dinner, boat party" },
      { day: "Day 2", desc: "Quad safari, Gunnery Club shooting range, Costas Tavern dinner" },
      { day: "Day 3", desc: "Protaras Beach, slingshot ride, VIP Lounge Night (optional), departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Arrival, Nissi Beach, Ocean Basket, boat party" },
      { day: "Day 2", desc: "Quad safari #1, Gunnery Club, Costas Tavern" },
      { day: "Day 3", desc: "Protaras Beach, gyros lunch, slingshot evening" },
      { day: "Day 4", desc: "Quad safari #2, McDonald's dinner, free evening" },
      { day: "Day 5", desc: "Cape Greco daytime, beach club, nightlife peak night" },
      { day: "Day 6", desc: "Nissi Beach return, VIP Lounge Night, final club night" },
      { day: "Day 7", desc: "Protaras or Ocean Basket, departure" }
    ]
  },
  {
    slug: "bulgaria",
    country: "Bulgaria",
    city: "Sunny Beach",
    price3: "$289",
    price7: "$582",
    flight: "Direct Flight (RT)",
    hotel: "Beachside Hotel",
    activity: "DGV Club + Armenian Church Day",
    image: "https://picsum.photos/seed/bulgaria/1920/1080",
    desc: "High-energy beach parties on the Black Sea coast paired with rich local cultural experiences.",
    itinerary3: [
      { day: "Day 1", desc: "Arrival, check-in, relax, welcome dinner" },
      { day: "Day 2", desc: "Guava Beach Club, boat/catamaran party, DGV night" },
      { day: "Day 3", desc: "Burgas City Day: Armenian Church, Central Beach, city lunch, departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Arrival, relax, welcome dinner" },
      { day: "Day 2", desc: "Guava Beach Club, DGV night" },
      { day: "Day 3", desc: "Watersports morning" },
      { day: "Day 4", desc: "Boat/catamaran party" },
      { day: "Day 5", desc: "Burgas City Day: Armenian Church, Central Beach, city lunch" },
      { day: "Day 6", desc: "Nessebar day trip + Khan's Tent dinner, DCV night" },
      { day: "Day 7", desc: "Prima Vera Armenian restaurant (Primorsko), departure" }
    ]
  },
  {
    slug: "montenegro",
    country: "Montenegro",
    city: "Budva",
    price3: "$391",
    price7: "$421",
    flight: "Direct Flight (RT)",
    hotel: "Coastal Apartment / Hotel",
    activity: "Tara Canyon + Monte 1350 Sunset",
    image: "https://picsum.photos/seed/montenegro/1920/1080",
    desc: "Dramatic fjord-like Adriatic landscapes, ancient Old Towns, and mountain canyon adventures.",
    itinerary3: [
      { day: "Day 1", desc: "Arrival, relax, Torch Beach Club, Budva Old Town evening" },
      { day: "Day 2", desc: "Full Kotor/Lovcen day, Monte 1350 sunset, Club Hide night" },
      { day: "Day 3", desc: "Hawaii Beach boat trip, Ploce Beach, departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Arrival, relax, Budva Old Town evening" },
      { day: "Day 2", desc: "Torch Beach Club day" },
      { day: "Day 3", desc: "Full Kotor/Lovcen day, Monte 1350 sunset, Club Hide night" },
      { day: "Day 4", desc: "Hawaii Beach boat trip" },
      { day: "Day 5", desc: "Tivat day trip (Porto Montenegro)" },
      { day: "Day 6", desc: "Ploce Beach" },
      { day: "Day 7", desc: "Sveti Stefan viewpoint, departure" }
    ]
  },
  {
    slug: "spain",
    country: "Spain",
    city: "Magaluf, Mallorca",
    price3: "$413",
    price7: "$537",
    flight: "Direct Flight (RT)",
    hotel: "Resort Hotel",
    activity: "BCM Planet Dance Superclub",
    image: "https://picsum.photos/seed/spain/1920/1080",
    desc: "The undisputed capital of European summer clubbing with crystal-clear Balearic beaches.",
    itinerary3: [
      { day: "Day 1", desc: "Arrival, Magaluf Beach, Restaurante El Mundo dinner, Punta Ballena bar crawl" },
      { day: "Day 2", desc: "Boat/catamaran party, Restaurante Andalucia dinner, BCM Planet Dance" },
      { day: "Day 3", desc: "Cala Vinyes/Cala Falco recovery beach, departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Arrival, Magaluf Beach, Restaurante El Mundo dinner, bar crawl" },
      { day: "Day 2", desc: "Boat/catamaran party, Restaurante Andalucia dinner, BCM Planet Dance" },
      { day: "Day 3", desc: "Cala Vinyes recovery beach, Village Indian Cuisine & Fast Food dinner" },
      { day: "Day 4", desc: "Cala Falco/Cala Bella Dona beach day, La Bodega dinner" },
      { day: "Day 5", desc: "Palma Nova Beach + promenade shopping, Eastenders dinner" },
      { day: "Day 6", desc: "Momentum Plaza shopping, Restaurante Casa Garcia's dinner" },
      { day: "Day 7", desc: "Free morning, departure" }
    ]
  },
  {
    slug: "greece",
    country: "Greece",
    city: "Malia, Crete",
    price3: "$530",
    price7: "$834",
    flight: "Direct Flight (RT)",
    hotel: "Crete Seaside Hotel",
    activity: "Malia Booze Cruise + Apollo Club",
    image: "https://picsum.photos/seed/greece/1920/1080",
    desc: "Unforgettable island party boat cruises meets ancient Greek history and vibrant nightlife.",
    itinerary3: [
      { day: "Day 1", desc: "Arrival, transfer, check-in, relax, Old Malia tavernas dinner" },
      { day: "Day 2", desc: "Malia Booze Cruise, Apollo Night Club" },
      { day: "Day 3", desc: "Spinalonga trip, Ammos Beach sunset, departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Arrival, relax, Old Malia dinner" },
      { day: "Day 2", desc: "Malia Booze Cruise" },
      { day: "Day 3", desc: "Apollo Night Club" },
      { day: "Day 4", desc: "Spinalonga trip" },
      { day: "Day 5", desc: "Ammos Beach sunset, Zig Zag night" },
      { day: "Day 6", desc: "Pleasure Beach/Nisos Beach Bar day, Zoo Bar evening" },
      { day: "Day 7", desc: "Departure" }
    ]
  },
  {
    slug: "budapest",
    country: "Hungary",
    city: "Budapest",
    price3: "$431",
    price7: "$778",
    flight: "Direct Flight (RT)",
    hotel: "Central City Hotel",
    activity: "Sparty at Szechenyi Thermal Baths",
    image: "https://picsum.photos/seed/budapest/1920/1080",
    desc: "The ultimate ruin bar crawls and night-time thermal bath parties in Europe's most cinematic city.",
    itinerary3: [
      { day: "Day 1", desc: "Arrival, check-in, relax, Szimpla Kert" },
      { day: "Day 2", desc: "New York Cafe, Danube night cruise, Raqpart cave bar" },
      { day: "Day 3", desc: "Sparty or Instant-Fogas, Nyugati Lounge finale, departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Arrival, relax, Szimpla Kert" },
      { day: "Day 2", desc: "New York Cafe, Danube night cruise" },
      { day: "Day 3", desc: "Instant-Fogas" },
      { day: "Day 4", desc: "Raqpart cave bar" },
      { day: "Day 5", desc: "Free day / city sightseeing" },
      { day: "Day 6", desc: "Sparty at Szechenyi Baths (Saturday)" },
      { day: "Day 7", desc: "Nyugati Lounge \"Club McDonald's\" finale, departure" }
    ]
  },
  {
    slug: "amsterdam",
    country: "Netherlands",
    city: "Amsterdam",
    price3: "$538",
    price7: "$918",
    flight: "Direct Flight (RT)",
    hotel: "Boutique Canal Hotel",
    activity: "A'DAM Lookout Swing + Van Gogh Museum",
    image: "https://picsum.photos/seed/amsterdam/1920/1080",
    desc: "Canal cruises, world-class art galleries, and thrilling edge-of-the-building swings.",
    itinerary3: [
      { day: "Day 1", desc: "Arrival, relax, Fabel Friet, Pizza & Booze Cruise" },
      { day: "Day 2", desc: "Van Gogh Museum + canal cruise, A'DAM Lookout swing, Red Light District tour, Jimmy Woo" },
      { day: "Day 3", desc: "Heineken Experience, pub crawl/lasertag, departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Arrival, relax, Fabel Friet" },
      { day: "Day 2", desc: "Van Gogh Museum + canal cruise" },
      { day: "Day 3", desc: "A'DAM Lookout + Over the Edge swing" },
      { day: "Day 4", desc: "Pizza & Booze Cruise" },
      { day: "Day 5", desc: "Red Light District tour, Jimmy Woo night" },
      { day: "Day 6", desc: "Heineken Experience, lasertag" },
      { day: "Day 7", desc: "Pub crawl finale, departure" }
    ]
  },
  {
    slug: "albania",
    country: "Albania",
    city: "Saranda",
    price3: "$615",
    price7: "$843",
    flight: "Direct Flight (RT)",
    hotel: "Riviera Beach Resort",
    activity: "Orange Club + Sunset Boat Party",
    image: "https://picsum.photos/seed/albania/1920/1080",
    desc: "The hidden paradise of the Ionian Riviera with turquoise waters and wild boat bashes.",
    itinerary3: [
      { day: "Day 1", desc: "Full travel day: flight to Tirana, 4.5hr transfer, check-in, light promenade evening" },
      { day: "Day 2", desc: "Ksamil day trip, Sunset Boat Party, Orange Club" },
      { day: "Day 3", desc: "Transfer back to Tirana, departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Travel day: flight + transfer, check-in, relax" },
      { day: "Day 2", desc: "Promenade bar crawl" },
      { day: "Day 3", desc: "Ksamil day trip" },
      { day: "Day 4", desc: "Boat Party Saranda-Ksamil" },
      { day: "Day 5", desc: "Orange Club night" },
      { day: "Day 6", desc: "Sunset Boat Party & Afterparty" },
      { day: "Day 7", desc: "Transfer to Tirana, departure" }
    ]
  },
  {
    slug: "prague",
    country: "Czechia",
    city: "Prague",
    price3: "$543",
    price7: "$943",
    flight: "Direct Flight (RT)",
    hotel: "Historic Center Hotel",
    activity: "AK-47 Shooting Range + Karlovy Lazne",
    image: "https://picsum.photos/seed/prague/1920/1080",
    desc: "Gothic fairytale streets, adrenaline shooting experiences, and 5-story mega clubs.",
    itinerary3: [
      { day: "Day 1", desc: "Arrival, Old Town walk: Charles Bridge, Astronomical Clock, Old Town Square" },
      { day: "Day 2", desc: "AK-47 Shooting Range, Beer Spa, Prague Pub Crawl ending at Karlovy Lazne" },
      { day: "Day 3", desc: "Prague Castle, Boat Party + Epic NightClub, departure" }
    ],
    itinerary7: [
      { day: "Day 1", desc: "Arrival, Old Town walk" },
      { day: "Day 2", desc: "AK-47 Shooting Range" },
      { day: "Day 3", desc: "Beer Spa, Pub Crawl, Karlovy Lazne" },
      { day: "Day 4", desc: "Prague Castle + Jewish Quarter" },
      { day: "Day 5", desc: "Boat Party + Epic NightClub" },
      { day: "Day 6", desc: "Free day / second club night" },
      { day: "Day 7", desc: "Departure" }
    ]
  }
];

export default function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState<'3' | '7'>('3');

  const tour = destinationsData.find(d => d.slug === resolvedParams.country);

  if (!tour) {
    notFound();
  }

  const currentItinerary = activeTab === '3' ? tour.itinerary3 : tour.itinerary7;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-yellow-400 selection:text-black">
      {/* Стеклянный Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40 px-6 py-4 flex justify-between items-center shadow-sm">
        <Link href="/" className="text-xl font-extrabold tracking-wider text-slate-900">
          WYLD <span className="text-yellow-500">MILE</span>
        </Link>
        <a 
          href="https://t.me/wyldmile" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-md"
        >
          Book Trip
        </a>
      </nav>

      {/* Hero Header с градиентом */}
      <section className="relative h-[70vh] w-full flex flex-col items-center justify-center overflow-hidden pt-16 rounded-b-[3rem] shadow-sm">
        <img 
          src={tour.image} 
          alt={tour.country} 
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-900/40 to-slate-900/20 z-10"></div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto drop-shadow-xl mt-12">
          <Link href="/" className="inline-flex items-center text-white/90 hover:text-white text-sm font-bold uppercase tracking-widest mb-6 transition-colors bg-white/10 px-5 py-2 rounded-full backdrop-blur-md border border-white/20">
            ← Back to all destinations
          </Link>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-white">
            {tour.country}
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md">
            {tour.city} — {tour.desc}
          </p>
        </div>
      </section>

      {/* Контент: Стеклянные карточки */}
      <section className="max-w-6xl mx-auto px-4 pb-32 relative z-30 -mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Левая колонка: Inclusions & Roadmap */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* INCLUSIONS SECTION */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50">
              <div className="mb-10">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Signature Activity</h3>
                <p className="text-3xl font-extrabold text-slate-900 tracking-tight">{tour.activity}</p>
              </div>
              
              <hr className="border-slate-200/60 my-10" />

              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Package Inclusions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-white/80 p-5 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Flight</span>
                  <span className="font-bold text-slate-900 text-lg">{tour.flight}</span>
                </div>
                <div className="bg-white/80 p-5 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Accommodation</span>
                  <span className="font-bold text-slate-900 text-lg">{tour.hotel}</span>
                </div>
                <div className="bg-white/80 p-5 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Transfers</span>
                  <span className="font-bold text-slate-900 text-lg">Airport ⇄ Hotel</span>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-white p-5 rounded-[1.5rem] border border-yellow-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs text-yellow-600 font-semibold uppercase tracking-wider block mb-1">Insurance</span>
                  <span className="font-bold text-yellow-600 text-lg">FREE Travel Insurance</span>
                </div>
              </div>
            </div>

            {/* ROADMAP / ITINERARY SECTION */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Itinerary</h3>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Trip Roadmap</h2>
                </div>
                
                {/* Тот самый переключатель тарифов */}
                <div className="bg-white/50 p-1.5 rounded-full border border-white/60 flex shadow-sm">
                  <button 
                    onClick={() => setActiveTab('3')} 
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === '3' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    3 Days
                  </button>
                  <button 
                    onClick={() => setActiveTab('7')} 
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === '7' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    7 Days
                  </button>
                </div>
              </div>

              {/* Список дней */}
              <div className="space-y-4">
                {currentItinerary.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white/80 p-5 rounded-[1.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-yellow-400 text-slate-900 font-bold text-xs px-4 py-2 rounded-full shrink-0 uppercase tracking-wider">
                      {item.day}
                    </div>
                    <p className="text-slate-700 font-medium text-lg leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Правая колонка: Цены и бронирование */}
          <div>
            <div className="bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50 flex flex-col justify-between sticky top-28">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Price Options</h3>
                
                <div 
                  onClick={() => setActiveTab('3')}
                  className={`cursor-pointer p-6 rounded-[1.5rem] border-2 transition-all mb-4 flex justify-between items-center shadow-sm ${activeTab === '3' ? 'border-slate-900 bg-white' : 'border-transparent bg-white/70 hover:bg-white'}`}
                >
                  <div>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">3 Days Stay</span>
                    <span className="text-slate-400 text-sm font-medium">Essential Trip</span>
                  </div>
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{tour.price3}</span>
                </div>

                <div 
                  onClick={() => setActiveTab('7')}
                  className={`cursor-pointer p-6 rounded-[1.5rem] border-2 transition-all mb-8 flex justify-between items-center shadow-sm relative overflow-hidden ${activeTab === '7' ? 'border-slate-900 bg-white' : 'border-transparent bg-white/70 hover:bg-white'}`}
                >
                  {activeTab === '7' && <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">SELECTED</div>}
                  <div>
                    <span className="text-xs text-slate-900 font-bold uppercase tracking-wider block">7 Days Stay</span>
                    <span className="text-slate-500 text-sm font-medium">Full Experience</span>
                  </div>
                  <span className="text-4xl font-extrabold text-slate-900 tracking-tight">{tour.price7}</span>
                </div>
              </div>

              <a 
                href="https://t.me/wyldmile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center py-5 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 block hover:-translate-y-1"
              >
                Book via Telegram
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}