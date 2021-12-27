import React, { FC } from 'react';
import { ColorToken, FontWeightToken } from '@semicolondsm/design-token';
interface OwnProps {
    md: Typo;
}
export interface TypoProps {
    children?: React.ReactNode;
    color?: ColorToken;
    textAlign?: string;
    className?: string;
    fontWeight?: FontWeightToken;
}
declare type Props = OwnProps & TypoProps;
declare type Typo = keyof typeof typographyList;
declare const typographyList: {
    Title1: import("@emotion/utils").SerializedStyles;
    Title2: import("@emotion/utils").SerializedStyles;
    Title3: import("@emotion/utils").SerializedStyles;
    Subtitle1: import("@emotion/utils").SerializedStyles;
    Subtitle2: import("@emotion/utils").SerializedStyles;
    Subtitle3: import("@emotion/utils").SerializedStyles;
    Subtitle4: import("@emotion/utils").SerializedStyles;
    Body1: import("@emotion/utils").SerializedStyles;
    Body2: import("@emotion/utils").SerializedStyles;
    Body3: import("@emotion/utils").SerializedStyles;
    Caption: import("@emotion/utils").SerializedStyles;
    Botton: import("@emotion/utils").SerializedStyles;
};
export declare const BaseTypography: FC<Props>;
export {};
