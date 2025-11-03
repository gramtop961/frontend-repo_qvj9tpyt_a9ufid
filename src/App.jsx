import Hero from './components/Hero.jsx';
import Capabilities from './components/Capabilities.jsx';
import Approach from './components/Approach.jsx';
import Impact from './components/Impact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Main sections */}
      <Capabilities />
      <Approach />
      <Impact />

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-semibold">Ready to modernize your internal systems?</h3>
            <p className="text-slate-600">Let’s unify workflows, automate processes, and elevate decision‑making.</p>
          </div>
          <a href="#capabilities" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:shadow-md">
            View Our Capabilities
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Enterprise Systems & AI Solutions</p>
      </footer>
    </div>
  );
}

export default App;
