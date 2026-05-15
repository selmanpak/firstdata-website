import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  FileText,
  Landmark,
  Layers3,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { primaryButtonClass } from "../config";

export default function ResourcesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
              Resources
            </div>

            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
              Practical insight for institutional tokenization.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              Short, clear resources on real-world asset tokenization,
              compliance-first infrastructure, AI-enabled workflows, and the
              operating models institutions need before launching digital asset
              programs.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className={`${primaryButtonClass} px-7 py-4`}>
                Talk to FirstData <ArrowRight size={18} />
              </Link>

              <Link
                to="/solutions"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-[#00B583]/60 hover:text-[#00B583]"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[330px] lg:block">
            <div className="absolute inset-0 rounded-full bg-[#00B583]/12 blur-3xl" />
            <div className="absolute right-0 top-1/2 w-[410px] -translate-y-1/2 overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-black/45 p-6 shadow-2xl shadow-[#00B583]/10">
              <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_36%,rgba(0,181,131,0.14)_49%,transparent_62%,transparent_100%)] animate-pulse" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00B583]">
                    Knowledge Layer
                  </div>
                  <div className="h-2 w-2 rounded-full bg-[#00B583] shadow-[0_0_18px_rgba(0,181,131,0.8)]" />
                </div>

                <div className="mt-8 rounded-[2.25rem] border border-[#00B583]/30 bg-[#00B583]/10 p-6">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B583]">
                    Featured Theme
                  </div>
                  <div className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-white">
                    Institutional RWA Readiness
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/58">
                    From asset structuring to governed access, custody alignment,
                    compliance operations, and lifecycle reporting.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <MiniMetric label="Guide" value="01" />
                  <MiniMetric label="Briefs" value="04" />
                  <MiniMetric label="FAQ" value="08" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#00291D]/25">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Featured Resources
            </div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Learn what matters before launching a tokenization program.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <ResourceCard
              icon={<BookOpen size={25} />}
              label="Guide"
              title="Tokenization 101 for Institutions"
              text="A clear introduction to asset onboarding, token configuration, investor access, custody logic, and lifecycle reporting."
            />
            <ResourceCard
              icon={<ShieldCheck size={25} />}
              label="Brief"
              title="Compliance-First Issuance"
              text="How eligibility, roles, approvals, disclosures, and audit trails support regulated tokenized asset operations."
            />
            <ResourceCard
              icon={<Brain size={25} />}
              label="Insight"
              title="AI-Enabled Asset Workflows"
              text="Where AI can support review, reporting, monitoring, and decision intelligence without replacing governance."
            />
            <ResourceCard
              icon={<LineChart size={25} />}
              label="Market Note"
              title="RWA Market Infrastructure"
              text="Why tokenization is evolving from experimentation toward controlled institutional operating infrastructure."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Resource Tracks
            </div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Built for decision makers, not crypto noise.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              The Resources page is designed to educate asset owners,
              institutions, partners, and investors on the practical value of
              tokenization — with a focus on control, governance, and real-world
              deployment.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <TrackCard
              icon={<Landmark size={24} />}
              title="For Institutions"
              text="Understand how tokenization can improve distribution, reporting, operational control, and client access models."
            />
            <TrackCard
              icon={<Layers3 size={24} />}
              title="For Asset Owners"
              text="Prepare real-world assets for digital structuring, controlled participation, and transparent lifecycle management."
            />
            <TrackCard
              icon={<FileText size={24} />}
              title="For Compliance Teams"
              text="Review governance concepts around eligibility, transfer controls, auditability, and regulatory visibility."
            />
            <TrackCard
              icon={<Brain size={24} />}
              title="For Innovation Leaders"
              text="Explore how AI-integrated workflows can support smarter tokenization operations and scalable market infrastructure."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
                Quick Answers
              </div>
              <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Common questions about tokenization.
              </h2>
            </div>

            <div className="grid gap-4">
              <FAQ
                question="Is tokenization only about blockchain?"
                answer="No. For institutions, the value is the operating model around governed access, compliance controls, custody logic, records, reporting, and lifecycle transparency."
              />
              <FAQ
                question="Which assets are suitable first?"
                answer="Real estate is a strong first use case because documentation, ownership, economics, and lifecycle events can be structured clearly."
              />
              <FAQ
                question="Does this mean operating an exchange?"
                answer="Not necessarily. FirstData can support issuance and controlled distribution first, while secondary-market access can evolve through integrations or future regulated capabilities."
              />
              <FAQ
                question="Where does AI help?"
                answer="AI can support document review, reporting, monitoring, insight generation, and workflow efficiency while governance remains controlled by institutional rules."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/50 px-7 py-14 md:px-12 lg:px-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00B583]/15 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
                Request a discussion
              </div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Need a tokenization briefing tailored to your institution?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                Speak with FirstData about use case discovery, asset readiness,
                institutional workflows, and strategic deployment paths.
              </p>
            </div>

            <Link to="/contact" className={`${primaryButtonClass} px-8 py-4`}>
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ResourceCard({
  icon,
  label,
  title,
  text,
}: {
  icon: ReactNode;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-[2rem] border border-white/10 bg-black/30 p-6 transition hover:border-[#00B583]/40 hover:bg-[#00291D]/40">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00B583]/25 bg-[#00B583]/10 text-[#00B583] transition group-hover:border-[#00B583]/50">
        {icon}
      </div>
      <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00B583]">
        {label}
      </div>
      <h3 className="mt-3 text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{text}</p>
    </div>
  );
}

function TrackCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#00291D]/35 p-6">
      <div className="text-[#00B583]">{icon}</div>
      <h3 className="mt-4 text-lg font-extrabold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{text}</p>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-black/30 p-6">
      <h3 className="text-base font-extrabold text-white">{question}</h3>
      <p className="mt-3 text-sm leading-6 text-white/58">{answer}</p>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-[#00291D]/45 px-4 py-3 text-center">
      <div className="text-lg font-extrabold text-white">{value}</div>
      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B583]">
        {label}
      </div>
    </div>
  );
}
