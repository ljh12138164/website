"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@workspace/ui/lib/utils";

function HoverCardRoot({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  );
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}
interface HoverCardProps {
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/hover-card#root">参数</a> */
  rootProps?: React.ComponentProps<typeof HoverCardPrimitive.Root> & {
    className?: string;
  };
  /** 触发元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/hover-card#trigger">参数</a> */
  triggerProps?: React.ComponentProps<typeof HoverCardPrimitive.Trigger> & {
    children?: React.ReactNode;
  };
  /** 内容元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/hover-card#content">参数</a> */
  contentProps?: React.ComponentProps<typeof HoverCardPrimitive.Content> & {
    children?: React.ReactNode;
  };
}
function HoverCard({ rootProps, triggerProps, contentProps }: HoverCardProps) {
  return (
    <HoverCardRoot {...rootProps}>
      <HoverCardTrigger {...triggerProps}>
        {triggerProps?.children}
      </HoverCardTrigger>
      <HoverCardContent {...contentProps}>
        {contentProps?.children}
      </HoverCardContent>
    </HoverCardRoot>
  );
}
export { HoverCardRoot, HoverCardTrigger, HoverCardContent, HoverCard };
