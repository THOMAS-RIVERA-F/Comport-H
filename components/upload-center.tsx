"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  FileUp,
  Orbit,
  RadioReceiver,
  Sparkles
} from "lucide-react";
import type { OrganizationGroup } from "@/lib/data";
import { intelligenceSteps, neuralDocuments } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NeuralIngestionSpace } from "@/components/neural-ingestion-space";
import { PremiumCard } from "@/components/ui/premium-card";

type UploadCenterProps = {
  activeGroup: OrganizationGroup | null;
};

export function UploadCenter({ activeGroup }: UploadCenterProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [localFiles, setLocalFiles] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function captureFiles(files: FileList | null) {
    if (!files?.length) return;
    setLocalFiles(Array.from(files).map((file) => file.name).slice(0, 6));
  }

  const hasFiles = localFiles.length > 0;

  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_390px]">
      <section
        className={cn(
          "relative min-h-[720px] overflow-hidden rounded-[8px] border border-white/[0.08] bg-[#050505] shadow-[0_24px_90px_rgba(0,0,0,0.58)] transition duration-500",
          isDragging && "border-ivory/45 shadow-[0_0_90px_rgba(255,230,170,0.2)]"
        )}
        onDragEnter={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          if (event.currentTarget === event.target) setIsDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          captureFiles(event.dataTransfer.files);
        }}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          accept=".pdf,.xlsx,.xls,.ppt,.pptx,.doc,.docx,.one"
          onChange={(event) => captureFiles(event.currentTarget.files)}
        />

        <NeuralIngestionSpace files={localFiles} isDragging={isDragging} />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,transparent_34%,rgba(5,5,5,0.38)_68%,rgba(5,5,5,0.94)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_22%,rgba(255,230,170,0.04)_72%,transparent)]" />

        <div className="absolute left-5 top-5 z-10 max-w-xl sm:left-7 sm:top-7">
          <div className="inline-flex items-center gap-2 rounded-[8px] border border-ivory/18 bg-black/42 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-ivory backdrop-blur-xl">
            <BrainCircuit className="h-4 w-4" />
            Organizational brain
          </div>
          <h2 className="glow-text mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Alimenta una inteligencia viva.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-6 text-vapor/74 sm:text-base">
            {activeGroup
              ? `${activeGroup.name} esta absorbiendo documentos y transformandolos en senales humanas.`
              : "Crea un grupo para que cada archivo tenga contexto organizacional."}
          </p>
        </div>

        <div className="absolute inset-x-4 bottom-5 z-10 flex flex-col items-start justify-between gap-4 rounded-[8px] border border-white/[0.08] bg-black/44 p-4 backdrop-blur-2xl sm:inset-x-7 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-ivory/30 bg-ivory/[0.08] shadow-[0_0_34px_rgba(255,230,170,0.22)]">
              <Orbit className="h-5 w-5 animate-breathe text-ivory" />
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                {hasFiles ? "Archivos conectados" : "Nucleo listo"}
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {hasFiles
                  ? `${localFiles.length} objetos orbitando la esfera`
                  : `${neuralDocuments.length} documentos mock en simulacion`}
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={() => inputRef.current?.click()}
            className="pointer-events-auto"
          >
            <FileUp className="h-4 w-4" />
            Conectar archivos
          </Button>
        </div>

        {isDragging ? (
          <motion.div
            className="pointer-events-none absolute inset-0 z-20 grid place-items-center bg-ivory/[0.035] backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="rounded-[8px] border border-ivory/35 bg-black/62 px-5 py-4 text-center shadow-[0_0_52px_rgba(255,230,170,0.28)]">
              <Sparkles className="mx-auto h-6 w-6 text-ivory" />
              <p className="mt-3 text-sm font-semibold text-white">
                La esfera esta lista para absorber conocimiento
              </p>
            </div>
          </motion.div>
        ) : null}
      </section>

      <aside className="grid gap-5">
        <PremiumCard className="p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                Evolution pipeline
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Inteligencia en formacion
              </h3>
            </div>
            <RadioReceiver className="h-5 w-5 animate-breathe text-ivory" />
          </div>

          <div className="mt-6 space-y-3">
            {intelligenceSteps.map((step, index) => {
              const Icon = step.icon;
              const active = index < (hasFiles ? 8 : 5);

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-[8px] border border-white/[0.08] bg-white/[0.025] p-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-[8px] border",
                        active
                          ? "border-ivory/24 bg-ivory/[0.08] text-ivory shadow-[0_0_22px_rgba(255,230,170,0.16)]"
                          : "border-white/[0.08] bg-white/[0.025] text-ash"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-white">
                        {step.label}
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
                        <motion.div
                          className="h-full rounded-full bg-ivory shadow-[0_0_18px_rgba(255,230,170,0.55)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${active ? step.progress : 22}%` }}
                          transition={{ duration: 1.1, delay: index * 0.05 }}
                        />
                      </div>
                    </div>
                    {active ? (
                      <CheckCircle2 className="h-4 w-4 text-ivory" />
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </PremiumCard>

        <PremiumCard className="p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
            Senal del grupo
          </p>
          <p className="mt-4 text-3xl font-semibold text-white">
            {activeGroup?.intelligence ?? 0}
          </p>
          <p className="mt-3 leading-6 text-vapor/68">
            {activeGroup?.signal ??
              "Selecciona un grupo para consolidar senales de personas y documentos."}
          </p>
        </PremiumCard>
      </aside>
    </div>
  );
}
