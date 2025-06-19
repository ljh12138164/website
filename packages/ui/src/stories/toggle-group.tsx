"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@workspace/ui/lib/utils";
import { toggleVariants } from "@workspace/ui/stories/toggle";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

function ToggleGroupRoot({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

interface ToggleGroupProps {
  /** 数据 */
  data: {
    label: string;
    value: string;
  }[];
  /** 值 */
  value?: string[];
  /** 值改变的回调 */
  onValueChange?: (value: string[]) => void;
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/toggle-group#root">参数</a> */
  rootProps?: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>;
  /** 默认值 */
  defaultValue?: string[];
  /** 项目元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/toggle-group#item">参数</a> */
  itemProps?: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>;
}
function ToggleGroup({
  data,
  rootProps,
  itemProps,
  defaultValue,
  value,
  onValueChange,
}: ToggleGroupProps) {
  return (
    <ToggleGroupRoot
      {...rootProps}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      type="multiple"
    >
      {data.map((item) => (
        <ToggleGroupItem key={item.value} value={item.value} {...itemProps}>
          {item.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  );
}
export { ToggleGroup, ToggleGroupItem };
