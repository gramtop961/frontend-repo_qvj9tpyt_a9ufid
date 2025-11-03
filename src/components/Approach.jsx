import { Layers, Settings, ShieldCheck, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    icon: Layers,
    title: 'Component‑based Architecture',
    desc: 'Composable building blocks that scale with your organization and evolve without friction.',
  },
  {
    icon: Settings,
    title: 'Microservices & APIs',
    desc: 'Modular services with clear contracts for reliability, maintainability, and speed.',
  },
  {
    icon: ShieldCheck,
    title: 'Role‑based Access & Security',
    desc: 'Enterprise security, least‑privilege access, and audit trails aligned to compliance.',
  },
  {
    icon: Rocket,
    title: 'CI/CD & Iterative Delivery',
    desc: 'Continuous deployment pipelines enabling rapid, safe improvements.',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.05 } }),
};

export default function Approach() {
  return (
    <section id="approach" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          A modern tech approach built for enterprises
        </h2>
        <p className="mt-3 text-slate-300">
          We apply pragmatic engineering patterns to deliver secure, resilient, and scalable systems.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, title, desc }, idx) => (
          <motion.div
            key={title}
            custom={idx}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm"
          >
            <div className="mb-4 inline-flex rounded-xl bg-indigo-500/15 p-3 text-indigo-200 ring-1 ring-white/10">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-slate-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
