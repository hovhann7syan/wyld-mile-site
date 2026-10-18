import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

// 1. НАСТРОЙКИ SEO (Title & Description)
export const metadata: Metadata = {
  title: "About WYLD MILE | Travel Agency in Yerevan, Armenia",
  description: "WYLD MILE is an independent travel agency in Yerevan. Hand-built 3- and 7-day trips from Armenia to Europe, with insurance included and free visa help.",
};

// 2. SCHEMA MARKUP (JSON-LD) для Google
const schemaLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "name": "WYLD MILE",
      "description": "Independent travel agency in Yerevan. Hand-built 3- and 7-day trips from Armenia to Europe.",
      "url": "https://wyldmile.com/about",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Yerevan",
        "addressCountry": "Armenia"
      },
      "telephone": "+37496252505",
      "email": "contact@wyldmile.com"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do I need a visa for my trip from Armenia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on the destination. We tell you before you book and help with the application at no charge. Visa fees are paid separately."
          }
        },
        {
          "@type": "Question",
          "name": "Is travel insurance included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, with every package."
          }
        },
        {
          "@type": "Question",
          "name": "How long are the trips?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "3 or 7 days. Starting prices are shown on each destination page."
          }
        },
        {
          "@type": "Question",
          "name": "How do I book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Message us on Telegram, WhatsApp or email. There is no online payment on the site."
          }
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-yellow-400 selection:text-black scroll-smooth">
      {/* Внедряем невидимую Schema-разметку для поисковиков */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLd) }}
      />

     <Navbar alwaysDarkText={true} />

      {/* ФОНОВЫЕ ЭФФЕКТЫ (Apple Glassmorphism Blur) */}
      <div className="fixed top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-slate-200/50 to-transparent -z-10"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob -z-10"></div>
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 pt-32 pb-24 relative z-10">
        
        {/* HERO SECTION (ЕДИНСТВЕННЫЙ H1 НА СТРАНИЦЕ) */}
        <section className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 bg-white/60 px-4 py-2 rounded-full border border-slate-200/50 backdrop-blur-md">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
            About WYLD MILE: an independent travel agency in Yerevan
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            WYLD MILE is a small, independent travel agency in Yerevan, Armenia. We build short trips from Armenia to Europe for people who want more than a hotel and a beach: one city, your crew, and a few days planned properly.
          </p>
        </section>

        {/* ОСНОВНОЙ КОНТЕНТ (H2) */}
        <div className="space-y-8">
          
          {/* Блок: Что мы делаем */}
          <section className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-white">
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight">What we do</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              Every package is built by hand. We choose the flights, the stay and the activities ourselves and book them in your name, so you deal with one team from the first message to the flight home. No call centre, no checkout page, no hidden extras.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Блок: Как работает бронирование */}
            <section className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-white">
              <h2 className="text-2xl font-extrabold mb-6 tracking-tight">How booking works</h2>
              <ol className="space-y-4 text-slate-600 font-medium list-decimal list-inside marker:text-slate-400 marker:font-bold">
                <li>Message us on Telegram, WhatsApp or email with your city, dates and group size.</li>
                <li>Get your itinerary within 24 hours.</li>
                <li>Confirm in chat. We handle flights, hotel and transport.</li>
              </ol>
            </section>

            {/* Блок: Что включено */}
            <section className="bg-white/80 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-white">
              <h2 className="text-2xl font-extrabold mb-4 tracking-tight">Included in every package</h2>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Flights, accommodation, airport transfers and travel insurance. 
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-sm text-slate-500 font-medium">
                  <span className="font-bold text-slate-700">Note:</span> Visa fees are paid separately, and we help with your visa application for free.
                </p>
              </div>
            </section>
          </div>

          {/* Блок: Внутренние ссылки (Полезно для SEO) */}
          <section className="bg-slate-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl">
            <h2 className="text-3xl font-extrabold mb-6 tracking-tight">Where we take you</h2>
            <p className="text-white/80 leading-relaxed text-lg font-medium mb-6">
              3- and 7-day trips to:
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Внутренние ссылки (помогают страницам стран расти в Google) */}
              {[
                { name: "Cyprus", slug: "cyprus" },
                { name: "Bulgaria", slug: "bulgaria" },
                { name: "Montenegro", slug: "montenegro" },
                { name: "Spain", slug: "spain" },
                { name: "Greece", slug: "greece" },
                { name: "Budapest", slug: "budapest" },
                { name: "Amsterdam", slug: "amsterdam" },
                { name: "Albania", slug: "albania" },
                { name: "Prague", slug: "prague" }
              ].map((dest) => (
                <Link 
                  key={dest.slug} 
                  href={`/${dest.slug}`}
                  className="bg-white/10 hover:bg-white hover:text-black border border-white/20 transition-colors px-4 py-2 rounded-full text-sm font-bold"
                >
                  {dest.name}
                </Link>
              ))}
            </div>
          </section>

          {/* Блок: Почему мы */}
          <section className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-white">
            <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Why WYLD MILE</h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium">
              The name is the extra mile: the part of a trip the brochure doesn't promise. We plan everything else so that part has room to happen.
            </p>
          </section>

          {/* Блок: FAQ */}
          <section className="pt-8">
            <h2 className="text-3xl font-extrabold mb-8 tracking-tight text-center">Frequently asked questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Do I need a visa for my trip from Armenia?",
                  a: "It depends on the destination. We tell you before you book and help with the application at no charge. Visa fees are paid separately."
                },
                {
                  q: "Is travel insurance included?",
                  a: "Yes, with every package."
                },
                {
                  q: "How long are the trips?",
                  a: "3 or 7 days. Starting prices are shown on each destination page."
                },
                {
                  q: "How do I book?",
                  a: "Message us on Telegram, WhatsApp or email. There is no online payment on the site."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-600 font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA (Call to Action) */}
          <div className="text-center pt-12 pb-8">
            <h3 className="text-2xl font-extrabold mb-6">Ready to plan your trip?</h3>
            <a 
              href="https://t.me/wyldmile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-slate-900 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all shadow-xl hover:-translate-y-1"
            >
              Message us on Telegram
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}