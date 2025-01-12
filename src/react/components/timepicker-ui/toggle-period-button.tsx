import { forwardRef } from "react";
import { cn } from "../../../lib/utils";
import { TogglePeriodButtonProps } from "../../types/types";

export const TogglePeriodButton = forwardRef<
  HTMLButtonElement,
  TogglePeriodButtonProps
>(({ value, periodToggleClassName, handlePeriodChange }, ref) => {
  return (
    <button
      ref={ref} // Forward the ref to the button element
      onClick={handlePeriodChange}
      className={cn(
        "w-12 h-12 text-2xl font-semibold text-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-background",
        periodToggleClassName
      )}>
      {value}
    </button>
  );
});
