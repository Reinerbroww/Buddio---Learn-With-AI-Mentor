import Link from "next/link";
import { cn } from "@/lib/utils";

export function BuddioLogo({
  href = "/",
  size = "md",
  className,
  showWordmark = true,
}: {
  href?: string;
  size?: "sm" | "md";
  className?: string;
  showWordmark?: boolean;
}) {
  const box = size === "sm" ? "h-9 w-9 rounded-xl" : "h-10 w-10 rounded-xl";
  const text = size === "sm" ? "text-lg" : "text-xl";

  const mark = (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0 select-none",
        box
      )}
    >
      <img
        src="/buddio-logo.png"
        alt="Buddio"
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );

  return (
    <Link href={href} className={cn("flex items-center gap-2.5 group", className)}>
      {mark}
      {showWordmark && (
        <span className={cn("font-bold tracking-tight text-slate-900", text)}>Buddio</span>
      )}
    </Link>
  );
}
