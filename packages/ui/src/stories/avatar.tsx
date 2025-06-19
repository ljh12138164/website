"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@workspace/ui/lib/utils";

function AvatarRoot({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
}
interface AvatarProps {
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/avatar#root">参数</a> */
  rootProps?: React.ComponentProps<typeof AvatarPrimitive.Root>;
  /** 图片的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/avatar#image">参数</a> */
  imageProps?: React.ComponentProps<typeof AvatarPrimitive.Image>;
  /** 图片的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/avatar#fallback">参数</a> */
  fallbackProps?: React.ComponentProps<typeof AvatarPrimitive.Fallback>;
}

function Avatar({ rootProps, imageProps, fallbackProps }: AvatarProps) {
  return (
    <AvatarRoot {...rootProps}>
      <AvatarImage {...imageProps} />
      <AvatarFallback {...fallbackProps} />
    </AvatarRoot>
  );
}

export { Avatar, AvatarRoot, AvatarImage, AvatarFallback };
