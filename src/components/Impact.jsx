import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const bullets = [
  'Efficiency and process automation across departments',
  'Data accuracy, auditability, and compliance',
  'Transparent workflows and accountable ownership',
  'Biometric security and reliable identity assurance',
  'Improved employee service delivery and performance',
];

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center shadow-sm backdrop-blur-sm">
      <div className="text-3xl font-semibold text-white">{kpi}</div>
      <div className="mt-1 text-sm text-slate-300">{label}</div>
    </div>
  );
}

export default function Impact() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Measurable impact, enterprise‑ready
          </h2>
          <p className="mt-3 text-slate-300">
            We centralize fragmented systems into a unified digital ecosystem that drives clarity and control.
          </p>
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-slate-200">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-cyan-400/10 to-emerald-500/20 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <Stat kpi="99.9%" label="Uptime targets" />
              <Stat kpi="2-4x" label="Faster delivery cycles" />
              <Stat kpi="< 200ms" label="API response" />
              <Stat kpi="24/7" label="Monitoring & alerts" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
