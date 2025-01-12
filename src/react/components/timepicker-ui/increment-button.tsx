import { ChevronUp } from "lucide-react";
import { IncrementButtonProps } from "../../types/types";
import { useMemo } from "react";
import { cn } from "../../../lib/utils";

export const IncrementButton = ({
  handleIncrement,
  buttonClassName,
  incrementIcon: Icon = ChevronUp,
}: IncrementButtonProps) => {
  const memoizedIcon = useMemo(() => <Icon className="w-4 h-4" />, [Icon]);

  return (
    <button
      onClick={handleIncrement}
      className={cn(
        "p-1 relative z-10 rounded-md hover:bg-muted",
        buttonClassName
      )}>
      {memoizedIcon}
    </button>
  );
};
