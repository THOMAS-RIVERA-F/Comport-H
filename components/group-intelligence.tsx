"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Gauge,
  Network,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";
import type { OrganizationGroup } from "@/lib/data";
import { PremiumCard } from "@/components/ui/premium-card";

type GroupIntelligenceProps = {
  activeGroup: OrganizationGroup | null;
};

export function GroupIntelligence({ activeGroup }: GroupIntelligenceProps) {
  const group = activeGroup ?? {
    name: "Operations Intelligence",
    description: "Talento operativo, eficiencia, riesgo y capacidades transversales.",
    members: 312,
    documents: 2184,
    intelligence: 89,
    signal: "Relaciones fuertes entre PMO, analytics y finanzas",
    icon: Building2
  };

  return (
    <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
      <PremiumCard intensity="command" className="relative overflow-hidden p-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,244,214,0.12),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
                Grupo consolidado
              </p>
              <h2 className="glow-text mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {group.name}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-vapor/78">
                {group.description}
              </p>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] text-ivory">
              <group.icon className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MetricTile label="Personas" value={group.members.toLocaleString("es-CO")} icon={UsersRound} />
            <MetricTile label="Documentos" value={group.documents.toLocaleString("es-CO")} icon={Sparkles} />
            <MetricTile label="Inteligencia" value={`${group.intelligence}%`} icon={Gauge} />
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[8px] border border-white/[0.08] bg-black/30 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                    Red de relaciones
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Señales de colaboración
                  </h3>
                </div>
                <Network className="h-5 w-5 text-ivory" />
              </div>

              <div className="relative mt-5 min-h-[340px] overflow-hidden rounded-[8px] border border-white/[0.06] bg-[radial-gradient(circle_at_center,rgba(255,244,214,0.08),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="groupEdge" x1="0" x2="1">
                      <stop offset="0%" stopColor="rgba(255,244,214,0.08)" />
                      <stop offset="50%" stopColor="rgba(255,244,214,0.55)" />
                      <stop offset="100%" stopColor="rgba(255,230,170,0.08)" />
                    </linearGradient>
                  </defs>
                  {[...Array(9)].map((_, index) => (
                    <motion.line
                      key={index}
                      x1={10 + index * 8}
                      y1={18 + (index % 3) * 18}
                      x2={76}
                      y2={52}
                      stroke="url(#groupEdge)"
                      strokeWidth="0.55"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0.4 }}
                      animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.25, 0.9, 0.25] }}
                      transition={{ duration: 5.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </svg>

                {[
                  { name: "Leadership", x: "14%", y: "17%" },
                  { name: "PMO", x: "36%", y: "20%" },
                  { name: "Analytics", x: "62%", y: "18%" },
                  { name: "Finance", x: "74%", y: "43%" },
                  { name: "People Ops", x: "24%", y: "61%" },
                  { name: "Operations", x: "46%", y: "47%" },
                  { name: "Strategy", x: "70%", y: "69%" }
                ].map((node, index) => (
                  <motion.div
                    key={node.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: node.x, top: node.y }}
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: [1, 1.03, 1], opacity: 1 }}
                    transition={{ duration: 4 + index * 0.18, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="rounded-full border border-ivory/30 bg-black/65 px-4 py-2 text-xs text-white shadow-[0_0_24px_rgba(255,245,210,0.08)] backdrop-blur-xl">
                      {node.name}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory/35 bg-[radial-gradient(circle,rgba(255,244,214,0.16),rgba(255,244,214,0.03)_70%,transparent)] text-center shadow-[0_0_70px_rgba(255,245,210,0.18)]"
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ivory/80">
                      Core
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">Intelligence</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid gap-4">
              <PremiumCard className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                      Señal principal
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">Estado del grupo</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ivory" />
                </div>
                <p className="mt-4 text-sm leading-6 text-vapor/72">{group.signal}</p>
              </PremiumCard>

              <PremiumCard className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                  Calibración
                </p>
                <div className="mt-4 space-y-4">
                  <ProgressRow label="Madurez organizacional" value={91} />
                  <ProgressRow label="Cobertura de datos" value={96} />
                  <ProgressRow label="Conexión entre equipos" value={88} />
                  <ProgressRow label="Riesgo estructural" value={14} invert />
                </div>
              </PremiumCard>

              <PremiumCard className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                      Gobierno
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">Enterprise ready</p>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-ivory" />
                </div>
                <p className="mt-4 text-sm leading-6 text-vapor/72">
                  La vista del grupo consolida personas, documentos, relaciones y señales operativas
                  en una sola superficie visual lista para decisiones ejecutivas.
                </p>
              </PremiumCard>
            </div>
          </div>
        </div>
      </PremiumCard>
    </div>
  );
}

function MetricTile({
  label,
  value,
  icon: Icon
}: {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-[8px] border border-white/[0.08] bg-black/28 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">{label}</p>
        <Icon className="h-4 w-4 text-ivory" />
      </div>
      <p className="mt-5 text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}

function ProgressRow({
  label,
  value,
  invert
}: {
  label: string;
  value: number;
  invert?: boolean;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="text-vapor/78">{label}</span>
        <span className="font-mono text-ivory">{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className={`h-full rounded-full ${invert ? "bg-white/20" : "bg-[linear-gradient(90deg,rgba(255,244,214,0.7),rgba(255,230,170,1))]"}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
