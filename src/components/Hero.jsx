import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden rounded-b-3xl bg-slate-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-transparent to-cyan-400/10" />

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm text-white/90">Enterprise Systems & AI Solutions</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          We build internal digital infrastructure
          <span className="block bg-gradient-to-r from-cyan-300 via-white to-indigo-200 bg-clip-text text-transparent">
            that transforms how organizations operate
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mt-5 max-w-3xl text-base text-white/85 sm:text-lg"
        >
          Full‑stack engineering for mission‑critical management systems, real‑time services, and applied AI. Modernize workflows, automate processes, and enable data‑driven decisions across departments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#applications"
            className="rounded-lg bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:shadow-md"
          >
            View Applications
          </a>
          <a
            href="#approach"
            className="rounded-lg border border-white/20 px-5 py-3 text-white transition hover:bg-white/10"
          >
            Our Tech Approach
          </a>
        </motion.div>
      </div>
    </section>
  );
}
