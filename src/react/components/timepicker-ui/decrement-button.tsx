import { ChevronDown } from "lucide-react";
import { DecrementButtonProps } from "../../types/types";
import { useMemo } from "react";
import { cn } from "../../../lib/utils";

export const DecrementButton = ({
  handleDecrement,
  buttonClassName,
  decrementIcon: Icon = ChevronDown,
}: DecrementButtonProps) => {
  const MemoizedIcon = useMemo(() => <Icon className="w-4 h-4" />, [Icon]);

  return (
    <button
      onClick={handleDecrement}
      className={cn(
        "p-1 relative z-10 rounded-md hover:bg-muted",
        buttonClassName
      )}>
      {MemoizedIcon}
    </button>
  );
};
