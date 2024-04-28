import Header from "@/components/organisms/header/header";
import Sidebar from "@/components/organisms/sidebar";
import { ReactNode } from "react";

export default function ProtectedPagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6 py-5 px-8">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </>
  );
}
