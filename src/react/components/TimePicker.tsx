import { ChevronDown, ChevronUp, X } from "lucide-react";
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  memo,
} from "react";
import { useTimePicker } from "../hooks/useTimePicker";
import { cn } from "../../lib/utils";
import {
  CloseButtonProps,
  DecrementButtonProps,
  IncrementButtonProps,
  Period,
  Time,
  TimeInputUIProps,
  TimePickerProps,
  TogglePeriodButtonProps,
} from "../types/types";
import { AnimatePresence, motion } from "framer-motion";

export function TimePicker({
  value,
  onChange,
  toggle,
  timepickerClassName,
  buttonClassName,
  sectionClassName,
  inputClassName,
  periodToggleClassName,
  incrementIcon,
  decrementIcon,
  closeButtonClassName,
  closeIcon,
}: TimePickerProps) {
  const { time, setHour, setMinute, setPeriod, validateHour, validateMinute } =
    useTimePicker(value);

  // Add direction state at the top of main component
  const [direction, setDirection] = useState(0);

  const hourInputRef = useRef<HTMLInputElement>(null);
  const minuteInputRef = useRef<HTMLInputElement>(null);
  const periodRef = useRef<HTMLButtonElement>(null);

  // Memoize handleHourChange
  const handleHourChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newHour = validateHour(e.target.value);
      setHour(newHour);
      onChange({ ...time, hour: newHour });
    },
    [validateHour, setHour, onChange, time]
  );

  // Memoize handleMinuteChange
  const handleMinuteChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMinute = validateMinute(e.target.value);
      setMinute(newMinute);
      onChange({ ...time, minute: newMinute });
    },
    [validateMinute, setMinute, onChange, time]
  );

  // Memoize handlePeriodChange
  const handlePeriodChange = useCallback(() => {
    const newPeriod = time.period === "AM" ? "PM" : "AM";
    setPeriod(newPeriod);
    onChange({ ...time, period: newPeriod });
  }, [setPeriod, onChange, time]);

  // Memoize handleKeyDown
  const handleKeyDown = useCallback(
    (
      e: React.KeyboardEvent,
      currentValue: number,
      min: number,
      max: number,
      setter: (value: number) => void,
      key: keyof Time
    ) => {
      let newValue = currentValue;

      if (e.key === "ArrowUp") {
        newValue = currentValue === max ? min : currentValue + 1;
      } else if (e.key === "ArrowDown") {
        newValue = currentValue === min ? max : currentValue - 1;
      }

      setter(newValue);
      onChange({ ...time, [key]: newValue });
    },
    [onChange, time]
  );

  // Memoize handleIncrement
  const handleIncrement = useCallback(
    (
      key: keyof Time,
      value: number,
      min: number,
      max: number,
      setter: (value: number) => void,
      isPeriod: boolean
    ) => {
      if (isPeriod) {
        handlePeriodChange();
      } else {
        const newValue = value === max ? min : value + 1;
        setDirection(1); // Set direction to 1 for increment
        setter(newValue);
        onChange({ ...time, [key]: newValue });
      }
    },
    [handlePeriodChange, setDirection, onChange, time]
  );

  // Memoize handleDecrement
  const handleDecrement = useCallback(
    (
      key: keyof Time,
      value: number,
      min: number,
      max: number,
      setter: (value: number) => void,
      isPeriod: boolean
    ) => {
      if (isPeriod) {
        handlePeriodChange();
      } else {
        const newValue = value === min ? max : value - 1;
        setDirection(-1);
        setter(newValue);
        onChange({ ...time, [key]: newValue });
      }
    },
    [handlePeriodChange, setDirection, onChange, time]
  );

  // Memoize renderSection
  const renderSection = useCallback(
    (
      value: number | Period,
      min: number,
      max: number,
      setter: (value: number) => void,
      ref: React.RefObject<HTMLInputElement | HTMLButtonElement>,
      key: keyof Time,
      isPeriod = false
    ) => {
      const increment = () =>
        handleIncrement(key, value as number, min, max, setter, isPeriod);
      const decrement = () =>
        handleDecrement(key, value as number, min, max, setter, isPeriod);

      return (
        <div className={cn("flex flex-col items-center", sectionClassName)}>
          <IncrementButton
            handleIncrement={increment}
            isPeriod={isPeriod}
            key={key}
            buttonClassName={buttonClassName}
            incrementIcon={incrementIcon}
          />
          {isPeriod ? (
            <TogglePeriodButton
              value={value}
              periodToggleClassName={periodToggleClassName}
              ref={ref as React.RefObject<HTMLButtonElement>}
              handlePeriodChange={handlePeriodChange}
            />
          ) : (
            <TimeInputUI
              value={value as number}
              ref={ref as React.RefObject<HTMLInputElement>}
              key={key}
              min={min}
              max={max}
              inputClassName={inputClassName}
              setter={setter}
              handleKeyDown={handleKeyDown}
              handleChange={
                key === "hour" ? handleHourChange : handleMinuteChange
              }
              direction={direction}
            />
          )}

          <DecrementButton
            handleDecrement={decrement}
            isPeriod={isPeriod}
            key={key}
            decrementIcon={decrementIcon}
          />
        </div>
      );
    },
    [
      sectionClassName,
      buttonClassName,
      incrementIcon,
      periodToggleClassName,
      handlePeriodChange,
      inputClassName,
      handleKeyDown,
      handleHourChange,
      handleMinuteChange,
      direction,
      decrementIcon,
      handleIncrement,
      handleDecrement,
    ]
  );

  return (
    <div
      className={cn(
        "inline-flex items-center p-4 space-x-4 border rounded-md shadow-sm bg-background border-input ",
        timepickerClassName
      )}>
      {renderSection(time.hour, 1, 12, setHour, hourInputRef, "hour")}
      <div className="text-2xl font-semibold">:</div>
      {renderSection(time.minute, 0, 59, setMinute, minuteInputRef, "minute")}
      {renderSection(time.period, 0, 1, () => {}, periodRef, "period", true)}

      <CloseButton
        toggle={toggle}
        closeButtonClassName={closeButtonClassName}
        closeIcon={closeIcon}
      />
    </div>
  );
}

