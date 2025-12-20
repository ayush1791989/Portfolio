import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/gallery';
import Stats from './components/Stats'; // 1. Add this import

function App() {
  return (
    <div className="font-sans antialiased selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Stats /> {/* 2. Add this tag here with id="about" inside it */}
      
      <section id="contact" className="py-32 bg-gray-50 px-6 text-center">
        {/* ... existing contact code ... */}
      </section>

      <footer className="py-12 text-center">
         {/* ... existing footer code ... */}
      </footer>
    </div>
  );
}

export default App;