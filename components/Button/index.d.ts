import React, { FC } from 'react';
import { ButtonProps, ButtonElementProps } from './types';
export declare const ButtonElement: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & ButtonElementProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const Button: FC<ButtonProps>;
