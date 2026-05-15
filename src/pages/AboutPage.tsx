import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { primaryButtonClass } from "../config";
import { AboutValue } from "../components/cards";

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
            About FirstData
          </div>

          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
            AI-integrated infrastructure for the future of real-world asset
            markets.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            FirstData is building tokenization infrastructure and AI-enabled
            workflows to help institutions unlock more transparent, efficient,
            and regulated access to real-world assets.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#00291D]/25">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Our Mission
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Transforming real-world asset investment through tokenization and AI.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/60">
            <p>
              FirstData focuses on the intersection of real-world assets,
              tokenization, artificial intelligence, infrastructure, and advisory.
              The company is positioned to support institutional and
              regulated-market tokenization programs with clarity, control, and
              long-term scalability.
            </p>

            <p>
              The public positioning is intentionally infrastructure-first:
              FirstData is not a speculative crypto brand. It is designed as a
              serious market infrastructure company for organizations that need
              compliance-aware workflows, custody-aware governance, lifecycle
              reporting, and intelligent asset operations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Positioning
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Saudi-native, institution-first, and built for regulated deployment.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              FirstData is designed for organizations that need trusted digital
              asset infrastructure, practical tokenization workflows, and a clear
              path from real-world assets to regulated market participation.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <AboutValue
              title="Saudi-first market focus"
              text="Built with Saudi Arabia’s real-world asset opportunity and market modernization in mind."
            />
            <AboutValue
              title="AI-enabled operations"
              text="Applies AI-enabled workflows to support review, insight, reporting, and advisory processes."
            />
            <AboutValue
              title="Infrastructure mindset"
              text="Focused on durable market infrastructure rather than short-term speculative narratives."
            />
            <AboutValue
              title="Institutional trust"
              text="Designed around transparency, governance, eligibility, custody, and compliance requirements."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Brand Promise
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Empowering solutions through Data&amp;AI.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/58">
              FirstData helps institutions move from complex real-world asset
              structures to clearer, more transparent, and more efficient digital
              asset operations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/50 px-7 py-14 md:px-12 lg:px-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00B583]/15 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
                Work with FirstData
              </div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Let’s discuss the future of regulated tokenization infrastructure.
              </h2>
            </div>

            <Link to="/contact" className={`${primaryButtonClass} px-8 py-4`}>
              Contact the Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
