import {
  Rubik_Gemstones,
  Baumans,
  Rubik_Glitch,
  Rubik,
} from "next/font/google";

export const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const rubikGlitch = Rubik_Glitch({
  weight: ["400"],
  subsets: ["latin"],
});
export const rubikGemstones = Rubik_Gemstones({
  weight: ["400"],
  subsets: ["latin"],
});
export const baumans = Baumans({ weight: ["400"], subsets: ["latin"] });
