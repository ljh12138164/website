"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";

function InputOTPRoot({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext) as {
    slots: {
      char: string;
      hasFakeCaret: boolean;
      isActive: boolean;
    }[];
  };
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}
interface InputOTPProps {
  /** 根元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/input-otp#root">参数</a> */
  rootProps?: React.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
  };
  /** 组元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/input-otp#group">参数</a> */
  groupProps?: React.ComponentProps<"div">;
  /** 插槽元素的属性 <a target="_blank" href="https://www.radix-ui.com/primitives/docs/components/input-otp#slot">参数</a> */
  itemPros?: {
    key: number;
    className?: string;
  };
}
function InputOTP({ rootProps, groupProps, itemPros }: InputOTPProps) {
  return (
    <InputOTPRoot {...rootProps}>
      <InputOTPGroup {...groupProps}>
        {Array.from({ length: itemPros?.key ?? 6 }).map((_, index) => (
          <InputOTPSlot
            key={index}
            index={index}
            className={itemPros?.className}
          />
        ))}
      </InputOTPGroup>
    </InputOTPRoot>
  );
}
export {
  InputOTPRoot,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  InputOTP,
};
