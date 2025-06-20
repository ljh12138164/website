"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";

function CheckboxRoot({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

interface CheckboxProps {
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/checkbox#root">参数</a> */
  rootProps?: React.ComponentProps<typeof CheckboxPrimitive.Root>;
  /** 根元素的类名 */
  className?: string;
  /** 内容 */
  children?: React.ReactNode;
}
function Checkbox({ className, children, rootProps }: CheckboxProps) {
  return (
    <CheckboxRoot className={cn(className)} {...rootProps}>
      {children}
    </CheckboxRoot>
  );
}

export { CheckboxRoot, Checkbox };
