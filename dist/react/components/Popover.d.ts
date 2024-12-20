import { PopoverContentProps, SharedPopoverTypes, TimeInput } from '../types/types';
export declare function Popover({ children, className }: SharedPopoverTypes): import("react/jsx-runtime").JSX.Element;
export declare const PopoverTrigger: ({ children, className }: SharedPopoverTypes) => import("react/jsx-runtime").JSX.Element;
export declare const PopoverContent: ({ children, className, isAnimate, variants, }: PopoverContentProps) => import("react/jsx-runtime").JSX.Element | null;
export declare const PopoverButton: ({ time, className, }: {
    time: TimeInput;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
