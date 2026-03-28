import React from "react";
import {
  Briefcase,
  Cpu,
  Book,
  Globe,
  Monitor,
  List,
  Zap,
  FileText,
  Play,
  Shield,
  Database,
  Key,
  Building,
  Puzzle,
} from "lucide-react";

function Sidebar() {
  const itemClass =
    "flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[12px] text-[#2B2B2B] hover:bg-gray-50 cursor-pointer";

  const iconClass = "w-[14px] h-[14px] text-[#6B7280] shrink-0";

  const activeItemClass =
    "relative flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#EEF0FF] text-[#4F46E5] text-[12px] font-medium cursor-pointer";

  const activeIconClass = "w-[14px] h-[14px] text-[#4F46E5] shrink-0";

  return (
    <div className="w-[190px] bg-white border-r border-[#ECECF2] px-3 py-3 flex flex-col justify-start">
      <div className="text-[10px] leading-none text-[#9AA0AE] uppercase mb-2 font-semibold">
        MY PROJECTS
      </div>

      <div className="space-y-0.5 mb-4">
        <div className={itemClass}>
          <Briefcase className={iconClass} />
          <span>Agents</span>
        </div>

        <div className={itemClass}>
          <Cpu className={iconClass} />
          <span>AI Models</span>
        </div>

        <div className={itemClass}>
          <Book className={iconClass} />
          <span>Library</span>
        </div>
      </div>

      <div className="text-[10px] leading-none text-[#9AA0AE] uppercase mb-2 font-semibold">
        ORCHESTRATOR
      </div>

      <div className="space-y-0.5 mb-4">
        <div className={itemClass}>
          <Globe className={iconClass} />
          <span>Published</span>
        </div>

        <div className={itemClass}>
          <Monitor className={iconClass} />
          <span>Machines</span>
        </div>

        <div className={itemClass}>
          <List className={iconClass} />
          <span>Queues</span>
        </div>

        <div className={itemClass}>
          <Zap className={iconClass} />
          <span>Triggers</span>
        </div>

        <div className={itemClass}>
          <FileText className={iconClass} />
          <span>Jobs</span>
        </div>

        <div className={itemClass}>
          <Play className={iconClass} />
          <span>Executions</span>
        </div>

        <div className={itemClass}>
          <Shield className={iconClass} />
          <span>Vault</span>
        </div>

        <div className={activeItemClass}>
          <div className="absolute left-0 top-0 h-full w-[3px] bg-[#4F46E5] rounded-r" />
          <Database className={activeIconClass} />
          <span>Knowledge Base</span>
        </div>

        <div className={itemClass}>
          <Key className={iconClass} />
          <span>Key Store</span>
        </div>
      </div>

      <div className="text-[10px] leading-none text-[#9AA0AE] uppercase mb-2 font-semibold">
        ADMIN
      </div>

      <div className="space-y-0.5">
        <div className={itemClass}>
          <Building className={iconClass} />
          <span>Tenant</span>
        </div>

        <div className={itemClass}>
          <Puzzle className={iconClass} />
          <span>Integrations</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;