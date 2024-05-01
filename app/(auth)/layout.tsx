import React, { ReactNode } from "react";
import MuteToggle from "@/components/atoms/mute-toggle";
import Header from "@/components/organisms/header";
import Loader from "@/components/atoms/loader";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col flex-1 gap-6 bg-yellow py-5 px-8">
      <Header />
      <div className="flex-1 w-full  justify-center items-center flex flex-col gap-5">
        <div className="animate-slideIn">
          <Loader width={72} />
        </div>

        {children}
      </div>
    </div>
  );
}
