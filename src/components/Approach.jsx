import { Layers, Settings, ShieldCheck, Rocket } from 'lucide-react';

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

export default function Approach() {
  return (
    <section id="approach" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          A modern tech approach built for enterprises
        </h2>
        <p className="mt-3 text-slate-600">
          We apply pragmatic engineering patterns to deliver secure, resilient, and scalable systems.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-xl bg-indigo-600/10 p-3 text-indigo-700">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
