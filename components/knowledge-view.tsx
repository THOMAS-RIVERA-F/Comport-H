"use client";

import { motion } from "framer-motion";
import { ArrowRight, Boxes, Brain, GitBranch, Link2, RadioTower } from "lucide-react";
import { graphInsights, knowledgeEdges, knowledgeNodes } from "@/lib/data";
import { PremiumCard } from "@/components/ui/premium-card";

export function KnowledgeView() {
  const nodeMap = Object.fromEntries(
    knowledgeNodes.map((node) => [node.id, node])
  ) as Record<string, (typeof knowledgeNodes)[number]>;

  return (
    <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
      <PremiumCard intensity="command" className="relative min-h-[680px] overflow-hidden p-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,244,214,0.065),transparent_34%),radial-gradient(ellipse_at_56%_46%,rgba(255,244,214,0.12),transparent_42%)]" />
        <div className="relative flex min-h-[680px] flex-col p-5 sm:p-7 lg:p-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
                Knowledge fabric
              </p>
              <h2 className="glow-text mt-3 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Documentos transformados en arquitectura viva.
              </h2>
            </div>
            <div className="grid gap-2 sm:grid-cols-3 md:min-w-[360px]">
              {graphInsights.map((insight) => {
                const Icon = insight.icon;

                return (
                  <div
                    key={insight.label}
                    className="rounded-[8px] border border-white/[0.08] bg-black/28 p-3"
                  >
                    <Icon className="h-4 w-4 text-ivory" />
                    <p className="mt-3 text-xl font-semibold text-white">
                      {insight.value}
                    </p>
                    <p className="mt-1 text-xs text-ash">{insight.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-8 min-h-[470px] flex-1 overflow-hidden rounded-[8px] border border-white/[0.08] bg-black/34">
            <div className="absolute inset-0 fine-grid opacity-35" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 70"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="knowledgeEdge" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,244,214,0.04)" />
                  <stop offset="48%" stopColor="rgba(255,244,214,0.72)" />
                  <stop offset="100%" stopColor="rgba(255,230,168,0.06)" />
                </linearGradient>
              </defs>
              {knowledgeEdges.map(([fromId, toId], index) => {
                const from = nodeMap[fromId];
                const to = nodeMap[toId];
                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2 - 10 + (index % 3) * 5;

                return (
                  <g key={`${fromId}-${toId}`}>
                    <path
                      d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                      fill="none"
                      stroke="rgba(255,244,214,0.2)"
                      strokeWidth="0.28"
                    />
                    <motion.path
                      d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                      fill="none"
                      stroke="url(#knowledgeEdge)"
                      strokeWidth="0.62"
                      strokeDasharray="2 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0.38, 0.96, 0.5] }}
                      transition={{
                        duration: 3.6 + index * 0.4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {knowledgeNodes.map((node, index) => (
              <motion.div
                key={node.id}
                className="absolute"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.04, 1],
                  y: [0, index % 2 ? -8 : 8, 0]
                }}
                transition={{
                  opacity: { delay: index * 0.08 },
                  scale: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 8 + index, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div
                  className="grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory/36 bg-black/74 text-center shadow-[0_0_42px_rgba(255,245,210,0.24)] backdrop-blur-xl"
                  style={{
                    width: node.size,
                    height: node.size
                  }}
                >
                  <span className="absolute -inset-3 rounded-full border border-ivory/10" />
                  <span className="h-2 w-2 rounded-full bg-ivory shadow-[0_0_16px_rgba(255,245,210,0.88)]" />
                </div>
                <div className="mt-3 -translate-x-1/2 whitespace-nowrap rounded-[7px] border border-white/[0.08] bg-black/55 px-2.5 py-1.5 text-xs text-vapor backdrop-blur-xl">
                  {node.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PremiumCard>

      <div className="grid gap-5">
        <PremiumCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                Transformation pipeline
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                De archivo a perfil
              </h3>
            </div>
            <GitBranch className="h-5 w-5 text-ivory" />
          </div>
          <div className="mt-7 space-y-3">
            {[
              ["Documentos", "Texto, hojas, presentaciones"],
              ["Entidades", "Personas, cargos, skills"],
              ["Relaciones", "Evidencia, contexto, confianza"],
              ["Perfiles", "Vision consolidada por persona"]
            ].map(([title, detail], index) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-[8px] border border-white/[0.08] bg-white/[0.025] p-3"
              >
                <span className="grid h-9 w-9 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] font-mono text-xs text-ivory">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="truncate text-xs text-ash">{detail}</p>
                </div>
                {index < 3 ? <ArrowRight className="h-4 w-4 text-ash" /> : null}
              </div>
            ))}
          </div>
        </PremiumCard>

        <PremiumCard className="min-h-[220px]">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
            <RadioTower className="h-4 w-4 text-ivory" />
            Semantic resonance
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {[
              ["Skill match", "94%"],
              ["Manager signal", "88%"],
              ["Role readiness", "91%"],
              ["Flight risk", "12%"]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[8px] border border-white/[0.08] bg-black/28 p-4"
              >
                <p className="text-2xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-xs text-ash">{label}</p>
              </div>
            ))}
          </div>
        </PremiumCard>

        <PremiumCard>
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] text-ivory">
              <Brain className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Inteligencia explicable
              </h3>
              <p className="mt-3 leading-7 text-vapor/72">
                Cada nodo conserva una ruta visual hacia la evidencia simulada,
                sin tablas ni patrones administrativos rigidos.
              </p>
            </div>
          </div>
        </PremiumCard>

        <PremiumCard>
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] text-ivory">
              <Boxes className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Arquitectura lista para RAG
              </h3>
              <p className="mt-3 leading-7 text-vapor/72">
                La capa visual anticipa documentos, chunks, entidades y perfiles
                como objetos independientes para futura integracion.
              </p>
            </div>
          </div>
        </PremiumCard>

        <PremiumCard>
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] text-ivory">
              <Link2 className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Relaciones organicas
              </h3>
              <p className="mt-3 leading-7 text-vapor/72">
                El grafo prioriza conexiones curvas, energia sutil y jerarquia
                visual para una lectura mas humana.
              </p>
            </div>
          </div>
        </PremiumCard>
      </div>
    </div>
  );
}
