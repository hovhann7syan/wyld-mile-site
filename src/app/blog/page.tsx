import React from 'react';
import Navbar from '../../components/Navbar';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-yellow-400 selection:text-black flex flex-col">
      <Navbar alwaysDarkText={true} />

      {/* Фоновые пятна */}
      <div className="fixed top-0 left-0 right-0 h-[50vh] bg-gradient-to-b from-slate-200/50 to-transparent -z-10"></div>
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob -z-10"></div>
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 -z-10"></div>

      <div className="flex-1 flex flex-col items-center justify-center p-4 relative z-10 mt-20">
        
        {/* Стеклянная карточка SOON */}
        <div className="bg-white/40 backdrop-blur-2xl border border-white p-12 md:p-24 rounded-[3rem] shadow-2xl flex flex-col items-center text-center max-w-2xl w-full">
          
          <div className="bg-slate-900 text-white text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-full mb-8 shadow-md">
            Under Construction
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900">
            Blog
          </h1>
          
          <p className="text-xl text-slate-600 font-medium mb-10 max-w-md">
            We are preparing some wild travel stories, insider guides, and tips for your next adventure. Coming soon.
          </p>

          {/* Иконка замка в стиле Глассморфизм (как в турах) */}
          <div className="bg-white/50 backdrop-blur-md border border-white rounded-full p-6 shadow-sm">
            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>

        </div>
      </div>
    </main>
  );
}