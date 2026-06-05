"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CircleDotDashed,
  Plus,
  Sparkles
} from "lucide-react";
import type { OrganizationGroup } from "@/lib/data";
import { organizationGroups } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PremiumCard } from "@/components/ui/premium-card";

type GroupSelectionProps = {
  onSelectGroup: (group: OrganizationGroup) => void;
};

export function GroupSelection({ onSelectGroup }: GroupSelectionProps) {
  const [name, setName] = useState("Talent Intelligence LatAm");

  return (
    <div className="grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
      <PremiumCard intensity="command" className="relative min-h-[620px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_28%,rgba(255,244,214,0.16),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent)]" />
        <div className="relative z-10 flex min-h-[580px] flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-ivory/18 bg-ivory/[0.06] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-ivory">
              <Building2 className="h-4 w-4" />
              Organizational groups
            </div>
            <h2 className="glow-text mt-7 max-w-3xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              Crea el contenedor donde la IA va a construir inteligencia.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-vapor/76 sm:text-lg">
              Cada grupo concentra documentos, personas, relaciones y senales.
              El flujo empieza aqui para que la ingesta tenga contexto desde el
              primer archivo.
            </p>
          </div>

          <div className="mt-10 rounded-[8px] border border-white/[0.08] bg-black/34 p-4 shadow-insetline sm:p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
              Nuevo grupo
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="h-12 min-w-0 flex-1 rounded-[8px] border border-white/[0.09] bg-white/[0.035] px-4 text-sm text-white outline-none transition focus:border-ivory/35 focus:bg-ivory/[0.045]"
                aria-label="Nombre del grupo"
              />
              <Button
                variant="primary"
                className="h-12"
                onClick={() =>
                  onSelectGroup({
                    ...organizationGroups[0],
                    id: "custom",
                    name: name.trim() || organizationGroups[0].name
                  })
                }
              >
                <Plus className="h-4 w-4" />
                Crear grupo
              </Button>
            </div>
          </div>
        </div>
      </PremiumCard>

      <div className="grid gap-5">
        {organizationGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.button
              key={group.id}
              type="button"
              onClick={() => onSelectGroup(group)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group text-left"
            >
              <PremiumCard className="min-h-[178px] p-5">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] text-ivory">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowRight className="h-5 w-5 text-ash transition group-hover:translate-x-1 group-hover:text-ivory" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {group.name}
                </h3>
                <p className="mt-3 leading-6 text-vapor/68">{group.description}</p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <SignalCell label="Personas" value={String(group.members)} />
                  <SignalCell label="Docs" value={String(group.documents)} />
                  <SignalCell label="IQ" value={`${group.intelligence}`} />
                </div>
              </PremiumCard>
            </motion.button>
          );
        })}

        <PremiumCard className="p-5">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] text-ivory">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                Flujo
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Grupo, ingesta, cerebro, persona, equipo.
              </p>
            </div>
            <CircleDotDashed className="ml-auto h-5 w-5 animate-breathe text-ivory" />
          </div>
        </PremiumCard>
      </div>
    </div>
  );
}

function SignalCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[8px] border border-white/[0.08] bg-black/28 p-3">
      <p className="text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs text-ash">{label}</p>
    </div>
  );
}
