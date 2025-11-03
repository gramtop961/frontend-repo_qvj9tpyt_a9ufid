import { Cpu, Users, Server, Shield } from 'lucide-react';

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
    color: 'from-indigo-500/10 to-sky-500/10',
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
    color: 'from-emerald-500/10 to-lime-500/10',
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
    color: 'from-fuchsia-500/10 to-pink-500/10',
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
    color: 'from-amber-500/10 to-orange-500/10',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Capabilities that unify your internal ecosystem
        </h2>
        <p className="mt-3 text-slate-600">
          We design and operate an integrated suite of systems that modernize workflows and elevate service delivery across the organization.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, points, color }) => (
          <div
            key={title}
            className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-slate-900 p-3 text-white shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
