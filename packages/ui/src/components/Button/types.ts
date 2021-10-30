import { ColorScheme } from '@semicolondsm/design-token';
import { ReactElement, Component, MouseEvent } from 'react';

export type SizeType = 'sm' | 'md' | 'lg';

export type BackgroundNoneSupportFillStyleType = 'default' | 'purple';

export type FillStyleType =
    | 'purpleLight'
    | 'link'
    | 'border'
    | BackgroundNoneSupportFillStyleType
    | BackgroundNoneFillStyleType;

export type ColorState = 'default' | 'active' | 'font' | 'diabled' | 'disabledFont';

export type BackgroundNoneFillStyleType = 'bnDefault' | 'bnPurple';

export interface FillStyleObjectType {
    fillStyle?: FillStyleType;
    background?: boolean;
    full?: boolean;
}

export type CursorType = 'not-allowed' | 'progress' | 'pointer';

export interface ButtonProps {
    leftIcon?: ReactElement<
        any,
        | string
        | ((props: any) => ReactElement<any, any> | null)
        | (new (props: any) => Component<any, any, any>)
    >;
    rightIcon?: ReactElement<
        any,
        | string
        | ((props: any) => ReactElement<any, any> | null)
        | (new (props: any) => Component<any, any, any>)
    >;
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

export const Colors = {
    default: 'gray100',
    purple: 'purple400',
    purpleLight: 'purple50',
    border: 'white',
    borderColor: 'gray100',
    link: 'white',
    bnDefault: 'white',
    bnPurple: 'white',
};

export const ActiveColors = {
    default: 'gray300',
    purple: 'purple500',
    purpleLight: 'purple100',
    border: 'gray100',
    link: 'white',
    bnDefault: 'gray50',
    bnPurple: 'purple50',
};

export const FontColors = {
    default: 'gray700',
    purple: 'white',
    purpleLight: 'purple400',
    border: 'gray700',
    link: 'blue400',
    full: 'gray700',
    bnDefault: 'gray700',
    bnPurple: 'purple400',
};

export const DisabledColors = {
    default: 'gray50',
    purple: 'purple50',
    purpleLight: 'gray50',
    border: 'gray50',
    link: 'gray50',
    bnDefault: 'gray50',
    bnPurple: 'gray50',
};

export const DisabledFontColors = {
    default: 'gray300',
    purple: 'white',
    purpleLight: 'gray300',
    border: 'gray300',
    link: 'gray300',
    bnDefault: 'gray300',
    bnPurple: 'gray300',
};
