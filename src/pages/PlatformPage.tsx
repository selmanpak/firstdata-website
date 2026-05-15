import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  DatabaseZap,
  FileCheck2,
  Landmark,
  Network,
  ShieldCheck,
} from "lucide-react";
import { primaryButtonClass } from "../config";
import {
  LifecycleStage,
  PlatformCapability,
  TrustBlock,
} from "../components/cards";

export default function PlatformPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
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

        <PlatformHeroVisual />
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
            icon={<Landmark size={26} />}
            title="Regulatory-first deployment"
            text="Designed for controlled environments, sandbox-style validation, auditability, and supervisory visibility."
          />
          <TrustBlock
            icon={<ShieldCheck size={26} />}
            title="Custody-aware architecture"
            text="Supports models where real-world assets, SPVs, wallets, and tokens remain traceable and governed."
          />
          <TrustBlock
            icon={<Boxes size={26} />}
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

function PlatformHeroVisual() {
  return (
    <div className="relative mx-auto min-h-[340px] w-full max-w-[420px] overflow-visible lg:min-h-[430px] lg:max-w-none">
      <div className="absolute inset-0 rounded-full bg-[#00B583]/12 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[420px] -translate-x-1/2 -translate-y-1/2 scale-[0.74] rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/25 p-5 shadow-2xl shadow-[#00B583]/10 sm:scale-[0.82] lg:scale-100">
        <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_50%_20%,rgba(0,181,131,0.18),transparent_42%)]" />
        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00B583]/20" />
        <div className="absolute left-1/2 top-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#00B583]/35 bg-black/55 shadow-[0_0_45px_rgba(0,181,131,0.18)]" />

        <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] border border-[#00B583]/45 bg-[#00B583]/10 text-[#00B583]">
          <Network size={42} />
        </div>

        <PlatformNode
          className="left-8 top-8"
          icon={<DatabaseZap size={20} />}
          title="Asset Data"
          text="Intake"
        />
        <PlatformNode
          className="right-8 top-8"
          icon={<ShieldCheck size={20} />}
          title="Controls"
          text="Rules"
        />
        <PlatformNode
          className="left-8 bottom-8"
          icon={<Boxes size={20} />}
          title="Custody"
          text="Govern"
        />
        <PlatformNode
          className="right-8 bottom-8"
          icon={<FileCheck2 size={20} />}
          title="Reporting"
          text="Audit"
        />

        <div className="absolute left-[112px] top-[86px] h-px w-[82px] rotate-[24deg] bg-[#00B583]/35" />
        <div className="absolute right-[112px] top-[86px] h-px w-[82px] -rotate-[24deg] bg-[#00B583]/35" />
        <div className="absolute bottom-[86px] left-[112px] h-px w-[82px] -rotate-[24deg] bg-[#00B583]/35" />
        <div className="absolute bottom-[86px] right-[112px] h-px w-[82px] rotate-[24deg] bg-[#00B583]/35" />

        <div className="absolute right-7 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#00B583] shadow-[0_0_18px_rgba(0,181,131,0.8)]" />
      </div>
    </div>
  );
}

function PlatformNode({
  className,
  icon,
  title,
  text,
}: {
  className: string;
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div
      className={`absolute z-20 w-[138px] rounded-[1.6rem] border border-white/10 bg-black/65 p-4 backdrop-blur-xl ${className}`}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B583]/12 text-[#00B583]">
        {icon}
      </div>
      <div className="text-sm font-extrabold text-white">{title}</div>
      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B583]">
        {text}
      </div>
    </div>
  );
}
