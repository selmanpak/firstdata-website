import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { primaryButtonClass } from "../../config";

export function HomeCtaSection() {
  return (
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
  );
}