const IncrementButton = ({
  handleIncrement,
  isPeriod,
  key,
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
      )}
      aria-label={`Increment ${isPeriod ? "period" : key}`}>
      {memoizedIcon}
    </button>
  );
};

const DecrementButton = ({
  handleDecrement,
  isPeriod,
  key,
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
      )}
      aria-label={`Increment ${isPeriod ? "period" : key}`}>
      {MemoizedIcon}
    </button>
  );
};

const TogglePeriodButton = ({
  value,
  ref,
  handlePeriodChange,
  periodToggleClassName,
}: TogglePeriodButtonProps) => (
  <button
    ref={ref}
    className={cn(
      "flex items-center justify-center w-12 h-12 text-2xl font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
      periodToggleClassName
    )}
    onClick={handlePeriodChange}
    tabIndex={0}
    aria-label="Toggle AM/PM">
    {value}
  </button>
);

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
const TimeInputUI = ({
  value,
  ref,
  key,
  min,
  max,
  setter,
  handleKeyDown,
  handleChange,
  inputClassName,
  direction,
}: TimeInputUIProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const prevValueRef = useRef(value);
  const shouldAnimate = !isEditing && prevValueRef.current !== value;

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
            value={value.toString().padStart(2, "0")}
            onChange={handleChange}
            onFocus={() => setIsEditing(true)}
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => handleKeyDown(e, value, min, max, setter, key)}
            className={cn(
              "w-12 h-12 text-2xl font-semibold text-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-background",
              inputClassName
            )}
            aria-label={`Edit ${key}`}
          />
        </motion.div>
      </AnimatePresence>
    ),
    [
      direction,
      shouldAnimate,
      value,
      ref,
      handleChange,
      inputClassName,
      key,
      handleKeyDown,
      min,
      max,
      setter,
    ]
  );

  return <div className="relative w-12 h-12 ">{memoizedAnimatePresence}</div>;
};

const CloseButton = memo(
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
