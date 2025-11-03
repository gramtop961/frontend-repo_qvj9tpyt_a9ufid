import { LayoutDashboard, Shield, Layers, Server, ClipboardList, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const apps = [
  {
    icon: LayoutDashboard,
    name: 'Ops Console',
    tagline: 'Command center for tickets, SLAs, and realtime status',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20',
  },
  {
    icon: Layers,
    name: 'Workflows Pro',
    tagline: 'Visual process automation with approvals and audits',
    gradient: 'from-fuchsia-500/20 via-pink-500/10 to-rose-500/20',
  },
  {
    icon: Shield,
    name: 'Identity Guard',
    tagline: 'Biometric access, visitor verification, and logs',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-lime-500/20',
  },
  {
    icon: Server,
    name: 'Service Hub',
    tagline: 'IT helpdesk with knowledge base and on-call rotations',
    gradient: 'from-amber-500/20 via-orange-500/10 to-red-500/20',
  },
  {
    icon: Database,
    name: 'Data Studio',
    tagline: 'Unified analytics, KPIs, and executive dashboards',
    gradient: 'from-sky-500/20 via-cyan-500/10 to-emerald-500/20',
  },
  {
    icon: ClipboardList,
    name: 'HR Suite',
    tagline: 'People ops: payroll, leave, performance, onboarding',
    gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
  },
];

const container = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.05 },
  }),
};

export default function Applications() {
  return (
    <section id="applications" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Featured internal applications
        </h2>
        <p className="mt-3 text-slate-300">
          A cohesive suite designed for scale, security, and delightful operator experience.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map(({ icon: Icon, name, tagline, gradient }, idx) => (
          <motion.div
            key={name}
            custom={idx}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-slate-900/70 p-3 text-white ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="mt-2 text-sm text-slate-300">{tagline}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-cyan-300">
                <span className="text-sm">Open demo</span>
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
