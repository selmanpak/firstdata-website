import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  FileText,
  KeyRound,
  LineChart,
} from "lucide-react";
import { primaryButtonClass } from "../config";
import {
  AssetClassCard,
  UseCaseBenefit,
  UseCasePattern,
} from "../components/cards";

export default function UseCasesPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
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

        <RealEstateHeroVisual />
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

function RealEstateHeroVisual() {
  return (
    <div className="relative hidden min-h-[430px] lg:block">
      <div className="absolute inset-0 rounded-full bg-[#00B583]/12 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[3rem] border border-[#00B583]/20 bg-[#00291D]/25 p-6 shadow-2xl shadow-[#00B583]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,181,131,0.18),transparent_42%)]" />
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#00B583]/10 blur-2xl" />
        <div className="absolute -bottom-16 left-12 h-44 w-44 rounded-full bg-[#00B583]/8 blur-2xl" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00B583]">
              Real Estate Asset
            </div>
            <div className="h-2 w-2 rounded-full bg-[#00B583] shadow-[0_0_18px_rgba(0,181,131,0.8)]" />
          </div>

          <div className="relative mx-auto mt-3 h-[185px] w-[260px]">
            <div className="absolute bottom-0 left-1/2 h-[150px] w-[170px] -translate-x-1/2 rounded-t-[2rem] border border-[#00B583]/30 bg-black/55 shadow-[0_0_45px_rgba(0,181,131,0.12)]" />
            <div className="absolute bottom-0 left-[34px] h-[118px] w-[58px] rounded-t-[1.2rem] border border-white/10 bg-[#00291D]/70" />
            <div className="absolute bottom-0 right-[34px] h-[118px] w-[58px] rounded-t-[1.2rem] border border-white/10 bg-[#00291D]/70" />
            <div className="absolute bottom-[118px] left-1/2 h-10 w-[210px] -translate-x-1/2 rounded-t-[1.2rem] border border-[#00B583]/20 bg-[#00B583]/10" />

            <div className="absolute left-[98px] top-[78px] grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="h-4 w-5 rounded-[0.35rem] border border-[#00B583]/25 bg-[#00B583]/10"
                />
              ))}
            </div>

            <div className="absolute left-1/2 top-2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-2xl border border-[#00B583]/45 bg-[#00B583]/10 text-[#00B583]">
              <Building2 size={34} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <EstateMetric icon={<KeyRound size={17} />} label="Access" value="Controlled" />
            <EstateMetric icon={<FileText size={17} />} label="Docs" value="Verified" />
            <EstateMetric icon={<LineChart size={17} />} label="Reports" value="Live" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EstateMetric({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-black/55 px-4 py-3">
      <div className="text-[#00B583]">{icon}</div>
      <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B583]">
        {label}
      </div>
      <div className="mt-1 text-xs font-extrabold text-white">{value}</div>
    </div>
  );
}
