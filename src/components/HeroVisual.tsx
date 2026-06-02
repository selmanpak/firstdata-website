import type React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  DatabaseZap,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative mx-auto min-h-[380px] w-full max-w-[430px] overflow-visible lg:min-h-[520px] lg:max-w-none">
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00B583]/10 blur-3xl lg:right-0 lg:left-auto lg:top-8 lg:h-[440px] lg:w-[440px] lg:translate-x-0 lg:translate-y-0" />

      <div className="absolute left-1/2 top-1/2 h-[380px] w-[420px] -translate-x-1/2 -translate-y-1/2 scale-[0.74] overflow-hidden rounded-[3.25rem] border border-[#00B583]/25 bg-[#00291D]/30 p-6 shadow-2xl shadow-[#00B583]/10 sm:scale-[0.84] lg:left-auto lg:right-8 lg:top-16 lg:h-[410px] lg:w-[410px] lg:translate-x-0 lg:translate-y-0 lg:scale-100 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(0,181,131,0.18),transparent_44%)]" />
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_38%,rgba(0,181,131,0.18)_50%,transparent_62%,transparent_100%)]"
          animate={{ x: ["-95%", "95%"] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#00B583]">
              Live Tokenization Flow
            </div>
            <motion.div
              className="h-2 w-2 rounded-full bg-[#00B583] shadow-[0_0_18px_rgba(0,181,131,0.8)]"
              animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.45, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative mx-auto h-[230px] w-[320px] lg:h-[240px] lg:w-[325px]">
            <motion.div
              className="absolute left-0 top-[48px] flex h-[132px] w-[92px] flex-col justify-end rounded-[1.6rem] border border-white/10 bg-black/55 p-3"
              animate={{ opacity: [1, 1, 0.08, 0.08, 1], scale: [1, 1, 0.65, 0.65, 1], x: [0, 0, 72, 72, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.22, 0.42, 0.64, 1] }}
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
                Tower
              </div>
            </motion.div>

            <motion.div
              className="absolute left-[112px] top-[66px] flex h-[96px] w-[96px] items-center justify-center rounded-full border border-[#00B583]/55 bg-[#00B583]/10 text-[#00B583] shadow-[0_0_45px_rgba(0,181,131,0.22)]"
              animate={{ opacity: [0.15, 0.15, 1, 1, 0.15], scale: [0.65, 0.65, 1.12, 1, 0.65], rotate: [0, 0, 180, 360, 360] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.28, 0.48, 0.72, 1] }}
            >
              <div className="absolute inset-2 rounded-full border border-[#00B583]/25" />
              <div className="absolute inset-[1.15rem] rounded-full border border-[#00B583]/35" />
              <div className="text-lg font-black tracking-[-0.08em]">T</div>
            </motion.div>

            <motion.div
              className="absolute left-[82px] top-[114px] h-px w-[52px] bg-[#00B583]/50"
              animate={{ opacity: [0, 0.25, 1, 0.2, 0], scaleX: [0.2, 0.5, 1, 0.5, 0.2] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.24, 0.42, 0.76, 1] }}
            />

            <motion.div
              className="absolute left-[198px] top-[114px] h-px w-[62px] bg-[#00B583]/50"
              animate={{ opacity: [0, 0, 0.2, 1, 0], scaleX: [0.2, 0.2, 0.5, 1, 0.2] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.42, 0.55, 0.75, 1] }}
            />

            {[0, 0.45, 0.9].map((delay) => (
              <motion.div
                key={delay}
                className="absolute left-[206px] top-[108px] h-3 w-3 rounded-full bg-[#00B583] shadow-[0_0_16px_rgba(0,181,131,0.75)]"
                animate={{ x: [0, 58], y: [0, delay === 0 ? -58 : delay === 0.45 ? 0 : 58], opacity: [0, 1, 1, 0], scale: [0.7, 1, 1, 0.7] }}
                transition={{ duration: 1.9, delay: 2.35 + delay, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
              />
            ))}

            <div className="absolute right-0 top-0 grid w-[104px] gap-3">
              <PartyNode delay={2.7} icon={<UsersRound size={17} />} label="Investors" />
              <PartyNode delay={3.1} icon={<ShieldCheck size={17} />} label="Compliance" />
              <PartyNode delay={3.5} icon={<DatabaseZap size={17} />} label="Reporting" />
            </div>

            <motion.div
              className="absolute left-[108px] bottom-0 rounded-full border border-[#00B583]/25 bg-black/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00B583]"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              Asset → Token → Access
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <FlowMetric label="01" value="Onboard" />
            <FlowMetric label="02" value="Tokenize" />
            <FlowMetric label="03" value="Distribute" />
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
      animate={{ opacity: [0.45, 0.45, 1, 0.7], x: [0, 0, 5, 0], scale: [1, 1, 1.04, 1] }}
      transition={{ duration: 5.2, delay, repeat: Infinity, ease: "easeInOut", times: [0, 0.55, 0.75, 1] }}
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
