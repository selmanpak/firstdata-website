import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  DatabaseZap,
  EyeOff,
  LockKeyhole,
  Menu,
  Network,
  ShieldCheck,
  Workflow,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import firstDataLogo from "./assets/firstdata-logo.svg";

const navItems = [
  { label: "Platform", path: "/platform" },
  { label: "Solutions", path: "/solutions" },
  { label: "Use Cases", path: "/use-cases" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const primaryButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[#00B583] font-bold text-black transition hover:border-[#00B583] hover:bg-[#00291D] hover:text-[#00B583]";

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={firstDataLogo}
        alt="FirstData"
        className="h-6 w-auto sm:h-8"
      />
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[#00B583]"
                      : "text-white/70 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="rounded-full border border-transparent bg-[#00B583] px-5 py-3 text-sm font-bold text-black transition hover:border-[#00B583] hover:bg-[#00291D] hover:text-[#00B583]"
            >
              Book a Demo
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/15 bg-black p-2 text-white transition hover:border-[#00B583] hover:text-[#00B583] lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed left-0 top-0 z-[99999] h-dvh w-screen bg-black px-5 py-6 lg:hidden"
          style={{ backgroundColor: "#000000" }}
        >
          <div className="flex items-center justify-between">
            <Logo />

            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/15 bg-black p-2 text-white transition hover:border-[#00B583] hover:text-[#00B583]"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-5 text-2xl font-semibold text-white transition hover:text-[#00B583]"
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full border border-transparent bg-[#00B583] px-6 py-4 text-center font-bold text-black transition hover:border-[#00B583] hover:bg-black hover:text-[#00B583]"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative hidden min-h-[520px] lg:block">
      <div className="absolute right-0 top-8 h-[440px] w-[440px] rounded-full bg-[#00B583]/10 blur-3xl" />

      <div className="absolute right-8 top-16 h-[410px] w-[410px] rounded-[4rem] border border-[#00B583]/25 bg-[#00291D]/30 p-8 shadow-2xl shadow-[#00B583]/10">
        <div className="grid h-full grid-cols-2 gap-4">
          <VisualCard icon={<Building2 />} title="Real Assets" />
          <VisualCard icon={<ShieldCheck />} title="Regulated Rails" />
          <VisualCard icon={<Network />} title="Tokenization Flow" />
          <VisualCard icon={<DatabaseZap />} title="AI Intelligence" />
        </div>
      </div>

      <div className="absolute right-52 top-4 h-24 w-24 rounded-[2rem] border border-white/10 bg-white/[0.03]" />
      <div className="absolute bottom-12 right-0 h-28 w-28 rounded-full border border-[#00B583]/20" />
    </div>
  );
}

function VisualCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/45 p-5">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00B583]/15 text-[#00B583]">
        {icon}
      </div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="mt-4 h-1 w-16 rounded-full bg-[#00B583]/60" />
      <div className="mt-3 h-1 w-10 rounded-full bg-white/20" />
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
            AI-Integrated RWA Tokenization
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
            Institutional infrastructure for real-world asset tokenization.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            FirstData enables regulated tokenization, distribution, custody-aware
            workflows, and lifecycle reporting for real-world assets — engineered
            for Saudi Arabia and scalable across markets.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className={`${primaryButtonClass} px-7 py-4`}>
              Book a Demo <ArrowRight size={18} />
            </Link>

            <Link
              to="/platform"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:border-[#00B583]/60 hover:text-[#00B583]"
            >
              Explore the Platform
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <ProofItem text="Regulatory-first deployment" />
            <ProofItem text="Custody-aware workflows" />
            <ProofItem text="Institutional lifecycle reporting" />
          </div>
        </motion.div>

        <HeroVisual />
      </section>

      <section className="border-y border-white/10 bg-[#00291D]/25">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 lg:grid-cols-4 lg:px-8">
          <Pillar
            title="Tokenization Infrastructure"
            text="Issue and manage real-world asset tokens through controlled, auditable workflows."
          />
          <Pillar
            title="Compliance Operations"
            text="Support KYC, eligibility, disclosures, roles, approvals, and regulatory reporting."
          />
          <Pillar
            title="Custody & Governance"
            text="Maintain traceable links between assets, custody models, wallets, and token lifecycle."
          />
          <Pillar
            title="AI-Enhanced Intelligence"
            text="Use AI-enabled workflows to support review, reporting, insight, and advisory processes."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
            Why Tokenization
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
            Real assets need a more efficient market layer.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
            Many real-world assets remain difficult to access, expensive to
            distribute, and complex to manage across legal, operational,
            investor, and reporting workflows. Tokenization creates a new
            infrastructure layer for controlled access, transparent ownership
            logic, and more efficient lifecycle operations.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <ProblemCard
            icon={<LockKeyhole size={21} />}
            title="Limited access"
            text="High entry thresholds can keep qualified investors away from premium asset classes."
          />
          <ProblemCard
            icon={<Workflow size={21} />}
            title="Operational friction"
            text="Manual onboarding, documentation, approvals, and reporting slow down distribution."
          />
          <ProblemCard
            icon={<EyeOff size={21} />}
            title="Low transparency"
            text="Asset, investor, custody, and transaction data are often fragmented across systems."
          />
          <ProblemCard
            icon={<CircleDollarSign size={21} />}
            title="Illiquidity"
            text="Real-world assets need better infrastructure for controlled distribution and future liquidity."
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Platform Flow
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              From asset onboarding to lifecycle reporting.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/58">
              FirstData is designed to support the complete tokenization journey
              with institutional-grade controls at every stage.
            </p>
          </div>

          <div className="mt-16">
            <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/35 p-5 md:p-8">
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B583]/10 blur-3xl" />
              <div className="absolute left-8 right-8 top-[5.25rem] hidden h-px bg-gradient-to-r from-transparent via-[#00B583]/50 to-transparent lg:block" />

              <div className="relative z-10 grid gap-5 lg:grid-cols-6">
                <FlowRailStep
                  number="01"
                  label="Intake"
                  title="Onboard"
                  text="Capture asset, issuer, documentation, and eligibility data."
                />
                <FlowRailStep
                  number="02"
                  label="Rules"
                  title="Structure"
                  text="Define legal, compliance, economic, and disclosure rules."
                />
                <FlowRailStep
                  number="03"
                  label="Core"
                  title="Tokenize"
                  text="Configure supply, smart contract controls, and issuance logic."
                  highlighted
                />
                <FlowRailStep
                  number="04"
                  label="Control"
                  title="Govern"
                  text="Apply roles, approvals, custody, wallets, and audit trails."
                />
                <FlowRailStep
                  number="05"
                  label="Access"
                  title="Distribute"
                  text="Enable controlled investor access and lifecycle operations."
                />
                <FlowRailStep
                  number="06"
                  label="Insight"
                  title="Report"
                  text="Provide dashboards, audit trails, lifecycle data, and compliance visibility."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Why FirstData
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Built for regulated markets, not speculative hype.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              FirstData combines tokenization infrastructure, AI-enabled
              workflows, custody-aware architecture, and Saudi-native market
              understanding to support institutional-grade real-world asset
              programs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <DifferentiatorCard
              title="Saudi-native design"
              text="Engineered with Saudi market modernization, regulatory alignment, and real-world asset opportunity in mind."
            />
            <DifferentiatorCard
              title="Regulatory-first"
              text="Designed around controlled deployment, auditability, role-based access, and compliance workflows."
            />
            <DifferentiatorCard
              title="AI-integrated"
              text="Uses AI-enabled workflows to support review, reporting, advisory, and operational intelligence."
            />
            <DifferentiatorCard
              title="Multi-asset ready"
              text="Starts with real estate and can scale toward broader tokenized real-world asset classes."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#00291D]/25">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Use Cases
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Real estate first. Broader real-world assets by design.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/58">
              The platform is positioned for real-world asset tokenization
              programs where transparency, compliance, custody, and lifecycle
              control matter.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <UseCaseCard
              label="Flagship Use Case"
              title="Real Estate Tokenization"
              text="Support fractionalized access, controlled distribution, asset documentation, investor eligibility, and lifecycle reporting for real estate assets."
            />
            <UseCaseCard
              label="Future Expansion"
              title="Debt & Structured Instruments"
              text="Extend tokenization workflows toward instruments requiring clear economic terms, custody controls, reporting, and compliance rules."
            />
            <UseCaseCard
              label="Infrastructure-Linked"
              title="Energy & Infrastructure Assets"
              text="Prepare for tokenized asset models connected to long-term infrastructure, yield, and strategic development opportunities."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/50 px-7 py-14 md:px-12 lg:px-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00B583]/15 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
                Start the conversation
              </div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Explore how FirstData can support your tokenization strategy.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                Speak with the team about platform capabilities, market use
                cases, strategic partnerships, or regulated real-world asset
                deployment.
              </p>
            </div>

            <Link to="/contact" className={`${primaryButtonClass} px-8 py-4`}>
              Book a Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProofItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/70">
      <CheckCircle2 className="text-[#00B583]" size={18} />
      <span>{text}</span>
    </div>
  );
}

function Pillar({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/58">{text}</p>
    </div>
  );
}

function ProblemCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/35">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00B583]/12 text-[#00B583]">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function FlowRailStep({
  number,
  label,
  title,
  text,
  highlighted = false,
}: {
  number: string;
  label: string;
  title: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div className="group relative">
      <div className="mb-5 flex items-center gap-4 lg:flex-col lg:items-start">
        <div
          className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-sm font-extrabold tracking-[0.12em] transition ${
            highlighted
              ? "border-[#00B583] bg-[#00B583] text-black shadow-2xl shadow-[#00B583]/25"
              : "border-[#00B583]/35 bg-black text-[#00B583] group-hover:border-[#00B583]"
          }`}
        >
          {number}
        </div>

        <div className="hidden h-px flex-1 bg-gradient-to-r from-[#00B583]/45 to-transparent lg:block" />
      </div>

      <div
        className={`min-h-[220px] rounded-[2rem] border p-6 transition group-hover:-translate-y-1 ${
          highlighted
            ? "border-[#00B583]/55 bg-[#00B583]/10"
            : "border-white/10 bg-black/35 group-hover:border-[#00B583]/35"
        }`}
      >
        <div className="mb-5 inline-flex rounded-full border border-[#00B583]/25 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
          {label}
        </div>

        <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
      </div>
    </div>
  );
}

function DifferentiatorCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function UseCaseCard({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-black/35 p-7 transition hover:-translate-y-1 hover:border-[#00B583]/40">
      <div className="mb-8 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
        {label}
      </div>
      <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function PlatformPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
            FirstData Platform
          </div>

          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
            End-to-end infrastructure for tokenized real-world assets.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            The FirstData platform supports the full tokenization lifecycle —
            from asset onboarding and structuring to issuance, custody-aware
            governance, distribution, and regulator-ready reporting.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#00291D]/25">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Platform Lifecycle
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              A controlled path from asset intake to reporting.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/58">
              Each step adds structure, governance, and transparency before the
              asset moves through the tokenization lifecycle.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <LifecycleStage
              number="01"
              label="Prepare"
              title="Asset Onboarding"
              text="Capture asset identity, issuer data, documents, and eligibility requirements."
            />
            <LifecycleStage
              number="02"
              label="Structure"
              title="Legal & Economic Rules"
              text="Define compliance, disclosure, redemption, pricing, and economic logic."
            />
            <LifecycleStage
              number="03"
              label="Tokenize"
              title="Token Configuration"
              text="Configure token supply, permissions, smart contract controls, and issuance logic."
              highlighted
            />
          </div>

          <div className="relative my-10 hidden items-center justify-center lg:flex">
            <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#00B583]/50 to-transparent" />
            <div className="absolute rounded-full border border-[#00B583]/40 bg-black px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              governed lifecycle
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <LifecycleStage
              number="04"
              label="Govern"
              title="Custody Logic"
              text="Connect asset, SPV, wallet, custody model, approvals, and token lifecycle governance."
            />
            <LifecycleStage
              number="05"
              label="Distribute"
              title="Controlled Access"
              text="Enable controlled access for eligible participants and approved channels."
            />
            <LifecycleStage
              number="06"
              label="Report"
              title="Lifecycle Visibility"
              text="Provide dashboards, audit trails, lifecycle data, and compliance visibility."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Capabilities
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Built for institutional control across the asset lifecycle.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              FirstData is not just a token issuance layer. It is designed
              around the operational, compliance, custody, and reporting needs
              of regulated real-world asset programs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <PlatformCapability
              title="Asset & issuer management"
              text="Centralize asset information, issuer references, supporting documents, and lifecycle data."
            />
            <PlatformCapability
              title="KYC & eligibility rules"
              text="Apply investor eligibility, jurisdictional restrictions, document requirements, and access rules."
            />
            <PlatformCapability
              title="Role-based governance"
              text="Manage operational roles, permissions, signers, approvals, and segregation of duties."
            />
            <PlatformCapability
              title="Audit-ready reporting"
              text="Track issuance, supply, holders, transactions, redemptions, performance, and compliance activity."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-20 lg:grid-cols-3 lg:px-8">
          <TrustBlock
            title="Regulatory-first deployment"
            text="Designed for controlled environments, sandbox-style validation, auditability, and supervisory visibility."
          />
          <TrustBlock
            title="Custody-aware architecture"
            text="Supports models where real-world assets, SPVs, wallets, and tokens remain traceable and governed."
          />
          <TrustBlock
            title="Vendor-agnostic infrastructure"
            text="Built to integrate with different custody, blockchain, cloud, and distribution partners as needed."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/50 p-10 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
                Explore the platform
              </div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                See how the platform can support a regulated tokenization
                program.
              </h2>
            </div>

            <Link to="/contact" className={`${primaryButtonClass} px-8 py-4`}>
              Book a Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function LifecycleStage({
  number,
  label,
  title,
  text,
  highlighted = false,
}: {
  number: string;
  label: string;
  title: string;
  text: string;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2.25rem] border p-7 transition hover:-translate-y-1 ${
        highlighted
          ? "border-[#00B583]/50 bg-[#00B583]/10 shadow-2xl shadow-[#00B583]/10"
          : "border-white/10 bg-black/35 hover:border-[#00B583]/35"
      }`}
    >
      <div className="absolute right-6 top-6 text-7xl font-extrabold leading-none text-white/[0.035]">
        {number}
      </div>

      <div className="relative z-10">
        <div className="mb-8 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
          {label}
        </div>

        <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
          {title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>
      </div>
    </div>
  );
}

function PlatformCapability({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function TrustBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-black/35 p-7">
      <ShieldCheck className="mb-6 text-[#00B583]" size={28} />
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function SolutionsPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
            Solutions
          </div>

          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
            Tokenization infrastructure for institutions, issuers, and strategic
            partners.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            FirstData helps organizations explore, structure, and deploy
            real-world asset tokenization programs with institutional-grade
            controls, AI-enabled workflows, and regulated-market readiness.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#00291D]/25">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <SolutionAudience
            title="Asset Owners & Issuers"
            text="For organizations that own or manage real-world assets and want to explore tokenized access, controlled distribution, and lifecycle reporting."
            points={[
              "Prepare assets for tokenization",
              "Manage documentation and eligibility",
              "Support structured issuance workflows",
              "Improve transparency for stakeholders",
            ]}
          />

          <SolutionAudience
            title="Financial Institutions & Fintechs"
            text="For banks, fintechs, wealth platforms, and investment channels seeking tokenization infrastructure that can integrate into regulated workflows."
            points={[
              "Enable new asset access models",
              "Integrate controlled distribution",
              "Support investor onboarding logic",
              "Connect reporting and compliance processes",
            ]}
          />

          <SolutionAudience
            title="Strategic Partners"
            text="For technology, custody, advisory, and infrastructure partners that want to participate in tokenization ecosystems."
            points={[
              "Connect custody and wallet models",
              "Support platform integrations",
              "Build scalable ecosystem workflows",
              "Enable multi-provider deployment",
            ]}
          />

          <SolutionAudience
            title="Public-Sector Aligned Ecosystems"
            text="For regulated-market initiatives where transparency, supervisory visibility, asset governance, and market modernization are essential."
            points={[
              "Support sandbox-style validation",
              "Enable audit-ready reporting",
              "Align with local data requirements",
              "Design for controlled market rollout",
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Engagement Model
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Start with a defined use case, then scale with confidence.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              FirstData is best introduced through focused, high-value
              tokenization programs where business viability, regulatory
              readiness, and operational feasibility can be validated before
              broader rollout.
            </p>
          </div>

          <div className="grid gap-5">
            <EngagementStep
              number="01"
              title="Identify the asset opportunity"
              text="Define the target asset class, issuer profile, stakeholder needs, and commercial objective."
            />
            <EngagementStep
              number="02"
              title="Validate readiness"
              text="Review legal, compliance, data, custody, documentation, and reporting requirements."
            />
            <EngagementStep
              number="03"
              title="Configure the platform workflow"
              text="Map onboarding, token configuration, governance, distribution, and reporting flows."
            />
            <EngagementStep
              number="04"
              title="Prepare controlled launch"
              text="Move toward sandbox, pilot, partner, or phased market deployment depending on the use case."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/50 px-7 py-14 md:px-12 lg:px-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00B583]/15 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
                Talk to FirstData
              </div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Discuss which tokenization solution fits your organization.
              </h2>
            </div>

            <Link to="/contact" className={`${primaryButtonClass} px-8 py-4`}>
              Book a Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SolutionAudience({
  title,
  text,
  points,
}: {
  title: string;
  text: string;
  points: string[];
}) {
  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-black/35 p-7 transition hover:border-[#00B583]/40">
      <div className="mb-6 h-1 w-12 rounded-full bg-[#00B583]" />
      <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>

      <div className="mt-7 grid gap-3">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-3 text-sm text-white/65">
            <CheckCircle2 className="mt-0.5 shrink-0 text-[#00B583]" size={17} />
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EngagementStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
      <div className="mb-4 text-xs font-bold tracking-[0.2em] text-[#00B583]">
        {number}
      </div>
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function UseCasesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
            Use Cases
          </div>

          <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
            Real-world asset tokenization, starting with real estate.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            FirstData is designed to support regulated tokenization programs for
            assets where access, transparency, custody, compliance, and lifecycle
            reporting are essential.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#00291D]/25">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Flagship Use Case
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Real estate tokenization for controlled access and transparent
              lifecycle management.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
              Real estate is the natural first use case because it combines large
              asset value, fragmented ownership structures, complex
              documentation, investor eligibility requirements, and ongoing
              reporting needs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <UseCaseBenefit
              title="Fractionalized access"
              text="Create structured access models for assets that traditionally require high entry capital."
            />
            <UseCaseBenefit
              title="Issuer control"
              text="Manage asset data, documents, eligibility, disclosures, and approval workflows."
            />
            <UseCaseBenefit
              title="Investor transparency"
              text="Surface structured asset, performance, custody, and lifecycle information."
            />
            <UseCaseBenefit
              title="Regulator-ready reporting"
              text="Support audit trails, dashboards, controlled access, and supervisory visibility."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
            Asset Classes
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
            Built for one strong first market, designed for broader RWA expansion.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/58">
            The first public narrative should stay real-estate-first. Broader
            asset classes can be presented as platform direction, not as live
            products unless they are approved and ready.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <AssetClassCard
            status="Primary Focus"
            title="Real Estate"
            text="Tokenization workflows for real estate assets, including onboarding, structuring, eligibility, custody-aware governance, and reporting."
          />
          <AssetClassCard
            status="Expansion Area"
            title="Debt & Structured Instruments"
            text="Potential support for instruments with defined economic terms, lifecycle events, redemption mechanics, and reporting requirements."
          />
          <AssetClassCard
            status="Expansion Area"
            title="Energy-Linked & Infrastructure Assets"
            text="Potential future use cases connected to long-duration projects, strategic infrastructure, and controlled investor access models."
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00B583]">
              Use Case Pattern
            </div>

            <h2 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              The same infrastructure logic applies across tokenized asset
              programs.
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <UseCasePattern
              number="01"
              title="Asset readiness"
              text="Is the asset legally, operationally, and commercially suitable for tokenization?"
            />
            <UseCasePattern
              number="02"
              title="Investor access"
              text="Who can participate, under which rules, and with what documentation?"
            />
            <UseCasePattern
              number="03"
              title="Custody and control"
              text="How are asset rights, wallets, approvals, and token operations governed?"
            />
            <UseCasePattern
              number="04"
              title="Lifecycle reporting"
              text="How are performance, ownership, transactions, and compliance activities tracked?"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/50 px-7 py-14 md:px-12 lg:px-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#00B583]/15 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
                Explore a use case
              </div>
              <h2 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Have an asset class or tokenization program in mind?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
                Speak with FirstData about use case readiness, platform fit, and
                regulated deployment paths.
              </p>
            </div>

            <Link to="/contact" className={`${primaryButtonClass} px-8 py-4`}>
              Book a Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function UseCaseBenefit({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00B583]/12 text-[#00B583]">
        <Building2 size={21} />
      </div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function AssetClassCard({
  status,
  title,
  text,
}: {
  status: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2.25rem] border border-white/10 bg-black/35 p-7 transition hover:-translate-y-1 hover:border-[#00B583]/40">
      <div className="mb-8 inline-flex rounded-full border border-[#00B583]/30 bg-[#00B583]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00B583]">
        {status}
      </div>
      <h3 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function UseCasePattern({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
      <div className="mb-6 text-xs font-bold tracking-[0.2em] text-[#00B583]">
        {number}
      </div>
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function AboutPage() {
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
              FirstData’s website should express the same qualities as the brand:
              intelligent, confident, collaborative, forward-thinking, and
              grounded in trust.
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
              FirstData combines the pioneering “First” mindset with data-driven
              intelligence — creating a brand language built on leadership,
              trust, adaptability, and innovation.
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

function AboutValue({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6 transition hover:border-[#00B583]/40">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function ContactPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-7 inline-flex rounded-full border border-[#00B583]/40 bg-[#00B583]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#00B583]">
              Contact FirstData
            </div>

            <h1 className="text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] text-white md:text-7xl">
              Start a conversation about tokenization infrastructure.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              Speak with the FirstData team about platform capabilities,
              strategic partnerships, real-world asset use cases, or regulated
              deployment paths.
            </p>

            <div className="mt-10 grid gap-4">
              <ContactInfo label="Location" value="Riyadh · Kingdom of Saudi Arabia" />
              <ContactInfo
                label="Focus"
                value="AI-integrated real-world asset tokenization"
              />
              <ContactInfo
                label="Engagement"
                value="Platform demos, partnerships, and strategic discussions"
              />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[#00291D]/35 p-6 md:p-8">
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-white">
              Book a demo or request a discussion
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Complete the form and the FirstData team can follow up with the
              most relevant next step.
            </p>

            <form className="mt-8 grid gap-5">
              <FormField label="Full name" placeholder="Your name" />
              <FormField
                label="Work email"
                placeholder="name@company.com"
                type="email"
              />
              <FormField label="Company" placeholder="Company name" />

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/75">
                  Inquiry type
                </span>
                <select className="rounded-2xl border border-white/10 bg-black/45 px-4 py-4 text-sm text-white outline-none transition focus:border-[#00B583]">
                  <option>Platform demo</option>
                  <option>Asset tokenization use case</option>
                  <option>Strategic partnership</option>
                  <option>Investor / corporate inquiry</option>
                  <option>General inquiry</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-white/75">
                  Message
                </span>
                <textarea
                  rows={5}
                  placeholder="Tell us briefly what you would like to discuss."
                  className="resize-none rounded-2xl border border-white/10 bg-black/45 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#00B583]"
                />
              </label>

              <a
                href="mailto:info@1stdata.ai?subject=FirstData Website Inquiry"
                className={`${primaryButtonClass} mt-2 px-7 py-4`}
              >
                Submit Inquiry <ArrowRight size={18} />
              </a>
            </form>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <ContactCard
              title="For asset owners"
              text="Explore whether your real-world asset is suitable for tokenization, structured access, and lifecycle reporting."
            />
            <ContactCard
              title="For institutions"
              text="Discuss how tokenization infrastructure can support regulated distribution, compliance, and reporting workflows."
            />
            <ContactCard
              title="For partners"
              text="Connect with FirstData on ecosystem, custody, technology, advisory, or market infrastructure opportunities."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-white/75">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-2xl border border-white/10 bg-black/45 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-[#00B583]"
      />
    </label>
  );
}

function ContactInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#00B583]">
        {label}
      </div>
      <div className="mt-2 text-sm leading-6 text-white/65">{value}</div>
    </div>
  );
}

function ContactCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/35 p-6">
      <div className="mb-5 h-1 w-12 rounded-full bg-[#00B583]" />
      <h3 className="text-xl font-extrabold tracking-[-0.03em] text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-white/55">{text}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_1.4fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
            AI-integrated infrastructure for real-world asset tokenization.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 text-sm sm:grid-cols-5">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white/55 hover:text-[#00B583]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="text-sm text-white/45 lg:text-right">
          <p>Riyadh · Kingdom of Saudi Arabia</p>
          <p className="mt-3">Empowering Solutions Through Data&amp;AI</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl border-t border-white/10 px-5 py-6 text-xs text-white/35 lg:px-8">
        © 2026 FirstData. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}