"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { ViewId } from "@/lib/data";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardMain } from "@/components/dashboard-main";
import { EmployeeProfile } from "@/components/employee-profile";
import { KnowledgeView } from "@/components/knowledge-view";
import { NeuralField } from "@/components/neural-field";
import { TopNavigation } from "@/components/top-navigation";
import { UploadCenter } from "@/components/upload-center";

const viewComponents: Record<ViewId, ComponentType> = {
  dashboard: DashboardMain,
  upload: UploadCenter,
  knowledge: KnowledgeView,
  employee: EmployeeProfile
};

export function NeuralOperatingSystem() {
  const [activeView, setActiveView] = useState<ViewId>("dashboard");
  const ActiveView = viewComponents[activeView];

  return (
    <div className="relative min-h-screen overflow-hidden bg-obsidian text-white">
      <NeuralField />
      <AppSidebar activeView={activeView} onViewChange={setActiveView} />

      <div className="relative z-10 min-h-screen lg:pl-[280px]">
        <TopNavigation activeView={activeView} onViewChange={setActiveView} />

        <main className="mx-auto w-full max-w-[1680px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <AnimatePresence mode="wait">
            <motion.section
              key={activeView}
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <ActiveView />
            </motion.section>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
