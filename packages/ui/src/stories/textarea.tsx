import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";
interface TextareaProps extends React.ComponentProps<"textarea"> {
  /** 根元素的属性  */
  className?: string;
  /** 值 */
  value?: string;
  /** 默认值 */
  defaultValue?: string;
  /** 值改变的回调 */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
function Textarea({
  className,
  value,
  defaultValue,
  onChange,
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      {...props}
    />
  );
}

export { Textarea };
