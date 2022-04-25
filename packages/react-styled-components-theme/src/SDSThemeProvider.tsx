import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colors, fonts } from '@semicolondsm/design-token';
import { getThemeName } from '@semicolondsm/react-theming';
import { ColorScheme, FontTheme } from '@semicolondsm/design-token';

interface Props {
    children?: React.ReactNode;
    mode?: 'auto' | 'dark-only' | 'light-only';
}

export type SDSTheme = {
    colors: ColorScheme;
    fonts: FontTheme;
};

declare module 'styled-components' {
    export interface Theme extends SDSTheme {}
}

export const SDSThemeProvider = ({ children, mode = 'auto' }: Props) => {
    const theme = React.useMemo(() => {
        const colorTheme = colors[getThemeName(mode)];
        return {
            colors: {
                ...colorTheme.scheme,
            },
            fonts: fonts,
        };
    }, [mode]);
    return <ThemeProvider theme={theme}><>{children}</></ThemeProvider>;
};
