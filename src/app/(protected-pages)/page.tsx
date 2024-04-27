import Button from "../components/button";
import Input from "../components/input";
import Typography from "../components/typography";

export default async function Home() {
  return (
    <main className="flex flex-col flex-1 overflow-y-auto px-2">
      <Typography variant="body" fontFamily="rubikGemstones">
        Home
      </Typography>
      <Button className="mb-[12px]" soundType="next">
        next
      </Button>
      <Button className="mb-[12px]" variant="wine" width={200} soundType="back">
        back
      </Button>
      <Button variant="outline" width={200} soundType="back">
        outline
      </Button>

      <Input
        className="mt-5"
        label="Test label"
        //  errorText="askjbkajsb"
      />
    </main>
  );
}
