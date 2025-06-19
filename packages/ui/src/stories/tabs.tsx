"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@workspace/ui/lib/utils";

function TabsRoot({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/50 inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsRoot };

interface TabsProps {
  /** 数据 */
  data: {
    label: string;
    value: string;
    content: React.ReactNode;
  }[];
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tabs#root">参数</a> */
  rootProps?: React.ComponentProps<typeof TabsPrimitive.Root>;
  /** 列表元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tabs#list">参数</a> */
  listProps?: React.ComponentProps<typeof TabsPrimitive.List>;
  /** 触发元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tabs#trigger">参数</a> */
  triggerProps?: React.ComponentProps<typeof TabsPrimitive.Trigger>;
  /** 内容元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/tabs#content">参数</a> */
  contentProps?: React.ComponentProps<typeof TabsPrimitive.Content>;
}
function Tabs({
  data,
  rootProps,
  listProps,
  triggerProps,
  contentProps,
}: TabsProps) {
  return (
    <TabsRoot {...rootProps}>
      <TabsList {...listProps}>
        {data.map((item) => (
          <TabsTrigger key={item.value} value={item.value} {...triggerProps}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.map((item) => (
        <TabsContent key={item.value} value={item.value} {...contentProps}>
          {item.content}
        </TabsContent>
      ))}
    </TabsRoot>
  );
}
