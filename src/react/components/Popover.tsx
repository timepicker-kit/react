import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { Clock } from "lucide-react";
import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { formatTime } from "../hooks/timeUtils";
import { useClickOutside } from "../hooks/useClickOutside";
import { cn } from "../../lib/utils";
import {
  PopoverContentProps,
  PopoverContextType,
  SharedPopoverTypes,
  TimeInput,
} from "../types/types";

const PopoverContext = createContext<PopoverContextType>(null);

export function Popover({ children, className }: SharedPopoverTypes) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const popoverRef = useRef<HTMLDivElement>(null);

  useClickOutside(popoverRef, () => setIsOpen(false));

  // Add escape key handler
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <PopoverContext.Provider value={{ isOpen, toggle }}>
      <div className={cn(" relative", className)} ref={popoverRef}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export const PopoverTrigger = ({ children, className }: SharedPopoverTypes) => {
  const context = useContext(PopoverContext);

  if (!context) throw new Error("PopoverTrigger must be used within a Popover");

  const { toggle } = context;

  return (
    <div onClick={toggle} className={cn("cursor-pointer", className)}>
      {children}
    </div>
  );
};

export const PopoverContent = ({
  children,
  className,
  isAnimate = true,
  variants,
}: PopoverContentProps) => {
  const context = useContext(PopoverContext);

  if (!context) throw new Error("PopoverContent must be used within a Popover");

  const { isOpen, toggle } = context;

  if (!isOpen) return null;

  // Validate children type
  if (
    !isValidElement<{
      toggle: () => void;
    }>(children)
  ) {
    throw new Error(
      "PopoverContent expects a valid React element as its child."
    );
  }

  // Default animation variants
  const defaultVariants: MotionProps = {
    initial: { opacity: 0, y: "20%" },
    animate: { opacity: 1, y: "5%" },
    exit: { opacity: 0, y: "-20%" },
    transition: { duration: 0.2 },
  };

  // Use provided variants if available, otherwise use default variants
  const animationProps = isAnimate ? variants || defaultVariants : {};

  return isAnimate ? (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={cn(" absolute translate-y-2 shadow-sm", className)}
          {...animationProps}>
          {cloneElement(children, { toggle })}
        </motion.div>
      )}
    </AnimatePresence>
  ) : (
    <div className={cn("absolute translate-y-2 shadow-sm", className)}>
      {cloneElement(children, { toggle })}
    </div>
  );
};

export const PopoverButton = ({
  time,
  className,
}: {
  time: TimeInput;
  className?: string;
}) => (
  <button
    className={cn(
      "inline-flex items-center justify-start w-[200px] px-3 py-2 text-sm font-medium bg-background border border-input rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground",
      className
    )}>
    <Clock className="w-4 h-4 mr-2" />
    <span>{formatTime(time)}</span>
  </button>
);
