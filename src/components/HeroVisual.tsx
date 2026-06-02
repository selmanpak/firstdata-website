import type React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  DatabaseZap,
  Network,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[360px] w-full max-w-[430px] overflow-visible lg:min-h-[520px] lg:max-w-none">
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B583]/10 blur-3xl lg:right-0 lg:left-auto lg:top-8 lg:h-[440px] lg:w-[440px] lg:translate-x-0 lg:translate-y-0" />

      <div className="absolute left-1/2 top-1/2 h-[360px] w-[420px] -translate-x-1/2 -translate-y-1/2 scale-[0.74] overflow-hidden rounded-[3.25rem] border border-[#00B583]/25 bg-[#00291D]/30 p-6 shadow-2xl shadow-[#00B583]/10 sm:scale-[0.84] lg:left-auto lg:right-8 lg:top-16 lg:h-[410px] lg:w-[410px] lg:translate-x-0 lg:translate-y-0 lg:scale-100 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(0,181,131,0.18),transparent_44%)]" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_36%,rgba(0,181,131,0.14)_50%,transparent_64%,transparent_100%)]"
          animate={{ x: ["-90%", "90%"] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00B583]">
              Tokenization Engine
            </div>
            <motion.div
              className="h-2 w-2 rounded-full bg-[#00B583] shadow-[0_0_18px_rgba(0,181,131,0.8)]"
              animate={{ opacity: [0.45, 1, 0.45], scale: [1, 1.35, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative mx-auto h-[210px] w-[310px] lg:h-[230px] lg:w-[315px]">
            <motion.div
              className="absolute left-0 top-1/2 flex h-[132px] w-[96px] -translate-y-1/2 flex-col justify-end rounded-[1.6rem] border border-white/10 bg-black/55 p-3"
              animate={{ opacity: [1, 0.75, 1], y: [0, -4, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00B583]/12 text-[#00B583]">
                <Building2 size={22} />
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-3 rounded-[0.25rem] border border-[#00B583]/20 bg-[#00B583]/10"
                  />
                ))}
              </div>
              <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white/60">
                Asset
              </div>
            </motion.div>

            <motion.div
              className="absolute left-[106px] top-1/2 flex h-[94px] w-[94px] -translate-y-1/2 items-center justify-center rounded-full border border-[#00B583]/45 bg-[#00B583]/10 text-[#00B583] shadow-[0_0_45px_rgba(0,181,131,0.18)]"
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 2.4, repeat: Infinity, ease: "easeInOut" } }}
            >
              <div className="absolute inset-3 rounded-full border border-[#00B583]/25" />
              <Network size={36} />
            </motion.div>

            <motion.div
              className="absolute left-[95px] top-1/2 h-px w-[42px] -translate-y-1/2 bg-[#00B583]/45"
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute left-[206px] top-1/2 h-px w-[48px] -translate-y-1/2 bg-[#00B583]/45"
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 1.8, delay: 0.55, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute right-0 top-0 grid w-[104px] gap-3">
              <PartyNode delay={0} icon={<UsersRound size={17} />} label="Investors" />
              <PartyNode delay={0.25} icon={<ShieldCheck size={17} />} label="Compliance" />
              <PartyNode delay={0.5} icon={<DatabaseZap size={17} />} label="Reporting" />
            </div>

            <motion.div
              className="absolute left-[192px] top-[70px] text-[#00B583]/65"
              animate={{ x: [0, 14, 0], opacity: [0.25, 1, 0.25] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <FlowMetric label="Asset" value="Onboard" />
            <FlowMetric label="Token" value="Issue" />
            <FlowMetric label="Access" value="Distribute" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PartyNode({
  icon,
  label,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      className="rounded-[1.2rem] border border-white/10 bg-black/60 px-3 py-2.5 backdrop-blur-xl"
      animate={{ opacity: [0.65, 1, 0.65], x: [0, 4, 0] }}
      transition={{ duration: 2.2, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="flex items-center gap-2 text-[#00B583]">
        {icon}
        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/70">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

function FlowMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.35rem] border border-white/10 bg-black/55 px-4 py-3 text-center">
      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B583]">
        {label}
      </div>
      <div className="mt-1 text-xs font-extrabold text-white">{value}</div>
    </div>
  );
}
