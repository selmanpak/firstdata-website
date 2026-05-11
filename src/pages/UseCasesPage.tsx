import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { primaryButtonClass } from "../config";
import {
  AssetClassCard,
  UseCaseBenefit,
  UseCasePattern,
} from "../components/cards";

export default function UseCasesPage() {
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
