"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, ScanLine, ShieldCheck } from "lucide-react";
import { employee, metrics, recentActivity } from "@/lib/data";
import { PremiumCard } from "@/components/ui/premium-card";

export function DashboardMain() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1.45fr_0.9fr]">
      <PremiumCard
        intensity="command"
        className="min-h-[430px] overflow-hidden p-0 xl:col-span-2"
      >
        <div className="grid min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-[8px] border border-ivory/18 bg-ivory/[0.055] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-ivory">
                <BrainCircuit className="h-3.5 w-3.5" />
                Neural command layer
              </div>
              <h2 className="glow-text mt-7 max-w-3xl text-4xl font-semibold leading-[0.98] text-white sm:text-5xl lg:text-6xl">
                Intelligence OS para talento enterprise.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-vapor/78 sm:text-lg">
                Documentos, senales de desempeno y perfiles humanos convergen en
                una superficie de decision precisa, cinematica y viva.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["RAG fabric", "simulado"],
                ["Neural graph", "12.8k edges"],
                ["Talent signal", "97.4 quality"]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[8px] border border-white/[0.08] bg-black/28 p-4 shadow-insetline"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ash">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border-t border-white/[0.07] bg-black/20 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(255,244,214,0.22),transparent_34%)]" />
            <div className="absolute inset-8 rounded-full border border-ivory/15" />
            <div className="absolute inset-16 rounded-full border border-dashed border-ivory/18" />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute left-1/2 top-8 h-2 w-2 rounded-full bg-ivory shadow-[0_0_22px_rgba(255,245,210,0.88)]" />
              <div className="absolute bottom-14 right-16 h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_18px_rgba(255,230,168,0.72)]" />
            </motion.div>
            <Image
              src="/neural/persona-neuronal.png"
              alt="Silueta neuronal de inteligencia artificial"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain object-center opacity-90 mix-blend-screen"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-[8px] border border-white/[0.08] bg-black/45 p-4 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                    Live synthesis
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    384 perfiles recalibrados
                  </p>
                </div>
                <ScanLine className="h-5 w-5 animate-breathe text-ivory" />
              </div>
            </div>
          </div>
        </div>
      </PremiumCard>

      <div className="grid gap-4 sm:grid-cols-2 xl:col-span-2 xl:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} index={index} />
        ))}
      </div>

      <PremiumCard className="min-h-[410px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
              Actividad reciente
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              Senales conectadas
            </h3>
          </div>
          <ArrowUpRight className="h-5 w-5 text-ivory" />
        </div>

        <div className="mt-7 space-y-4">
          {recentActivity.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group relative rounded-[8px] border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:border-ivory/20 hover:bg-ivory/[0.045]"
            >
              <div className="absolute left-0 top-5 h-8 w-px bg-gradient-to-b from-transparent via-ivory/70 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="mt-2 text-xs text-ash">{item.source}</p>
                </div>
                <p className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
                  {item.time}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                {Array.from({ length: 9 }).map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className="h-1.5 w-1.5 rounded-full bg-ivory/20"
                    style={{
                      opacity: dotIndex < Math.round(item.strength / 12) ? 1 : 0.25,
                      boxShadow:
                        dotIndex < Math.round(item.strength / 12)
                          ? "0 0 12px rgba(255,245,210,0.7)"
                          : "none"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </PremiumCard>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-1">
        <PremiumCard className="min-h-[195px]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                Calidad de datos
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Integridad semantica
              </h3>
            </div>
            <ShieldCheck className="h-5 w-5 text-ivory" />
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3">
            <SignalRing label="Precision" value={97} />
            <SignalRing label="Cobertura" value={88} />
            <SignalRing label="Frescura" value={94} />
          </div>
        </PremiumCard>

        <PremiumCard className="min-h-[195px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
            Perfil destacado
          </p>
          <div className="mt-5 flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-[8px] border border-ivory/20 bg-black">
              <Image
                src={employee.portrait}
                alt={employee.name}
                fill
                sizes="80px"
                className="object-cover object-top opacity-85"
              />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-xl font-semibold text-white">
                {employee.name}
              </h3>
              <p className="mt-1 text-sm text-ash">{employee.role}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-[6px] border border-ivory/18 bg-ivory/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ivory">
                  Alto potencial
                </span>
                <span className="rounded-[6px] border border-white/10 bg-white/[0.035] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-vapor">
                  Sucesion critica
                </span>
              </div>
            </div>
          </div>
        </PremiumCard>
      </div>
    </div>
  );
}

type MetricCardProps = {
  metric: (typeof metrics)[number];
  index: number;
};

function MetricCard({ metric, index }: MetricCardProps) {
  const Icon = metric.icon;

  return (
    <PremiumCard
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index }}
      className="min-h-[166px]"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] text-ivory">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-[6px] border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ash">
          {metric.delta}
        </span>
      </div>
      <p className="mt-7 text-4xl font-semibold text-white">{metric.value}</p>
      <p className="mt-2 text-sm text-ash">{metric.label}</p>
    </PremiumCard>
  );
}

function SignalRing({ label, value }: { label: string; value: number }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="rounded-[8px] border border-white/[0.07] bg-black/24 p-3 text-center">
      <svg className="mx-auto h-20 w-20 -rotate-90" viewBox="0 0 72 72">
        <circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="4"
        />
        <motion.circle
          cx="36"
          cy="36"
          r={radius}
          fill="none"
          stroke="rgba(255,244,214,0.92)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.25, ease: "easeOut" }}
        />
      </svg>
      <p className="-mt-12 text-lg font-semibold text-white">{value}</p>
      <p className="mt-8 text-xs text-ash">{label}</p>
    </div>
  );
}
