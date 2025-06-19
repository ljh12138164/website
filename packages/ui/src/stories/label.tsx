"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@workspace/ui/lib/utils";

function LabelRoot({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}
interface LabelProps {
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/label#root">参数</a> */
  rootProps?: React.ComponentProps<typeof LabelPrimitive.Root>;
  /** 内容 */
  children?: React.ReactNode;
}
function Label({ rootProps, children }: LabelProps) {
  return <LabelRoot {...rootProps}>{children}</LabelRoot>;
}

export { Label, LabelRoot };
