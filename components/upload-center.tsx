"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileUp,
  Fingerprint,
  FolderOpen,
  RadioReceiver,
  UploadCloud
} from "lucide-react";
import { fileTypes, uploadQueue } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PremiumCard } from "@/components/ui/premium-card";

export function UploadCenter() {
  const [isDragging, setIsDragging] = useState(false);
  const [localFiles, setLocalFiles] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  function captureFiles(files: FileList | null) {
    if (!files?.length) return;
    setLocalFiles(Array.from(files).map((file) => file.name).slice(0, 4));
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[1.25fr_0.75fr]">
      <PremiumCard
        intensity="command"
        className={cn(
          "relative min-h-[660px] overflow-hidden p-4 transition duration-500 sm:p-6 lg:p-8",
          isDragging && "border-ivory/40 shadow-[0_0_72px_rgba(255,245,210,0.24)]"
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,244,214,0.09),transparent_28%,rgba(255,255,255,0.035)_64%,transparent)]" />
        <div
          className={cn(
            "relative grid min-h-[600px] place-items-center rounded-[8px] border border-dashed border-white/[0.14] bg-black/34 transition duration-500",
            isDragging && "border-ivory/70 bg-ivory/[0.055]"
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
            if (event.currentTarget === event.target) {
              setIsDragging(false);
            }
          }}
          onDrop={(event) => {
            event.preventDefault();
            setIsDragging(false);
            captureFiles(event.dataTransfer.files);
          }}
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              inputRef.current?.click();
            }
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

          <NeuralDropCore isDragging={isDragging} />

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full border border-ivory/24 bg-ivory/[0.08] shadow-[0_0_44px_rgba(255,245,210,0.26)]">
              <UploadCloud className="h-9 w-9 text-ivory" />
            </div>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.32em] text-ash">
              Neural ingestion bay
            </p>
            <h2 className="glow-text mt-4 text-4xl font-semibold leading-none text-white sm:text-5xl">
              Alimenta la inteligencia.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-vapor/76">
              Suelta documentos empresariales y observa como la interfaz activa
              el campo semantico, aun con datos simulados.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {fileTypes.map((fileType) => {
                const Icon = fileType.icon;

                return (
                  <span
                    key={fileType.label}
                    className="group inline-flex items-center gap-2 rounded-[8px] border border-white/[0.09] bg-white/[0.035] px-3 py-2 text-sm text-vapor transition hover:border-ivory/26 hover:bg-ivory/[0.06]"
                  >
                    <Icon className="h-4 w-4 text-ivory/82" />
                    {fileType.label}
                  </span>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                onClick={(event) => {
                  event.stopPropagation();
                  inputRef.current?.click();
                }}
              >
                <FileUp className="h-4 w-4" />
                Seleccionar archivos
              </Button>
              <Button
                variant="metal"
                onClick={(event) => event.stopPropagation()}
              >
                <FolderOpen className="h-4 w-4" />
                Biblioteca simulada
              </Button>
            </div>

            {localFiles.length > 0 ? (
              <div className="mt-8 w-full max-w-xl rounded-[8px] border border-ivory/20 bg-black/45 p-4 text-left backdrop-blur-xl">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ivory">
                  Captura local
                </p>
                <div className="mt-3 space-y-2">
                  {localFiles.map((file) => (
                    <div
                      key={file}
                      className="flex items-center gap-2 text-sm text-vapor"
                    >
                      <CheckCircle2 className="h-4 w-4 text-ivory" />
                      <span className="truncate">{file}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </PremiumCard>

      <div className="grid gap-5">
        <PremiumCard className="min-h-[292px] overflow-hidden p-0">
          <div className="relative h-[292px]">
            <Image
              src="/neural/hombre-neuronal.png"
              alt="Perfil neuronal conectado"
              fill
              sizes="(min-width: 1280px) 32vw, 100vw"
              className="object-cover object-center opacity-78 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/22 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.24em] text-ivory">
                <Fingerprint className="h-4 w-4" />
                Identity fusion
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">
                Cada archivo se convierte en senal humana.
              </p>
            </div>
          </div>
        </PremiumCard>

        <PremiumCard>
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ash">
                Cola de procesamiento
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Simulacion activa
              </h3>
            </div>
            <RadioReceiver className="h-5 w-5 animate-breathe text-ivory" />
          </div>

          <div className="mt-6 space-y-3">
            {uploadQueue.map((item, index) => (
              <div
                key={item.name}
                className="rounded-[8px] border border-white/[0.08] bg-white/[0.025] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-white">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs text-ash">{item.state}</p>
                  </div>
                  <span className="font-mono text-xs text-ivory">
                    {item.progress}%
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-1.5">
                  {Array.from({ length: 16 }).map((_, segment) => (
                    <motion.span
                      key={segment}
                      className="h-1.5 flex-1 rounded-full bg-ivory/12"
                      animate={{
                        opacity:
                          segment < Math.round(item.progress / 6.25)
                            ? [0.52, 1, 0.72]
                            : 0.18
                      }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: index * 0.15 + segment * 0.025
                      }}
                      style={{
                        background:
                          segment < Math.round(item.progress / 6.25)
                            ? "rgba(255,244,214,0.86)"
                            : "rgba(255,255,255,0.08)",
                        boxShadow:
                          segment < Math.round(item.progress / 6.25)
                            ? "0 0 14px rgba(255,245,210,0.44)"
                            : "none"
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </PremiumCard>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          {fileTypes.slice(0, 4).map((fileType) => {
            const Icon = fileType.icon;

            return (
              <PremiumCard key={fileType.label} className="p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] text-ivory">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {fileType.label}
                    </p>
                    <p className="truncate text-xs text-ash">
                      {fileType.signature}
                    </p>
                  </div>
                </div>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function NeuralDropCore({ isDragging }: { isDragging: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[8px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,244,214,0.16),transparent_28%)] opacity-80" />
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute left-1/2 top-1/2 rounded-full border border-ivory/18"
          style={{
            width: 180 + index * 112,
            height: 180 + index * 112,
            marginLeft: -(90 + index * 56),
            marginTop: -(90 + index * 56)
          }}
          animate={{
            scale: isDragging ? [0.88, 1.12, 0.92] : [0.94, 1.02, 0.94],
            opacity: isDragging ? [0.24, 0.72, 0.2] : [0.12, 0.26, 0.12]
          }}
          transition={{
            duration: isDragging ? 1.5 : 5.5,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dropLine" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,244,214,0)" />
            <stop offset="50%" stopColor="rgba(255,244,214,0.62)" />
            <stop offset="100%" stopColor="rgba(255,244,214,0)" />
          </linearGradient>
        </defs>
        {[
          "M12 21 C32 42 46 18 61 42 S84 68 94 35",
          "M8 72 C28 54 41 88 58 66 S79 34 96 59",
          "M21 7 C45 28 37 58 64 52 S73 25 93 18",
          "M4 45 C29 40 36 62 50 50 S74 34 97 42"
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#dropLine)"
            strokeWidth={isDragging ? 0.34 : 0.18}
            strokeDasharray="4 10"
            animate={{ strokeDashoffset: [120, 0] }}
            transition={{
              duration: isDragging ? 2.2 : 8 + index,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </svg>
      {Array.from({ length: 22 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-ivory"
          style={{
            left: `${12 + ((index * 17) % 76)}%`,
            top: `${14 + ((index * 23) % 72)}%`,
            boxShadow: "0 0 18px rgba(255,245,210,0.82)"
          }}
          animate={{
            opacity: isDragging ? [0.28, 1, 0.44] : [0.12, 0.42, 0.16],
            y: isDragging ? [0, -22, 0] : [0, -8, 0],
            scale: isDragging ? [0.8, 1.8, 0.9] : [0.7, 1.1, 0.8]
          }}
          transition={{
            duration: isDragging ? 1.4 + (index % 4) * 0.18 : 5 + (index % 5),
            repeat: Infinity,
            delay: index * 0.04,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
