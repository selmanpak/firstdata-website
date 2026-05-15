import { ArrowRight } from "lucide-react";
import { primaryButtonClass } from "../config";
import {
  ContactCard,
  ContactInfo,
  FormField,
} from "../components/cards";

export default function ContactPage() {
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
              <ContactInfo
                label="Address"
                value="2239 Al Urubah Rd. Al Olaya Dist. 12214 Riyadh, KSA"
              />
              <ContactInfo label="Phone" value="+966 11 211 1556" />
              <ContactInfo label="Email" value="info@1stdata.ai" />
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
