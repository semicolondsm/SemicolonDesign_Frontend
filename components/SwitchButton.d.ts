import { FC } from 'react';
interface ButtonProps {
    onToggle?: (e: boolean) => void;
    value?: boolean;
}
export declare const SwitchButton: FC<ButtonProps>;
export {};
