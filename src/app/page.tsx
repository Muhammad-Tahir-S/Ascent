import clsx from "clsx";
import Button from "./components/button";
import SpriteIcon from "./components/sprite-icon";
import { baumans, rubikGemstones, rubikGlitch } from "./fonts";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 overflow-y-auto p-[30px] h-full">
      <div className={clsx(rubikGemstones.className, "text-yellow-300")}>
        Home
      </div>
      <Button soundType="next">Next</Button>
      <Button soundType="back">Back</Button>
      <SpriteIcon
        id={"logo-1"}
        props={{ width: 24, height: 24, fill: "red" }}
      />
    </main>
  );
}
