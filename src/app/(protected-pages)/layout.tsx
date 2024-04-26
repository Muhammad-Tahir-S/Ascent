import RankBanner from "../components/rank-banner";
import Sidebar from "../components/sidebar";
import { ReactNode } from 'react';



export default function ProtectedPagesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
      <>
        <Sidebar />
        <RankBanner />
        <div className="flex-1 flex flex-col py-5 px-8">{children}</div>
      </>
  );
}
