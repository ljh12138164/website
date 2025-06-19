import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function AlertRoot({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  );
}

interface AlertProps {
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/alert#root">参数</a> */
  rootProps?: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>;
  /** 标题的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/alert#title">参数</a> */
  titleProps?: React.ComponentProps<"div">;
  /** 描述的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/alert#description">参数</a> */
  descriptionProps?: React.ComponentProps<"div">;
  /** 标题 */
  title?: React.ReactNode | string;
  /** 描述 */
  description?: React.ReactNode | string;
  /** 内容 */
  children?: React.ReactNode;
}
function Alert({
  rootProps,
  titleProps,
  descriptionProps,
  title,
  description,
  children,
}: AlertProps) {
  return (
    <AlertRoot {...rootProps}>
      <AlertTitle {...titleProps}>{title}</AlertTitle>
      <AlertDescription {...descriptionProps}>{description}</AlertDescription>
      {children}
    </AlertRoot>
  );
}

export { Alert, AlertRoot, AlertTitle, AlertDescription };
