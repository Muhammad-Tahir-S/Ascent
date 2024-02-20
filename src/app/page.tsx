import clsx from "clsx";
import Button from "./components/button";
import { rubikGemstones } from "./fonts";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 overflow-y-auto px-2">
      <div className={clsx(rubikGemstones.className)}>Home</div>
      <Button className="mb-[12px]" soundType="next">
        next
      </Button>
      <Button variant="secondary" width={200} soundType="back">
        back
      </Button>
    </main>
  );
}
