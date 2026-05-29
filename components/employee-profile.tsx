"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CircleDotDashed,
  Fingerprint,
  Network,
  Radar,
  UserRound
} from "lucide-react";
import { employee } from "@/lib/data";
import { PremiumCard } from "@/components/ui/premium-card";

export function EmployeeProfile() {
  return (
    <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
      <PremiumCard intensity="command" className="relative min-h-[660px] overflow-hidden p-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_28%,rgba(255,244,214,0.15),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
        <div className="relative flex min-h-[660px] flex-col p-6 sm:p-8">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-ivory/18 bg-ivory/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ivory">
              <UserRound className="h-3.5 w-3.5" />
              Consolidated profile
            </div>
            <ArrowUpRight className="h-5 w-5 text-ivory" />
          </div>

          <div className="relative mt-8 min-h-[360px] flex-1 overflow-hidden rounded-[8px] border border-white/[0.08] bg-black/38">
            <Image
              src={employee.portrait}
              alt={employee.name}
              fill
              priority
              sizes="(min-width: 1280px) 42vw, 100vw"
              className="object-cover object-[50%_34%] opacity-88 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/12 to-transparent" />
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/12" />
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ivory/18" />
              <motion.div
                className="absolute left-1/2 top-1/2 h-[360px] w-px origin-top bg-gradient-to-b from-ivory/70 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <div className="mt-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-ash">
              {employee.location}
            </p>
            <h2 className="glow-text mt-3 text-4xl font-semibold leading-none text-white sm:text-5xl">
              {employee.name}
            </h2>
            <p className="mt-4 text-lg text-vapor/76">{employee.role}</p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <SignalPill icon={Radar} label="Potencial" value={employee.potential} />
            <SignalPill icon={BadgeCheck} label="Desempeno" value={employee.performance} />
            <SignalPill icon={Fingerprint} label="Integridad" value={employee.integrity} />
          </div>
        </div>
      </PremiumCard>

      <div className="grid gap-5">
        <div className="grid gap-5 lg:grid-cols-3">
          <PremiumCard className="lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                  Skills holograficos
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Mapa de capacidad
                </h3>
              </div>
              <Network className="h-5 w-5 text-ivory" />
            </div>

            <div className="relative mt-7 min-h-[250px] rounded-[8px] border border-white/[0.08] bg-black/32">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 58"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="skillShape" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,244,214,0.08)" />
                    <stop offset="55%" stopColor="rgba(255,244,214,0.34)" />
                    <stop offset="100%" stopColor="rgba(255,230,168,0.1)" />
                  </linearGradient>
                </defs>
                <motion.polygon
                  points="50,6 82,18 76,46 50,54 21,44 15,17"
                  fill="url(#skillShape)"
                  stroke="rgba(255,244,214,0.68)"
                  strokeWidth="0.35"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: [1, 1.02, 1], opacity: 1 }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "50% 50%" }}
                />
                {[18, 30, 42].map((offset) => (
                  <polygon
                    key={offset}
                    points={`50,${offset / 3} ${50 + offset / 1.7},${18 + offset / 12} ${50 + offset / 1.9},${45 - offset / 20} 50,${53 - offset / 9} ${50 - offset / 1.85},${44 - offset / 12} ${50 - offset / 1.7},${18 + offset / 12}`}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.24"
                  />
                ))}
              </svg>

              {employee.skills.map((skill, index) => {
                const positions = [
                  "left-[43%] top-[3%]",
                  "right-[6%] top-[25%]",
                  "right-[12%] bottom-[12%]",
                  "left-[40%] bottom-[4%]",
                  "left-[7%] bottom-[18%]",
                  "left-[6%] top-[23%]"
                ];

                return (
                  <motion.div
                    key={skill}
                    className={`absolute ${positions[index]} max-w-[150px] rounded-[8px] border border-white/[0.08] bg-black/55 px-3 py-2 text-xs text-vapor backdrop-blur-xl`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * index }}
                  >
                    {skill}
                  </motion.div>
                );
              })}
            </div>
          </PremiumCard>

          <PremiumCard>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
              Decision signal
            </p>
            <div className="mt-6 space-y-5">
              <HoloGauge label="Potencial" value={employee.potential} />
              <HoloGauge label="Desempeno" value={employee.performance} />
            </div>
          </PremiumCard>
        </div>

        <PremiumCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                Historial
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Trayectoria consolidada
              </h3>
            </div>
            <BriefcaseBusiness className="h-5 w-5 text-ivory" />
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {employee.timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative rounded-[8px] border border-white/[0.08] bg-white/[0.025] p-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-ivory shadow-[0_0_16px_rgba(255,245,210,0.82)]" />
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ivory">
                  {item.year}
                </p>
                <h4 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-6 text-vapor/70">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </PremiumCard>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Movilidad", "Alta", "Preparada para funciones regionales."],
            ["Influencia", "92", "Fuerte traccion lateral entre equipos."],
            ["Riesgo", "Bajo", "Senales estables de permanencia."]
          ].map(([label, value, detail]) => (
            <PremiumCard key={label}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                    {label}
                  </p>
                  <p className="mt-4 text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-3 text-sm leading-6 text-vapor/70">{detail}</p>
                </div>
                <CircleDotDashed className="h-5 w-5 text-ivory" />
              </div>
            </PremiumCard>
          ))}
        </div>
      </div>
    </div>
  );
}

type LucideIcon = ComponentType<{ className?: string }>;

function SignalPill({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-[8px] border border-white/[0.08] bg-black/28 p-4">
      <div className="flex items-center justify-between">
        <Icon className="h-4 w-4 text-ivory" />
        <span className="font-mono text-xs text-ivory">{value}</span>
      </div>
      <p className="mt-4 text-sm text-ash">{label}</p>
    </div>
  );
}

function HoloGauge({ label, value }: { label: string; value: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference - (value / 100) * circumference;

  return (
    <div className="rounded-[8px] border border-white/[0.08] bg-black/30 p-4">
      <div className="flex flex-col gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-white">{label}</p>
          <p className="mt-1 text-xs text-ash">senal calibrada</p>
        </div>
        <div className="relative h-20 w-20 self-end">
          <svg className="h-20 w-20 -rotate-90" viewBox="0 0 96 96">
            <circle
              cx="48"
              cy="48"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="5"
            />
            <motion.circle
              cx="48"
              cy="48"
              r={radius}
              fill="none"
              stroke="rgba(255,244,214,0.96)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: dash }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center text-lg font-semibold text-white">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
