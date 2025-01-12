import React, { useCallback, useRef, useState } from "react";
import { useTimePicker } from "../hooks/useTimePicker";
import { cn } from "../../lib/utils";
import { Period, Time, TimePickerProps } from "../types/types";
import { CloseButton } from "./timepicker-ui/close-button";
import { DecrementButton } from "./timepicker-ui/decrement-button";
import { IncrementButton } from "./timepicker-ui/increment-button";
import { TimeInputUI } from "./timepicker-ui/time-input-ui";
import { TogglePeriodButton } from "./timepicker-ui/toggle-period-button";

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
              refKey={key}
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
            decrementIcon={decrementIcon}
            buttonClassName={buttonClassName}
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
