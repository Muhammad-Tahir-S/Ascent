import Link from "next/link";
import Button from "@/components/atoms/button";
import Input from "@/components/molecules/input";
import Loader from "@/components/atoms/loader";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 overflow-y-auto px-2">
      <Button className="mb-[12px]" soundType="next">
        next
      </Button>

      <Link href="/signin">
        <Button
          className="mb-[12px]"
          variant="wine"
          width={200}
          soundType="back"
        >
          back
        </Button>
      </Link>
      <Button variant="outline" width={200} soundType="back">
        outline
      </Button>

      <Input
        className="mt-5"
        label="Test label"
        //  errorText="askjbkajsb"
      />
      <div className="flex items-center justify-between px-12 w-full mt-10">
        <Loader width={16} />
        <Loader width={40} />
        <Loader width={64} />
        <Loader width={128} />
      </div>
    </main>
  );
}
