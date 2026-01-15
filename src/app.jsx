import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/gallery';
import Stats from './components/Stats';

function App() {
  return (
    <div className="font-sans antialiased selection:bg-black selection:text-white bg-white">
      {/* 1. Navigation */}
      <Navbar />

      <main>
        {/* 2. Hero / Intro Section */}
        <Hero />

        {/* 3. Image Portfolio (Masonry Grid) */}
        <Gallery />

        {/* 4. Measurements / Comp Card Section */}
        <Stats />

        {/* 5. Contact / Booking Section */}
        <section id="contact" className="py-32 bg-gray-50 px-6 text-center">
  <div className="max-w-xl mx-auto">
    <h3 className="font-serif text-4xl mb-6 italic">Inquiries</h3>
    <p className="text-gray-500 uppercase tracking-[0.3em] text-[10px] mb-10">
      For Bookings & Direct Inquiries
    </p>
    
    <div className="flex flex-col gap-8 items-center">
      {/* Email Link */}
      <div className="flex flex-col gap-2">
        <span className="text-[9px] uppercase tracking-widest text-gray-400">Email</span>
        <a 
          href="mailto:nikita52089@gmaail.com" 
          className="text-xl md:text-2xl border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all duration-300"
        >
          booking@yourdomain.com
        </a>
      </div>

      {/* Phone Number Link */}
      <div className="flex flex-col gap-2">
        <span className="text-[9px] uppercase tracking-widest text-gray-400">Phone</span>
        <a 
          href="tel:9172668300" 
          className="text-xl md:text-2xl border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all duration-300"
        >
          +1 (234) 567-890
        </a>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* 6. Footer */}
      <footer className="py-12 text-center border-t border-gray-100">
        <p className="text-[9px] text-gray-300 uppercase tracking-[0.5em]">
          &copy; {new Date().getFullYear()} Your Name Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;
