import { SVGProps } from "react";

export default function SpriteIcon({
  id,
  props,
}: {
  id: string;
  props: SVGProps<SVGSVGElement>;
}) {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}
