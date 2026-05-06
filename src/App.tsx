import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Packages />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
