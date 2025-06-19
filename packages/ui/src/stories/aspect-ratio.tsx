"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

interface AspectRatioProps {
  /** 内容 */
  children?: React.ReactNode;
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/aspect-ratio#root">参数</a> */
  rootProps?: React.ComponentProps<typeof AspectRatioPrimitive.Root>;
}

function AspectRatio({ children, rootProps }: AspectRatioProps) {
  return (
    <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...rootProps}>
      {children}
    </AspectRatioPrimitive.Root>
  );
}

export { AspectRatio };
