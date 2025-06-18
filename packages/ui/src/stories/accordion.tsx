"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";

function AccordionRoot({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        {/* @ts-ignore */}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

interface AccordionProps {
  /** 触发器的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/accordion#trigger">参数</a> */
  triggerProps?: React.ComponentProps<typeof AccordionPrimitive.Trigger>;
  /** 内容区域的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/accordion#content">参数</a> */
  contentProps?: React.ComponentProps<typeof AccordionPrimitive.Content>;
  /** 项的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/accordion#item">参数</a> */
  itemProps?: React.ComponentProps<typeof AccordionPrimitive.Item>;
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/accordion#root">参数</a> */
  rootProps?: React.ComponentProps<typeof AccordionPrimitive.Root>;
  /** 数据 */
  data: {
    content: string | React.ReactNode;
    header?: React.ReactNode | string;
    key: string;
  }[];
}
/**
 *  ### 折叠面板
 */
function Accordion({
  triggerProps,
  contentProps,
  itemProps,
  data,
  rootProps,
}: AccordionProps) {
  return (
    <AccordionRoot type="single" className="w-full" {...rootProps}>
      {data?.map((item) => (
        <AccordionItem key={item.key} value={item.key || ""} {...itemProps}>
          <AccordionTrigger {...triggerProps}>{item.header}</AccordionTrigger>
          <AccordionContent {...contentProps}>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
// export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent };
export default Accordion;
