import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import ProblemSolution from './components/ProblemSolution';
import ValueProps from './components/ValueProps';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import TrustSection from './components/TrustSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <ProblemSolution />
        <ValueProps />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
