import Link from "next/link";
import {
  Map,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Check,
  Circle,
  Star,
  Target,
} from "lucide-react";
import { BuddioLogo } from "@/components/BuddioLogo";

const FEATURES = [
  {
    icon: Map,
    title: "Learning Roadmap",
    desc: "Structured, step-by-step paths built around your level and your goals.",
  },
  {
    icon: BookOpen,
    title: "Focused Lessons",
    desc: "Clear explanations and worked examples that read like a good textbook.",
  },
  {
    icon: ClipboardCheck,
    title: "Adaptive Quizzes",
    desc: "Practice questions with instant explanations after every answer.",
  },
  {
    icon: BarChart3,
    title: "Meaningful Progress",
    desc: "See what you have learned and what to study next — without the noise.",
  },
];

const STEPS = [
  {
    number: "1",
    title: "Pick a Topic",
    desc: "Choose the subject or skill you want to understand, from math to programming.",
  },
  {
    number: "2",
    title: "Get Your Roadmap",
    desc: "Receive a personal learning map ordered from what you know to what comes next.",
  },
  {
    number: "3",
    title: "Learn and Practice",
    desc: "Work through each step, revisit concepts when needed, and check your understanding.",
  },
];

const MAP_STEPS = [
  { label: "Introduction", state: "done" },
  { label: "Supervised Learning", state: "done" },
  { label: "Regression", state: "current" },
  { label: "Classification", state: "next" },
  { label: "Model Evaluation", state: "next" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col overflow-x-hidden">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <BuddioLogo />

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
            <a href="#fitur" className="hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#cara-kerja" className="hover:text-slate-900 transition-colors">
              How it Works
            </a>
            <a href="#tentang" className="hover:text-slate-900 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-[#4F8EF7] hover:bg-[#3B76E6] rounded-xl px-4 py-2.5 shadow-sm transition-colors duration-150"
            >
              Sign Up Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Hero copy */}
            <div className="flex-1 space-y-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-100 rounded-full text-xs font-semibold text-slate-600 shadow-sm">
                <GraduationCap className="w-3.5 h-3.5 text-[#4F8EF7]" />
                Your learning workspace
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                A calmer way
                <span className="block mt-2 bg-gradient-to-r from-[#4F8EF7] to-[#7C5CFF] bg-clip-text text-transparent">
                  to learn.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Understand concepts, connect ideas, and always know what to study next. Buddio
                keeps the whole picture visible while you work through it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-[#4F8EF7] hover:bg-[#3B76E6] text-white font-semibold text-sm rounded-xl shadow-sm transition-colors duration-150 group"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
                </Link>
                <a
                  href="#fitur"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-white border border-slate-200 text-slate-700 font-semibold text-sm rounded-xl hover:bg-slate-50 transition-colors duration-150"
                >
                  See How it Works
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  Free to start
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  English &amp; Indonesian
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                  Adapts to your level
                </span>
              </div>
            </div>

            {/* Hero visual — learning map */}
            <div className="flex-1 w-full max-w-md lg:max-w-none">
              <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Machine Learning</p>
                    <p className="text-[11px] text-slate-500">Learning map</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#4F8EF7] bg-blue-50 rounded-full px-2.5 py-1">
                    <GraduationCap className="w-3 h-3" />
                    In progress
                  </span>
                </div>

                <div className="space-y-2.5">
                  {MAP_STEPS.map((step) => (
                    <div key={step.label} className="flex items-center gap-3">
                      {step.state === "done" ? (
                        <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                      ) : step.state === "current" ? (
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-[#4F8EF7] flex items-center justify-center shrink-0">
                          <span className="w-2 h-2 rounded-full bg-[#4F8EF7]" />
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full border border-slate-200 flex items-center justify-center shrink-0">
                          <Circle className="w-2.5 h-2.5 text-slate-300" />
                        </span>
                      )}
                      <span
                        className={`text-sm ${
                          step.state === "current"
                            ? "font-semibold text-slate-900"
                            : step.state === "done"
                              ? "text-slate-500"
                              : "text-slate-400"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-y border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-0.5">
              <p className="text-2xl font-bold text-slate-900">4.8/5</p>
              <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#FACC15] fill-[#FACC15]" /> User satisfaction
              </p>
            </div>
            <div className="space-y-0.5">
              <p className="text-2xl font-bold text-slate-900">SD → Pro</p>
              <p className="text-[11px] text-slate-500">All levels</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-2xl font-bold text-slate-900">24/7</p>
              <p className="text-[11px] text-slate-500">Study support</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-2xl font-bold text-slate-900">100%</p>
              <p className="text-[11px] text-slate-500">Personal roadmap</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="fitur" className="max-w-6xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F8EF7] uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              Buddio Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Everything you need to learn with direction
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              From building your learning map to practicing what you have studied — a clear,
              structured place to work through any subject.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#4F8EF7]/30 transition-colors duration-150 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#4F8EF7] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section id="cara-kerja" className="bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-4 py-20 sm:py-24">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F8EF7] uppercase tracking-wider">
                <Target className="w-4 h-4" />
                How it Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Start learning in 3 easy steps
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((step, i) => (
                <div key={step.number} className="relative bg-[#F8FAFC] border border-slate-100 rounded-2xl p-7">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-[#4F8EF7] text-white text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900 text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#4F8EF7]">
          <div className="max-w-3xl mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Learning works better with a map
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed">
              Start with one topic and build from there.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#4F8EF7] font-bold text-sm rounded-xl shadow-sm hover:bg-slate-50 transition-colors duration-150 group"
            >
              Start Learning Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="tentang" className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-6 text-center">
          <BuddioLogo size="sm" />
          <p className="text-sm text-slate-500 max-w-md">
            Buddio is a learning workspace that helps you understand concepts, connect ideas, and
            stay on track.
          </p>
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-400">
            <span className="cursor-default">Learn with direction.</span>
          </div>
          <div className="w-full border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span>&copy; 2026 Buddio. All rights reserved.</span>
            <span>Understand. Connect. Progress.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
