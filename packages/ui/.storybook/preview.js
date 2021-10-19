import { ThemeProvider } from "emotion-theming";
import { addDecorator } from "@storybook/react";
import React from "react";
import { colors, fonts } from "@semicolondsm/design-token";
import { useDarkMode } from "storybook-dark-mode";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator((storyFn) => (
    <ThemeProvider
        theme={{
            colors: useDarkMode() ? colors.dark.scheme : colors.light.scheme,
            fonts: fonts,
        }}
    >
        {storyFn()}
    </ThemeProvider>
));
