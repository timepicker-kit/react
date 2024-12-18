import { ChevronDown, ChevronUp, X } from "lucide-react";
import React, { useRef } from "react";
import { useTimePicker } from "../hooks/useTimePicker";
import { cn } from "../lib/utils";
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

export const TimePicker = ({
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
}: TimePickerProps) => {
  const { time, setHour, setMinute, setPeriod, validateHour, validateMinute } =
    useTimePicker(value);

  const hourInputRef = useRef<HTMLInputElement>(null);
  const minuteInputRef = useRef<HTMLInputElement>(null);
  const periodRef = useRef<HTMLButtonElement>(null);

  // Trigger onChange immediately when values are updated
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHour = validateHour(e.target.value);
    setHour(newHour);
    onChange({ ...time, hour: newHour });
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinute = validateMinute(e.target.value);
    setMinute(newMinute);
    onChange({ ...time, minute: newMinute });
  };

  const handlePeriodChange = () => {
    const newPeriod = time.period === "AM" ? "PM" : "AM";
    setPeriod(newPeriod);
    onChange({ ...time, period: newPeriod });
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    currentValue: number,
    min: number,
    max: number,
    setter: (value: number) => void,
    key: keyof Time
  ) => {
    let newValue = currentValue;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      newValue = currentValue === max ? min : currentValue + 1;
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      newValue = currentValue === min ? max : currentValue - 1;
    } else if (e.key === "Enter") {
      e.preventDefault();
      (e.target as HTMLElement).blur();
    }

    setter(newValue);
    onChange({ ...time, [key]: newValue });
  };

  const renderSection = (
    value: number | Period,
    min: number,
    max: number,
    setter: (value: number) => void,
    ref: React.RefObject<HTMLInputElement | HTMLButtonElement>,
    key: keyof Time,
    isPeriod = false
  ) => {
    const handleIncrement = () => {
      if (isPeriod) {
        handlePeriodChange();
      } else {
        const newValue = value === max ? min : (value as number) + 1;
        setter(newValue);
        onChange({ ...time, [key]: newValue });
      }
    };

    const handleDecrement = () => {
      if (isPeriod) {
        handlePeriodChange();
      } else {
        const newValue = value === min ? max : (value as number) - 1;
        setter(newValue);
        onChange({ ...time, [key]: newValue });
      }
    };

    return (
      <div className={cn("flex flex-col items-center", sectionClassName)}>
        <IncrementButton
          handleIncrement={handleIncrement}
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
          />
        )}

        <DecrementButton
          handleDecrement={handleDecrement}
          isPeriod={isPeriod}
          key={key}
          decrementIcon={decrementIcon}
        />
      </div>
    );
  };

  return (
    <div
      className={cn(
        "inline-flex items-center p-4 space-x-4 border rounded-md shadow-sm bg-background border-input",
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
};

const IncrementButton = ({
  handleIncrement,
  isPeriod,
  key,
  buttonClassName,
  incrementIcon: Icon = ChevronUp,
}: IncrementButtonProps) => (
  <button
    onClick={handleIncrement}
    className={cn("p-1 rounded-md hover:bg-muted", buttonClassName)}
    aria-label={`Increment ${isPeriod ? "period" : key}`}>
    <Icon className="w-4 h-4" />
  </button>
);

const DecrementButton = ({
  handleDecrement,
  isPeriod,
  key,
  buttonClassName,
  decrementIcon: Icon = ChevronDown,
}: DecrementButtonProps) => (
  <button
    onClick={handleDecrement}
    className={cn("p-1 rounded-md hover:bg-muted", buttonClassName)}
    aria-label={`Increment ${isPeriod ? "period" : key}`}>
    <Icon className="w-4 h-4" />
  </button>
);

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
}: TimeInputUIProps) => (
  <input
    ref={ref}
    type="text"
    value={value.toString().padStart(2, "0")}
    onChange={handleChange}
    onKeyDown={(e) => handleKeyDown(e, value, min, max, setter, key)}
    className={cn(
      "w-12 h-12 text-2xl font-semibold text-center rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-background",
      inputClassName
    )}
    aria-label={`Edit ${key}`}
  />
);

const CloseButton = ({
  toggle,
  closeIcon: Icon = X, // Default to the X icon from lucide-react
  closeButtonClassName,
}: CloseButtonProps) => (
  <button
    className={cn(
      "absolute p-1 rounded-full top-1 right-1 hover:bg-muted",
      closeButtonClassName
    )}
    title="Close"
    onClick={() => toggle?.()}>
    <Icon size={16} />
  </button>
);
