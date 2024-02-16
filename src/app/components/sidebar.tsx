import React from "react";
import { Flame } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-[60px] bg-secondary-100 border border-primary-100 flex flex-col h-full rounded-r-md">
      <div className="w-full flex items-center justify-center h-[60px]">
        <Flame className="w-[48px] h-[48px] stroke-bg-50" />
      </div>
    </div>
  );
}
