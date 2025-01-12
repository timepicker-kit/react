import { AnimatePresence, motion, MotionProps } from "framer-motion";
import { Clock } from "lucide-react";
import {
  cloneElement,
  createContext,
  isValidElement,
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { formatTime } from "../hooks/timeUtils";
import { useClickOutside } from "../hooks/useClickOutside";
import {
  PopoverContentProps,
  PopoverContextType,
  SharedPopoverTypes,
  TimeInput,
} from "../types/types";
import { cn } from "../../lib/utils";

const PopoverContext = createContext<PopoverContextType>(null);

export const Popover = memo(function Popover({
  children,
  className,
}: SharedPopoverTypes) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  const popoverRef = useRef<HTMLDivElement>(null);

  useClickOutside(popoverRef, () => setIsOpen(false));

  // Add escape key handler
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const contextValue = useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);

  const memoizedProvider = useMemo(
    () => (
      <PopoverContext.Provider value={contextValue}>
        <div className={cn(" relative", className)} ref={popoverRef}>
          {children}
        </div>
      </PopoverContext.Provider>
    ),
    [contextValue, className, popoverRef, children]
  );

  return memoizedProvider;
});

export const PopoverTrigger = memo(
  ({ children, className }: SharedPopoverTypes) => {
    const context = useContext(PopoverContext);

    if (!context)
      throw new Error("PopoverTrigger must be used within a Popover");

    const { toggle } = context;

    return (
      <div onClick={toggle} className={cn("cursor-pointer", className)}>
        {children}
      </div>
    );
  }
);

export const PopoverContent = memo(
  ({
    children,
    className,
    isAnimate = true,
    variants,
  }: PopoverContentProps & {
    children: React.ReactElement<{ toggle?: () => void }>;
  }) => {
    const context = useContext(PopoverContext);

    if (!context)
      throw new Error("PopoverContent must be used within a Popover");

    const { isOpen, toggle } = context;

    // Memoize default animation variants to prevent recreation on every render
    const defaultVariants: MotionProps = useMemo(
      () => ({
        initial: { opacity: 0, y: "20%" },
        animate: { opacity: 1, y: "5%" },
        exit: { opacity: 0, y: "-20%" },
        transition: { duration: 0.2 },
      }),
      []
    );

    // Memoize animationProps to avoid unnecessary re-renders
    const animationProps = useMemo(
      () => (isAnimate ? variants || defaultVariants : {}),
      [isAnimate, variants, defaultVariants]
    );

    // Memoize AnimatePresence to prevent unnecessary re-renders
    const memoizedAnimatePresence = useMemo(
      () => (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={cn(" absolute translate-y-2 shadow-sm", className)}
              {...animationProps}>
              {isValidElement(children)
                ? cloneElement(children, { toggle })
                : children}
            </motion.div>
          )}
        </AnimatePresence>
      ),
      [isOpen, className, animationProps, children, toggle]
    );

    return isAnimate ? (
      memoizedAnimatePresence
    ) : (
      <div className={cn("absolute translate-y-2 shadow-sm", className)}>
        {cloneElement(children, { toggle })}
      </div>
    );
  }
);

export const PopoverButton = memo(({ time }: { time: TimeInput }) => {
  const clockIcon = useMemo(() => <Clock className="w-4 h-4 mr-2" />, []);

  return (
    <button className="inline-flex items-center justify-start w-[200px] px-3 py-2 text-sm font-medium bg-background border border-input rounded-md shadow-sm hover:bg-accent hover:text-accent-foreground">
      {clockIcon}
      <span>{formatTime(time)}</span>
    </button>
  );
});
