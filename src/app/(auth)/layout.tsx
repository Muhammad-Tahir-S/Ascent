import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 w-full bg-yellow justify-center items-center flex flex-col">
      {children}
    </div>
  );
}
