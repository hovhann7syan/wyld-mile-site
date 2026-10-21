import React from 'react';
import { Metadata } from 'next';
import Navbar from '../../components/Navbar';

export const metadata: Metadata = {
  title: "Privacy Policy | WYLD MILE",
  description: "Learn how WYLD MILE collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-yellow-400 selection:text-black scroll-smooth">
      <Navbar alwaysDarkText={true} />

      {/* Фоновые эффекты */}
      <div className="fixed top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-slate-200/50 to-transparent -z-10"></div>

      <div className="max-w-3xl mx-auto px-4 pt-32 pb-24 relative z-10">
        
        {/* Заголовок */}
        <section className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Last updated: 10.20.2026
          </p>
        </section>

        {/* Основной контент */}
        <div className="space-y-8 text-slate-600 font-medium leading-relaxed">
          
          <p className="text-lg text-slate-700">
            This policy explains what personal data WYLD MILE collects when you contact us or book a trip, why we use it, who we share it with, and what rights you have. It applies to wyldmile.com and to the messages you send us on Telegram, WhatsApp, Instagram and email.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Who we are</h2>
            <p>The party responsible for your data is WYLD MILE LLC (ՎԱՅԼԴ ՄԱՅԼ ՍՊԸ), tax ID 08337252, Arabkir, Yerevan 0012, Armenia. Contact: <a href="mailto:contact@wyldmile.com" className="text-slate-900 underline hover:text-blue-600">contact@wyldmile.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. What data we collect</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>When you message us:</strong> your name, the contact details of the messenger or email account you use, the destination, dates and group size you ask about, and anything else you choose to tell us.</li>
              <li><strong>When you book:</strong> for each traveller, the full name as written in the passport, date of birth, nationality, passport number and expiry date, and a phone number. We ask for passport details only when we need them to buy tickets, reserve hotels, arrange insurance or help with a visa application.</li>
              <li><strong>Payments:</strong> the website has no online payment. If you pay by bank transfer, we see the payer's name and the bank details shown on the transfer. Never send card numbers or card codes in a chat.</li>
              <li><strong>Health and special needs:</strong> if you tell us about allergies, health conditions, mobility or dietary needs so that we can plan your trip safely, we use that only for that purpose. Please share only what is necessary.</li>
              <li><strong>Website data:</strong> We automatically collect basic technical data (such as your IP address, browser type, and time of visit) to ensure the website functions correctly and securely. This site does not use invasive tracking.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Why we use your data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To answer your messages and to prepare an itinerary and a quote. Basis: your request and your consent.</li>
              <li>To book and manage your trip: flights, hotels, transfers, activities, insurance and visa help. Basis: the agreement between you and us, and your consent.</li>
              <li>To meet accounting, tax and other legal obligations. Basis: the law.</li>
              <li>To handle complaints, disputes and legal claims. Basis: the law and the agreement with you.</li>
            </ul>
            <p className="mt-3">We do not make automated decisions about you and we do not sell your data. We send you marketing messages only if you ask for them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Who we share your data with</h2>
            <p className="mb-2">Only as far as needed to deliver your trip: airlines, hotels and hotel booking platforms, insurers, transfer and activity providers, embassies and visa centres when you ask us to help with a visa, and our accountants and bank. Each receives only the data needed for its part.</p>
            <p>Telegram, WhatsApp, Instagram and email providers handle your messages under their own policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Data sent abroad</h2>
            <p>Trips take place abroad, so your data goes to companies in other countries, for example the airline, hotel or insurer at your destination. We send it only so that they can provide the service you booked.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. How long we keep your data</h2>
            <p>Messages that do not lead to a booking: we delete them after 12 months. Booking records: for the period required by Armenian accounting and tax law. Passport details: we delete them from our files 30 days after your trip ends, unless the law requires us to keep them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">7. How we protect your data</h2>
            <p>We limit access to your data to the people who need it for your booking, keep it in protected accounts, and delete it when we no longer need it. No system is perfectly secure. If a breach affects your data, we will tell you and the authorities where the law requires.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Your rights</h2>
            <p>You can ask us to tell you what data we hold about you and how we use it; give you access to it; correct data that is incomplete or wrong; block or delete data that we no longer need or that was collected unlawfully; and stop using your data if you withdraw your consent. Write to <a href="mailto:contact@wyldmile.com" className="text-slate-900 underline hover:text-blue-600">contact@wyldmile.com</a>. We will answer without undue delay and within the time set by law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">9. Complaints</h2>
            <p>If you think we have handled your data unlawfully, you can complain to us, to the Agency for Protection of Personal Data of the Ministry of Justice of the Republic of Armenia, or go to court.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">10. Cookies and analytics</h2>
            <p>We use only essential technical cookies necessary for the website to function securely and correctly. We do not use third-party marketing or tracking cookies to monitor your behavior across other sites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">11. Travellers under 18</h2>
            <p>Our trips are for adults. If a traveller is under 18, the booking must be made by a parent or legal guardian.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">12. Changes to this policy</h2>
            <p>We may update this policy. The date at the top shows the latest version.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">13. Contact</h2>
            <p>WYLD MILE LLC · <a href="mailto:contact@wyldmile.com" className="text-slate-900 underline hover:text-blue-600">contact@wyldmile.com</a> · Telegram <a href="https://t.me/wyldmile" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline hover:text-blue-600">@wyldmile</a> · +374 96 252505</p>
          </section>

        </div>
      </div>
    </main>
  );
}