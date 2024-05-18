import { ReactNode } from "react";

export default function SettingsPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="flex-1 flex flex-col py-5 px-8">{children}</div>;
}
