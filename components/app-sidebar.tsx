"use client";

import type { ViewId } from "@/lib/data";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Activity, Hexagon, LockKeyhole, RadioTower } from "lucide-react";

type AppSidebarProps = {
  activeView: ViewId;
  onViewChange: (view: ViewId) => void;
};

export function AppSidebar({ activeView, onViewChange }: AppSidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-[280px] border-r border-white/[0.07] bg-black/40 px-5 py-6 backdrop-blur-2xl lg:flex lg:flex-col">
      <div className="flex items-center gap-3">
        <div className="relative grid h-11 w-11 place-items-center rounded-[8px] border border-ivory/18 bg-ivory/[0.06] shadow-[0_0_34px_rgba(255,245,210,0.16)]">
          <Hexagon className="h-5 w-5 text-ivory" />
          <span className="absolute h-7 w-7 animate-pulseRing rounded-full border border-ivory/30" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-white">
            COMPORTH
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
            Neural OS
          </p>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "group flex h-12 w-full items-center gap-3 rounded-[8px] border px-3 text-left text-sm transition-all duration-300",
                isActive
                  ? "border-ivory/24 bg-ivory/[0.08] text-white shadow-[0_0_28px_rgba(255,245,210,0.12)]"
                  : "border-transparent text-ash hover:border-white/10 hover:bg-white/[0.035] hover:text-vapor"
              )}
            >
              <span
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-[7px] border transition-colors",
                  isActive
                    ? "border-ivory/24 bg-ivory/10 text-ivory"
                    : "border-white/8 bg-white/[0.025] text-ash group-hover:text-vapor"
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="flex-1">{item.label}</span>
              {isActive ? (
                <span className="h-1.5 w-1.5 rounded-full bg-ivory shadow-[0_0_14px_rgba(255,245,210,0.85)]" />
              ) : null}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-3">
        <div className="rounded-[8px] border border-white/[0.08] bg-white/[0.035] p-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ash">
            <RadioTower className="h-3.5 w-3.5 text-ivory" />
            Signal
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-2xl font-semibold text-white">99.98</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">
                Mock fabric
              </p>
            </div>
            <Activity className="h-5 w-5 animate-breathe text-ivory" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-[8px] border border-white/[0.07] bg-black/30 px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-ash">
            <LockKeyhole className="h-3.5 w-3.5 text-ivory/80" />
            Enterprise enclave
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-ivory" />
        </div>
      </div>
    </aside>
  );
}
