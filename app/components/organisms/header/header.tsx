import MuteToggle from "../../atoms/mute-toggle";
import Breadcrumbs from "./breadcrumbs";

export default function Header() {
  return (
    <div className="w-full h-[40px] flex justify-between ite">
      <Breadcrumbs />
      <MuteToggle />
    </div>
  );
}
