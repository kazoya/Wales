import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export function BrandLogo({
  className,
  alt,
  priority = false,
}: {
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt={alt ?? siteConfig.nameAr}
      width={400}
      height={160}
      className={cn("h-full w-full object-contain object-center", className)}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
