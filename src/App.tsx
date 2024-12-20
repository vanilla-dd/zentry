import Hero from './components/hero';

function App() {
  return (
    <main className="relative min-h-dvh w-screen overflow-x-hidden">
      <Hero />
      <section className="z-0 min-h-svh bg-black"></section>
    </main>
  );
}

export default App;
