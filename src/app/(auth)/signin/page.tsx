import Button from "@/app/components/button";
import Input from "@/app/components/input";
import Typography from "@/app/components/typography";
import React from "react";

export default function page() {
  return (
    <div
      className="h-[450px] aspect-square border-[2px] bg-yellow filter brightness-[105%] border-pink-red 
    shadow-pink-red shadow-md rounded-2xl flex flex-col p-5 justify-between animate-slideIn"
    >
      <Typography variant="H2" className="text-center text-pink-red">
        Sign In
      </Typography>

      <div>
        <Input className="mt-5" label="Username" variant="olive" />

        <Input className="mt-5" label="Password" hideable variant="olive" />
      </div>

      <Button variant="primary" width="full" soundType="back">
        sign in
      </Button>
    </div>
  );
}
