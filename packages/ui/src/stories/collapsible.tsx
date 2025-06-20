"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "lucide-react";

function CollapsibleRoot({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  );
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  );
}
interface CollapsibleProps {
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/collapsible#root">参数</a> */
  rootProps?: React.ComponentProps<typeof CollapsiblePrimitive.Root>;
  /** 触发元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/collapsible#trigger">参数</a> */
  triggerProps?: React.ComponentProps<
    typeof CollapsiblePrimitive.CollapsibleTrigger
  > & {
    children?: React.ReactNode;
  };
  /** 内容元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/collapsible#content">参数</a> */
  contentProps?: React.ComponentProps<
    typeof CollapsiblePrimitive.CollapsibleContent
  > & {
    children?: React.ReactNode;
  };
}
function Collapsible({
  rootProps,
  triggerProps,
  contentProps,
}: CollapsibleProps) {
  return (
    <CollapsibleRoot {...rootProps}>
      <CollapsibleTrigger {...triggerProps}>
        {triggerProps?.children}
      </CollapsibleTrigger>
      <CollapsibleContent {...contentProps}>
        {contentProps?.children}
      </CollapsibleContent>
    </CollapsibleRoot>
  );
}

export { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent, Collapsible };
