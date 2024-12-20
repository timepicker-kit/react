import { MotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type Period = "AM" | "PM";

export interface Time {
  hour: number;
  minute: number;
  period: Period;
}

export type TimeInput = Date | string | Time;

export type ClickOutsideHandler = (event: Event) => void;

// General Types
export type SharedPopoverTypes = { children: ReactNode; className?: string };

// Extend SharedPopoverTypes for PopoverContentProps
export type PopoverContentProps =
  | (SharedPopoverTypes & {
      isAnimate: true; // isAnimate is required and must be true
      variants: MotionProps; // variants is required when isAnimate is true
    })
  | (SharedPopoverTypes & {
      isAnimate?: false; // isAnimate can be false
      variants?: never; // variants must be absent if isAnimate is false
    });

export type PopoverContextType = {
  isOpen: boolean;
  toggle: () => void;
} | null;

export interface TimePickerProps {
  value: TimeInput;
  onChange: (time: Time) => void;
  toggle?: () => void;
  timepickerClassName?: string;
  buttonClassName?: string;
  sectionClassName?: string;
  inputClassName?: string;
  periodToggleClassName?: string;
  closeButtonClassName?: string;
  incrementIcon?:
    | LucideIcon
    | React.ComponentType<{ size?: number; className?: string }>;
  decrementIcon?:
    | LucideIcon
    | React.ComponentType<{ size?: number; className?: string }>;

  closeIcon?:
    | LucideIcon
    | React.ComponentType<{ size?: number; className?: string }>;
}

export type ActionButtonProps = {
  isPeriod: boolean;
  key: keyof Time;
  buttonClassName?: string;
};

export type IncrementButtonProps = ActionButtonProps & {
  handleIncrement: () => void;
  incrementIcon?:
    | LucideIcon
    | React.ComponentType<{ size?: number; className?: string }>;
};

export type DecrementButtonProps = ActionButtonProps & {
  handleDecrement: () => void;
  decrementIcon?:
    | LucideIcon
    | React.ComponentType<{ size?: number; className?: string }>;
};

export type TogglePeriodButtonProps = {
  value: Period | number;
  ref: React.RefObject<HTMLButtonElement>;
  handlePeriodChange: () => void;
  periodToggleClassName?: string;
};

export type TimeInputUIProps = {
  value: number;
  ref: React.RefObject<HTMLInputElement>;
  key: keyof Time;
  min: number;
  max: number;
  setter: (value: number) => void;
  handleKeyDown: (
    e: React.KeyboardEvent,
    currentValue: number,
    min: number,
    max: number,
    setter: (value: number) => void,
    key: keyof Time
  ) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
};

export type CloseButtonProps = {
  toggle?: () => void;
  closeIcon?:
    | LucideIcon
    | React.ComponentType<{ size?: number; className?: string }>;
  closeButtonClassName?: string;
};
