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
      {children}
    </>
  );
}
