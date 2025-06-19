import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";

function BreadcrumbRoot({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {/* @ts-ignore */}
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      {/* @ts-ignore */}
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}
interface BreadcrumbProps {
  /** 数据 */
  data: {
    label: string;
    href: string;
  }[];
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/breadcrumb#root">参数</a> */
  rootProps?: React.ComponentProps<"nav">;
  /** 列表的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/breadcrumb#list">参数</a> */
  listProps?: React.ComponentProps<"ol">;
  /** 项目的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/breadcrumb#item">参数</a> */
  itemProps?: React.ComponentProps<"li">;
  /** 链接的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/breadcrumb#link">参数</a> */
  linkProps?: React.ComponentProps<"a">;
}

function Breadcrumb({
  rootProps,
  data,
  listProps,
  itemProps,
  linkProps,
}: BreadcrumbProps) {
  return (
    <BreadcrumbRoot {...rootProps}>
      <BreadcrumbList {...listProps}>
        {data.map((item, index) => (
          <BreadcrumbItem key={item.label} {...itemProps}>
            <BreadcrumbLink href={item.href} {...linkProps}>
              {item.label}
            </BreadcrumbLink>
            {index !== data.length - 1 && <BreadcrumbSeparator />}
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </BreadcrumbRoot>
  );
}
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
