import { X } from "lucide-react";
import { memo, useCallback, useMemo } from "react";
import { CloseButtonProps } from "../../types/types";
import { cn } from "../../../lib/utils";

export const CloseButton = memo(
  ({
    toggle,
    closeIcon: Icon = X, // Default to the X icon from lucide-react
    closeButtonClassName,
  }: CloseButtonProps) => {
    const handleClick = useCallback(() => toggle?.(), [toggle]);

    const memoizedIcon = useMemo(() => <Icon size={16} />, [Icon]);

    return (
      <button
        className={cn(
          "absolute p-1 rounded-full top-1 right-1 hover:bg-muted",
          closeButtonClassName
        )}
        title="Close"
        onClick={handleClick}>
        {memoizedIcon}
      </button>
    );
  }
);
