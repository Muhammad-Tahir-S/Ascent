import Button from "@/components/atoms/button";
import Input from "@/components/molecules/input";
import Typography from "@/components/atoms/typography";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="h-[450px] aspect-square border-[2px] bg-yellow filter brightness-[105%] border-pink-red 
    shadow-pink-red shadow-md rounded-2xl flex flex-col p-5 justify-between animate-slideIn"
    >
      <Typography
        variant="H2"
        fontFamily="rubikGlitch"
        className="text-center text-pink-red animate-breathe"
      >
        Sign In
      </Typography>

      <div>
        <Input className="mt-5" label="Username" variant="olive" />

        <Input className="mt-5" label="Password" hideable variant="olive" />
      </div>

      <Link href="/">
        <Button variant="primary" size="lg" width="full" soundType="back">
          sign in
        </Button>
      </Link>
    </div>
  );
}
