import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleDollarSign,
  EyeOff,
  LockKeyhole,
  Workflow,
} from "lucide-react";
import { primaryButtonClass } from "../config";
import { HeroVisual } from "../components/HeroVisual";
import {
  DifferentiatorCard,
  FlowRailStep,
  Pillar,
  ProblemCard,
  ProofItem,
  UseCaseCard,
} from "../components/cards";

export default function Home() {
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
