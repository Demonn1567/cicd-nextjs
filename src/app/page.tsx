"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Rocket,
  Zap,
  Star,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(90rem_60rem_at_50%_-10%,rgba(99,102,241,.25),transparent),radial-gradient(60rem_40rem_at_10%_10%,rgba(16,185,129,.15),transparent),radial-gradient(70rem_40rem_at_90%_10%,rgba(59,130,246,.12),transparent)] text-gray-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between py-5">
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-teal-400 shadow-lg shadow-indigo-500/25 ring-1 ring-white/10">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Aether
              </span>
            </Link>

            <nav className="hidden gap-8 md:flex">
              <a className="text-sm/6 hover:text-white/90" href="#features">
                Features
              </a>
              <a className="text-sm/6 hover:text-white/90" href="#showcase">
                Showcase
              </a>
              <a className="text-sm/6 hover:text-white/90" href="#pricing">
                Pricing
              </a>
              <a className="text-sm/6 hover:text-white/90" href="#faq">
                FAQ
              </a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/login"
                className="rounded-xl px-4 py-2 text-sm/6 text-white/80 hover:text-white"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 text-sm/6 font-medium shadow-sm ring-1 ring-black/10 hover:bg-white/90"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile CTAs */}
            <div className="md:hidden">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 text-sm/6 font-medium shadow-sm ring-1 ring-black/10 hover:bg-white/90"
              >
                Launch <Rocket className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* Hero */}
      <section className="relative">
        {/* Decorative gradient blobs */}
        <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-[28rem] max-w-5xl blur-3xl">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-indigo-500/30 via-emerald-400/20 to-cyan-400/20" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <Shield className="h-3.5 w-3.5" />
                Privacy-first by design
              </div>

              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Build stunning experiences,{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  ship 10× faster
                </span>
                .
              </h1>

              <p className="text-pretty text-base text-white/70 sm:text-lg">
                Aether is a modern starter for landing pages: sleek UI, smart
                sections, and buttery animations—all in one file. Copy, tweak,
                deploy. That’s it.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-indigo-500 to-teal-400 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgb(99,102,241,0.35)] ring-1 ring-white/15 hover:opacity-95"
                >
                  Start for free <Rocket className="h-4 w-4" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10"
                >
                  See Features <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="flex items-center gap-5 pt-3 text-xs text-white/60">
                <div className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4" />
                  Loved by builders
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Zap className="h-4 w-4" />
                  No config headaches
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-2xl border border-white/10 bg-black/50 p-5">
                  {/* Code-like mockup */}
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>
                  <pre className="max-h-[28rem] overflow-auto text-[12px] leading-6 text-white/80">
                    <code>
                      {`// one-file landing page
export default function Home() {
  return (
    <Hero>
      <Title>Build. Launch. Repeat.</Title>
      <CTA accent />
    </Hero>
  )
}`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="pointer-events-none absolute -left-6 -top-6 -z-10 h-24 w-24 rounded-full bg-indigo-500/30 blur-2xl" />
              <div className="pointer-events-none absolute -right-6 -bottom-6 -z-10 h-24 w-24 rounded-full bg-emerald-400/30 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need. Nothing you don’t.
          </h2>
          <p className="mt-4 text-white/70">
            Opinionated structure, elegant visuals, and pragmatic components.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Showcase / Testimonials */}
      <section
        id="showcase"
        className="mx-auto max-w-7xl px-6 py-20 md:py-24"
      >
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Made for builders, loved by users.
            </h2>
            <p className="mt-4 text-white/70">
              Minimal setup, gorgeous defaults, and room to grow. Plug into
              your stack and ship faster.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Accessible colors and contrast",
                "Responsive & mobile-first",
                "Glassmorphism + subtle gradients",
                "Drop-in sections: Hero, Features, Pricing, FAQ",
              ].map((pt) => (
                <li key={pt} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow-sm ring-1 ring-black/10 hover:bg-white/90"
              >
                View Pricing <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10"
              >
                Docs (Coming Soon)
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((t) => (
              <motion.figure
                key={t.name}
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-xl backdrop-blur"
              >
                <blockquote className="text-sm text-white/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-3 flex items-center justify-between text-xs text-white/60">
                  <span>
                    {t.name} · {t.role}
                  </span>
                  <div className="flex items-center gap-3 opacity-80">
                    <Github className="h-4 w-4" />
                    <Twitter className="h-4 w-4" />
                    <Linkedin className="h-4 w-4" />
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-white/70">
            Start free. Upgrade when you’re ready—no surprises.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.tier}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.05 }}
              className={`relative rounded-2xl border p-6 backdrop-blur shadow-xl ${
                p.highlight
                  ? "border-white/20 bg-white/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow ring-1 ring-white/20">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{p.tier}</h3>
              <p className="mt-1 text-sm text-white/70">{p.blurb}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="mb-1 text-sm text-white/60">/mo</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {p.features.map((f) => (
                  <li key={f} className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold ring-1 transition ${
                  p.highlight
                    ? "bg-white text-gray-900 ring-black/10 hover:bg-white/90"
                    : "bg-white/5 text-white/90 ring-white/10 hover:bg-white/10"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-white/70">
            Quick answers before you hit the deploy button.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur"
            >
              <summary className="cursor-pointer list-none text-base font-medium text-white/90">
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 opacity-80" />
                  {f.q}
                </span>
              </summary>
              <p className="mt-3 text-sm text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="inline-flex items-center gap-2 text-sm text-white/60">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-teal-400 ring-1 ring-white/10">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>Aether</span>
            <span>·</span>
            <span className="text-white/40">
              © {new Date().getFullYear()} All rights reserved
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/70">
            <a
              href="https://github.com/"
              className="rounded-lg p-2 hover:bg-white/10"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/"
              className="rounded-lg p-2 hover:bg-white/10"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="rounded-lg p-2 hover:bg-white/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Data ---------- */

const features = [
  {
    title: "One-file simplicity",
    desc: "A complete landing page in a single file. Copy, paste, ship.",
    icon: Rocket,
  },
  {
    title: "Beautiful by default",
    desc: "Curated gradients, glass cards, and tasteful shadows—no design degree needed.",
    icon: Sparkles,
  },
  {
    title: "Production-ready",
    desc: "Responsive, accessible, and fast. Works on every modern device.",
    icon: Shield,
  },
  {
    title: "Developer-friendly",
    desc: "Clean Tailwind classes and logical sections that are easy to extend.",
    icon: Zap,
  },
  {
    title: "Zero vendor lock-in",
    desc: "This is straight Next.js + Tailwind. Use anywhere.",
    icon: CheckCircle2,
  },
  {
    title: "SEO & shareable",
    desc: "Great defaults for titles, descriptions, and social previews.",
    icon: Star,
  },
] as const;

const testimonials = [
  {
    name: "Aria N.",
    role: "Founder @ Flux",
    quote:
      "We replaced our old hero section with Aether’s setup and conversions jumped 18% in a week.",
  },
  {
    name: "Dev M.",
    role: "Indie Maker",
    quote:
      "Setup took minutes. The animations and glass look are *chef’s kiss*.",
  },
  {
    name: "Ken I.",
    role: "Frontend Lead",
    quote:
      "Finally, a landing page that’s gorgeous, maintainable, and fast without a component zoo.",
  },
] as const;

const plans = [
  {
    tier: "Starter",
    blurb: "Perfect for side projects & MVPs.",
    price: "$0",
    features: [
      "All sections included",
      "Basic analytics",
      "Email support",
      "MIT license",
    ],
    cta: "Start Free",
    highlight: false,
  },
  {
    tier: "Pro",
    blurb: "For growing products that need scale.",
    price: "$19",
    features: [
      "Everything in Starter",
      "Advanced components",
      "Priority support",
      "Early access drops",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    tier: "Team",
    blurb: "Collaborate and move faster together.",
    price: "$49",
    features: [
      "Team workspaces",
      "Shared templates",
      "Role-based access",
      "SLA support",
    ],
    cta: "Launch Team",
    highlight: false,
  },
] as const;

const faqs = [
  {
    q: "Do I need any extra libraries?",
    a: "No. Tailwind is enough. For the animations and icons on this page we used framer-motion and lucide-react, but you can remove them in seconds.",
  },
  {
    q: "Is it production ready?",
    a: "Yes—responsive, accessible, and fast. Add your analytics, SEO tags, and ship.",
  },
  {
    q: "Can I customize sections?",
    a: "Absolutely. Each section is just plain React + Tailwind, so you can reorder, rename, or rip anything out.",
  },
  {
    q: "How do I deploy?",
    a: "Push to GitHub and connect to Vercel, Netlify, or your own infra. It’s standard Next.js.",
  },
] as const;
