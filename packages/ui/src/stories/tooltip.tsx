"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@workspace/ui/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function TooltipRoot({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

interface TooltipProps {
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tooltip#root">参数</a> */
  rootProps?: React.ComponentProps<typeof TooltipPrimitive.Root>;
  /** 触发元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tooltip#trigger">参数</a> */
  triggerProps?: React.ComponentProps<typeof TooltipPrimitive.Trigger>;
  /** 内容元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tooltip#content">参数</a> */
  contentProps?: React.ComponentProps<typeof TooltipPrimitive.Content>;
  /** 触发元素 */
  children?: React.ReactNode | string;
  /** 内容 */
  content?: React.ReactNode | string;
}
function Tooltip({
  rootProps,
  triggerProps,
  contentProps,
  children,
  content,
}: TooltipProps) {
  return (
    <TooltipRoot {...rootProps}>
      <TooltipTrigger {...triggerProps}>{children}</TooltipTrigger>
      <TooltipContent {...contentProps}>{content}</TooltipContent>
    </TooltipRoot>
  );
}
export {
  Tooltip,
  TooltipRoot,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
};
