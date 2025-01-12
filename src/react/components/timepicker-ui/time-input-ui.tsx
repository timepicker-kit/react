import { forwardRef, useEffect, useId, useMemo, useRef, useState } from "react";
import { TimeInputUIProps } from "../../types/types";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../../lib/utils";

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 35 : -35, // Bottom-to-top for increases
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    y: direction > 0 ? -35 : 35, // Top-to-bottom for decreases
    opacity: 0,
  }),
};

export const TimeInputUI = forwardRef<
  HTMLInputElement,
  Omit<TimeInputUIProps, "ref">
>(
  (
    {
      value,
      refKey,
      min,
      max,
      setter,
      handleKeyDown,
      handleChange,
      inputClassName,
      direction,
    },
    ref
  ) => {
    const [isEditing, setIsEditing] = useState(false);
    const prevValueRef = useRef(value);
    const shouldAnimate = !isEditing && prevValueRef.current !== value;

    const id = useId();

    // Update prevValue when actual value changes
    useEffect(() => {
      prevValueRef.current = value;
    }, [value]);

    const memoizedAnimatePresence = useMemo(
      () => (
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={shouldAnimate ? value : "static"}
            custom={direction}
            variants={slideVariants}
            initial={shouldAnimate ? "enter" : "center"}
            animate="center"
            exit={shouldAnimate ? "exit" : "center"}
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{ position: "absolute", width: "100%" }}>
            <input
              ref={ref}
              type="text"
              key={id}
              value={value.toString().padStart(2, "0")}
              onChange={handleChange}
              onFocus={() => setIsEditing(true)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) =>
                handleKeyDown(e, value, min, max, setter, refKey)
              }
              className={cn(
                "w-12 h-12 text-2xl font-semibold text-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-background",
                inputClassName
              )}
              aria-label={`Edit ${refKey}`}
            />
          </motion.div>
        </AnimatePresence>
      ),
      [
        direction,
        shouldAnimate,
        value,
        ref,
        id,
        handleChange,
        inputClassName,
        refKey,
        handleKeyDown,
        min,
        max,
        setter,
      ]
    );

    return <div className="relative w-12 h-12 ">{memoizedAnimatePresence}</div>;
  }
);
