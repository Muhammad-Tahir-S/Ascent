import { ReactNode } from "react";

export default function LeaderboardsPagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col bg-new-purple gap-6 py-5 px-8 overflow-hidden">
      {children}
    </div>
  );
}
