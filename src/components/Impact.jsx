import { CheckCircle } from 'lucide-react';

const bullets = [
  'Efficiency and process automation across departments',
  'Data accuracy, auditability, and compliance',
  'Transparent workflows and accountable ownership',
  'Biometric security and reliable identity assurance',
  'Improved employee service delivery and performance',
];

export default function Impact() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Measurable impact, enterprise‑ready
          </h2>
          <p className="mt-3 text-slate-600">
            We centralize fragmented systems into a unified digital ecosystem that drives clarity and control.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-slate-700">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-200 via-cyan-200 to-emerald-200 blur-2xl opacity-60" />
          <div className="relative rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              <Stat kpi="99.9%" label="Uptime targets" />
              <Stat kpi="2-4x" label="Faster delivery cycles" />
              <Stat kpi="< 200ms" label="API response" />
              <Stat kpi="24/7" label="Monitoring & alerts" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <div className="text-3xl font-semibold text-slate-900">{kpi}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}
