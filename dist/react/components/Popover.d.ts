import { PopoverContentProps, SharedPopoverTypes, TimeInput } from '../types/types';
export declare const Popover: import('react').NamedExoticComponent<SharedPopoverTypes>;
export declare const PopoverTrigger: import('react').MemoExoticComponent<({ children, className }: SharedPopoverTypes) => import("react/jsx-runtime").JSX.Element>;
export declare const PopoverContent: import('react').MemoExoticComponent<({ children, className, isAnimate, variants, }: PopoverContentProps & {
    children: React.ReactElement<{
        toggle?: () => void;
    }>;
}) => import("react/jsx-runtime").JSX.Element>;
export declare const PopoverButton: import('react').MemoExoticComponent<({ time }: {
    time: TimeInput;
}) => import("react/jsx-runtime").JSX.Element>;
