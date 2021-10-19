export type FontWeightToken = (
    "light" | 
    "regular" | 
    "medium" | 
    "bold"
);

export type FontWeightScheme = Record<FontWeightToken, string>;

export type FontTheme = {
    weight: FontWeightScheme
}