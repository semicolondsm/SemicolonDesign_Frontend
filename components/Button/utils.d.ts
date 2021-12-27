import { ColorScheme } from '@semicolondsm/design-token';
import { FillStyleType, BackgroundNoneFillStyleType, FillStyleObjectType, ColorState } from './types';
export declare function colorObjectToColorString(color?: FillStyleType | FillStyleObjectType, addedBn?: boolean): "link" | "default" | "purple" | "border" | "bnDefault" | "bnPurple" | "purpleLight";
export declare function firstCharToTypeMessage(message: string): BackgroundNoneFillStyleType;
export declare function isBackgroundNone(color: string): boolean;
export declare function fillStyleToColorString(fillStyle: FillStyleType, colroState: ColorState): keyof ColorScheme;
