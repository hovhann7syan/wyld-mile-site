import React from 'react';
import Link from 'next/link';
import TypingText from '../components/TypingText';
import Navbar from '../components/Navbar';

const destinations = [
  {
    slug: "cyprus",
    country: "Cyprus",
    city: "Ayia Napa",
    price3: "$493",
    badge: "Bestseller",
    // Обращаемся к папке public/country/
    image: "/country/cyprus.jpg" 
  },
  {
    slug: "bulgaria",
    country: "Bulgaria",
    city: "Sunny Beach",
    price3: "$289",
    badge: "Popular",
    image: "/country/sunny beach bulgaria.png"
  },
  {
    slug: "montenegro",
    country: "Montenegro",
    city: "Budva",
    price3: "$391",
    badge: "Trending",
    image: "/country/budva montenegro.png"
  },
  {
    slug: "spain",
    country: "Spain",
    city: "Magaluf",
    price3: "$413",
    badge: "Bestseller",
    image: "/country/magaluf spain.png"
  },
  {
    slug: "greece",
    country: "Greece",
    city: "Malia",
    price3: "$530",
    badge: "Popular",
    image: "/country/greece.jpg"
  },
  {
    slug: "budapest",
    country: "Hungary",
    city: "Budapest",
    price3: "$431",
    badge: "Trending",
    image: "/country/budapest.png"
  },
  {
    slug: "amsterdam",
    country: "Netherlands",
    city: "Amsterdam",
    price3: "$538",
    badge: "Bestseller",
    image: "/country/amsterdam.jpg"
  },
  {
    slug: "albania",
    country: "Albania",
    city: "Saranda",
    price3: "$615",
    badge: "Popular",
    image: "/country/saranda albania.png"
  },
  {
    slug: "prague",
    country: "Czechia",
    city: "Prague",
    price3: "$543",
    badge: "Trending",
    // Обрати внимание на заглавную P, как у тебя в названии файла
    image: "/country/Prague.png" 
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-yellow-400 selection:text-black scroll-smooth">
      
      {/* СУПЕР-СОВРЕМЕННЫЙ УМНЫЙ NAVBAR */}
      <Navbar />

      {/* HERO SECTION (ЧИСТОЕ ВИДЕО НА ВЕСЬ ЭКРАН) */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 z-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/40 z-10 backdrop-blur-[2px]"></div>

        <div className="relative z-20 text-center px-4 flex flex-col items-center mt-12">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8 shadow-2xl">
            <h4 className="text-white tracking-[0.3em] text-xs font-semibold uppercase">
              Independent Travel Atelier
            </h4>
          </div>
          <TypingText />
          <p className="text-white/90 max-w-xl mx-auto text-lg md:text-xl mb-10 font-medium drop-shadow-md">
            Hand-crafted routes. No mass tourism, just your rhythm and wild places.
          </p>
          <a 
            href="#destinations" 
            className="inline-block bg-white/90 backdrop-blur-lg text-black font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Explore Tours
          </a>
        </div>
      </section>

      {/* DESTINATIONS SECTION */}
      <section id="destinations" className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-30">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900 tracking-tight">Popular Destinations</h2>
            <p className="text-slate-500 max-w-xl text-lg font-medium">
              Choose your vibe. Each package includes flight, hotel, base transport, and our signature experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((tour, index) => (
            <Link 
              href={`/${tour.slug}`} 
              key={index} 
              className="group relative block h-[400px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 bg-white"
            >
              <div className="absolute inset-0 p-2">
                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.country} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                    {tour.badge}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                    <div className="text-white">
                      <h3 className="text-3xl font-extrabold mb-1 tracking-tight">{tour.country}</h3>
                      <p className="flex items-center text-sm font-medium text-white/80">
                        <svg className="w-4 h-4 mr-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        {tour.city}
                      </p>
                    </div>
                    
                    <div className="text-right text-white">
                      <p className="text-xs font-medium text-white/70 mb-0.5">From</p>
                      <p className="text-2xl font-bold">{tour.price3}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* APPLE-STYLE GLASSMORPHISM FOOTER */}
      <footer id="contact" className="relative w-full pb-12 pt-8 overflow-hidden bg-slate-50">
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-yellow-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-white/60 backdrop-blur-2xl border border-white/50 shadow-2xl shadow-slate-200/50 rounded-[3rem] p-8 md:p-16">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 bg-slate-100/50 px-4 py-2 rounded-full border border-slate-200/50 backdrop-blur-md">
                Start Your Journey
              </span>
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                Ready to go WYLD?
              </h2>
              <p className="text-slate-600 text-lg font-medium">
                Reach out on any platform. We'll curate a customized itinerary packed with wild experiences in under 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Telegram */}
              <a href="https://t.me/wyldmile" target="_blank" rel="noopener noreferrer" 
                className="group relative bg-white/50 hover:bg-white/80 backdrop-blur-lg border border-white/60 rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl shadow-md flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.462-.169.585-.434.781-.692.805-.561.053-.986-.37-.1531-.727-.855-.56-2.426-1.595-3.428-2.253-.412-.271-.118-.42.091-.636.055-.056.993-.911 1.011-.988.002-.01-.001-.043-.021-.061-.02-.018-.05-.012-.072-.007-.031.007-1.332.868-3.76 2.508-.356.244-.678.364-.967.357-.318-.008-.93-.181-1.385-.329-.558-.182-1.002-.278-.963-.587.02-.161.242-.326.666-.496 2.612-1.137 4.356-1.887 5.233-2.25 2.492-1.037 3.009-1.217 3.348-1.223.074-.001.241.017.348.104.09.074.116.173.128.243.012.071.028.226.016.353z"/></svg>
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Telegram</h3>
                <span className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">@wyldmile</span>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/37496252505" target="_blank" rel="noopener noreferrer"
                className="group relative bg-white/50 hover:bg-white/80 backdrop-blur-lg border border-white/60 rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl shadow-md flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">WhatsApp</h3>
                <span className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-600 transition-colors">+374 96252505</span>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/wyldmile" target="_blank" rel="noopener noreferrer"
                className="group relative bg-white/50 hover:bg-white/80 backdrop-blur-lg border border-white/60 rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white rounded-2xl shadow-md flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Instagram</h3>
                <span className="text-lg font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">@wyldmile</span>
              </a>

              {/* Email */}
              <a href="mailto:contact@wyldmile.com"
                className="group relative bg-white/50 hover:bg-white/80 backdrop-blur-lg border border-white/60 rounded-3xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl shadow-md flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email</h3>
                <span className="text-[15px] font-extrabold text-slate-900 group-hover:text-slate-600 transition-colors break-all">contact@wyldmile.com</span>
              </a>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-medium">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <img src="/logo.png" alt="WYLD MILE" className="h-6 w-auto grayscale opacity-80" />
                <span>—</span>
                <span>Independent Travel Atelier</span>
              </div>
              <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}