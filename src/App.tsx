import AboutUs from './components/about-us';
import Features from './components/features';
import Hero from './components/hero';
import Navbar from './components/navbar';

function App() {
  return (
    <main className="relative min-h-dvh w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
    </main>
  );
}

export default App;
