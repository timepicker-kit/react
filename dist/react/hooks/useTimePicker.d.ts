import { Period, Time, TimeInput } from '../types/types';
export declare function parseTimeInput(input: TimeInput): Time;
export declare function useTimePicker(value: TimeInput): {
    time: Time;
    setHour: (hour: number) => void;
    setMinute: (minute: number) => void;
    setPeriod: (period: Period) => void;
    validateHour: (value: string) => number;
    validateMinute: (value: string) => number;
};
