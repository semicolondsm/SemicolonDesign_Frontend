import { ColorScheme } from '@semicolondsm/design-token';
import { ReactElement, Component, MouseEvent } from 'react';
export declare type SizeType = 'sm' | 'md' | 'lg';
export declare type BackgroundNoneSupportFillStyleType = 'default' | 'purple';
export declare type FillStyleType = 'purpleLight' | 'link' | 'border' | BackgroundNoneSupportFillStyleType | BackgroundNoneFillStyleType;
export declare type ColorState = 'default' | 'active' | 'font' | 'diabled' | 'disabledFont';
export declare type BackgroundNoneFillStyleType = 'bnDefault' | 'bnPurple';
export interface FillStyleObjectType {
    fillStyle?: FillStyleType;
    background?: boolean;
    full?: boolean;
}
export declare type CursorType = 'not-allowed' | 'progress' | 'pointer';
export interface ButtonProps {
    leftIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
    rightIcon?: ReactElement<any, string | ((props: any) => ReactElement<any, any> | null) | (new (props: any) => Component<any, any, any>)>;
    fill?: FillStyleType | FillStyleObjectType;
    size?: SizeType;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    background?: boolean;
    onClick?: (event?: MouseEvent<HTMLElement, MouseEvent>) => void;
}
export interface ButtonElementProps {
    cursor: CursorType;
    background: keyof ColorScheme;
    activeBackground: keyof ColorScheme;
    paddingVertical: number;
    paddingHorizontal: number;
    borderRadius: number;
    borderColor: keyof ColorScheme;
    color: keyof ColorScheme;
    size: SizeType;
    fillStyle: FillStyleType;
    marginLeft: number;
    marginRight: number;
    isFull: boolean;
}
export declare const Colors: {
    default: string;
    purple: string;
    purpleLight: string;
    border: string;
    borderColor: string;
    link: string;
    bnDefault: string;
    bnPurple: string;
};
export declare const ActiveColors: {
    default: string;
    purple: string;
    purpleLight: string;
    border: string;
    link: string;
    bnDefault: string;
    bnPurple: string;
};
export declare const FontColors: {
    default: string;
    purple: string;
    purpleLight: string;
    border: string;
    link: string;
    full: string;
    bnDefault: string;
    bnPurple: string;
};
export declare const DisabledColors: {
    default: string;
    purple: string;
    purpleLight: string;
    border: string;
    link: string;
    bnDefault: string;
    bnPurple: string;
};
export declare const DisabledFontColors: {
    default: string;
    purple: string;
    purpleLight: string;
    border: string;
    link: string;
    bnDefault: string;
    bnPurple: string;
};
