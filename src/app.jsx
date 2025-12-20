import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/gallery';

function App() {
  return (
    <div className="font-sans antialiased selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Stats /> {/* 2. Add this tag here with id="about" inside it */}
      
      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gray-50 px-6 text-center">
        <h3 className="font-serif text-4xl mb-6 italic">Let's work together</h3>
        <p className="text-gray-500 uppercase tracking-widest text-[10px] mb-8">Represented by Agency Name</p>
        <a href="mailto:contact@email.com" className="text-xl border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-all">
          book@yourdomain.com
        </a>
      </section>

      <footer className="py-12 text-center">
        <p className="text-[9px] text-gray-300 uppercase tracking-[0.5em]">
          &copy; {new Date().getFullYear()} Model Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;