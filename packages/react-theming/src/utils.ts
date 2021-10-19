export type ThemeName = (
    | 'light'
    | 'dark'
);

export type BehaviorMode = (
    | 'auto'
    | 'light-only'
    | 'dark-only'
);

export const getThemeName = (mode: BehaviorMode) => {
    return ({
        'auto' : 'auto',
        'light-only': 'light',
        'dark-only' : 'dark',
    } as const)[mode];
};