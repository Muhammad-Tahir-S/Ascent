"use client";
import { usePathname } from "next/navigation";
import Typography from "../../atoms/typography";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pageName = pathname === "/" ? "Home" : pathname.split("/")?.[1] || "";

  return (
    <div>
      <Typography
        variant="H4"
        fontFamily="rubikGemstones"
        className="capitalize"
      >
        {pageName}
      </Typography>
    </div>
  );
}
