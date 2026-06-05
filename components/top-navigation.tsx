"use client";

import type { ViewId } from "@/lib/data";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Bell, Command, Search, SlidersHorizontal } from "lucide-react";

type TopNavigationProps = {
  activeView: ViewId;
  activeGroupName?: string;
  onViewChange: (view: ViewId) => void;
};

export function TopNavigation({
  activeView,
  activeGroupName,
  onViewChange
}: TopNavigationProps) {
  const active = navItems.find((item) => item.id === activeView) ?? navItems[0];

  return (
    <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-obsidian/72 px-4 py-4 backdrop-blur-2xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ash">
            {activeGroupName ?? "Intelligence workspace"}
          </p>
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-xl">
            {active.label}
          </h1>
        </div>

        <div className="hidden min-w-[340px] max-w-md flex-1 items-center gap-3 rounded-[8px] border border-white/[0.08] bg-white/[0.035] px-3 py-2 shadow-insetline md:flex">
          <Search className="h-4 w-4 text-ash" />
          <span className="flex-1 text-sm text-ash">
            Buscar talento, skills, desempeno o potencial
          </span>
          <kbd className="rounded-[5px] border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-vapor">
            AI
          </kbd>
        </div>

        <div className="flex items-center gap-2">
          <Button size="icon" variant="metal" aria-label="Ajustes visuales">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="metal" aria-label="Centro de comandos">
            <Command className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="primary" aria-label="Alertas">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`flex shrink-0 items-center gap-2 rounded-[8px] border px-3 py-2 text-xs transition ${
                isActive
                  ? "border-ivory/25 bg-ivory/10 text-white"
                  : "border-white/8 bg-white/[0.035] text-ash"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
