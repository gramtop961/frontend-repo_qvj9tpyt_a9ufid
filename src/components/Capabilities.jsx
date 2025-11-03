import { Cpu, Users, Server, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Users,
    title: 'Enterprise Management Systems',
    points: [
      'HR & Payroll',
      'Employee & Department Management',
      'Document & Workflow Automation',
      'Attendance & Access Control',
    ],
    color: 'from-indigo-500/20 to-sky-500/20',
  },
  {
    icon: Server,
    title: 'Operational & Service Apps',
    points: [
      'IT Helpdesk & Maintenance',
      'Task & Workflow Tracking',
      'Resource & Inventory Control',
      'Real-time Dashboards',
    ],
    color: 'from-emerald-500/20 to-lime-500/20',
  },
  {
    icon: Shield,
    title: 'AI-Powered Recognition & Security',
    points: [
      'Face Detection & Verification',
      'Camera Stream Processing',
      'Visitor Monitoring & Attendance',
      'Biometric Access Integration',
    ],
    color: 'from-fuchsia-500/20 to-pink-500/20',
  },
  {
    icon: Cpu,
    title: 'Data & Intelligence',
    points: [
      'Analytics & Reporting',
      'Data Accuracy & Auditability',
      'Policy Compliance',
      'Decision Support',
    ],
    color: 'from-amber-500/20 to-orange-500/20',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Capabilities that unify your internal ecosystem
        </h2>
        <p className="mt-3 text-slate-300">
          We design and operate an integrated suite of systems that modernize workflows and elevate service delivery across the organization.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, points, color }, idx) => (
          <motion.div
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm`}
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-slate-900/70 p-3 text-white ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
