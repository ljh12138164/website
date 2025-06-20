import { cn } from "@workspace/ui/lib/utils";

interface SkeletonProps extends React.ComponentProps<"div"> {
  /** 和div的属性一样的 */
  className?: string;
}
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
