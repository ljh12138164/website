import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

function CardRoot({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-[data-slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}
interface CardProps {
  className?: string;
  /** 标题 */
  title: string | React.ReactNode;
  /** 描述 */
  description: string | React.ReactNode;
  /** 内容 */
  content: string | React.ReactNode;
  /** 底部 */
  footer: string | React.ReactNode;
  /** 根元素的属性 */
  rootProps?: React.ComponentProps<"div">;
  /** 头部元素的属性 */
  headerProps?: React.ComponentProps<"div">;
  /** 内容元素的属性 */
  contentProps?: React.ComponentProps<"div">;
  /** 底部元素的属性 */
  footerProps?: React.ComponentProps<"div">;
  /** 标题元素的属性 */
  titleProps?: React.ComponentProps<"div">;
  /** 描述元素的属性 */
  descriptionProps?: React.ComponentProps<"div">;
}
function Card({
  className,
  title,
  description,
  content,
  footer,
  rootProps,
  headerProps,
  contentProps,
  footerProps,
  titleProps,
  descriptionProps,
}: CardProps) {
  return (
    <CardRoot className={className} {...rootProps}>
      <CardHeader {...headerProps}>
        <CardTitle {...titleProps}>{title}</CardTitle>
        <CardDescription {...descriptionProps}>{description}</CardDescription>
      </CardHeader>
      <CardContent {...contentProps}>{content}</CardContent>
      <CardFooter {...footerProps}>{footer}</CardFooter>
    </CardRoot>
  );
}

export {
  Card,
  CardRoot,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
