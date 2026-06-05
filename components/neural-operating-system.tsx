"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { OrganizationGroup, ViewId } from "@/lib/data";
import { AppSidebar } from "@/components/app-sidebar";
import { EmployeeProfile } from "@/components/employee-profile";
import { GroupIntelligence } from "@/components/group-intelligence";
import { GroupSelection } from "@/components/group-selection";
import { KnowledgeView } from "@/components/knowledge-view";
import { NeuralField } from "@/components/neural-field";
import { TopNavigation } from "@/components/top-navigation";
import { UploadCenter } from "@/components/upload-center";

export function NeuralOperatingSystem() {
  const [activeView, setActiveView] = useState<ViewId>("groups");
  const [activeGroup, setActiveGroup] = useState<OrganizationGroup | null>(null);

  function handleSelectGroup(group: OrganizationGroup) {
    setActiveGroup(group);
    setActiveView("upload");
  }

  function renderActiveView() {
    switch (activeView) {
      case "groups":
        return <GroupSelection onSelectGroup={handleSelectGroup} />;
      case "upload":
        return <UploadCenter activeGroup={activeGroup} />;
      case "knowledge":
        return <KnowledgeView />;
      case "employee":
        return <EmployeeProfile />;
      case "group":
        return <GroupIntelligence activeGroup={activeGroup} />;
      default:
        return <GroupSelection onSelectGroup={handleSelectGroup} />;
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-obsidian text-white">
      <NeuralField />
      <AppSidebar
        activeView={activeView}
        activeGroupName={activeGroup?.name}
        onViewChange={setActiveView}
      />

      <div className="relative z-10 min-h-screen lg:pl-[280px]">
        <TopNavigation
          activeView={activeView}
          activeGroupName={activeGroup?.name}
          onViewChange={setActiveView}
        />

        <main className="mx-auto w-full max-w-[1680px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <AnimatePresence mode="wait">
            <motion.section
              key={activeView}
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderActiveView()}
            </motion.section>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
