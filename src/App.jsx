import Hero from './components/Hero.jsx';
import Applications from './components/Applications.jsx';
import Capabilities from './components/Capabilities.jsx';
import Approach from './components/Approach.jsx';
import Impact from './components/Impact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Main sections */}
      <Applications />
      <Capabilities />
      <Approach />
      <Impact />

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-sm backdrop-blur-sm md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-white">Ready to modernize your internal systems?</h3>
            <p className="text-slate-300">Let’s unify workflows, automate processes, and elevate decision‑making.</p>
          </div>
          <a href="#applications" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:shadow-md">
            Explore the Suite
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-slate-400">© {new Date().getFullYear()} Enterprise Systems & AI Solutions</p>
      </footer>
    </div>
  );
}

export default App;
