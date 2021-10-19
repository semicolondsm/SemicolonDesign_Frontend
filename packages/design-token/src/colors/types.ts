const knownColorGroupNames = ['purple', 'gray', 'yellow', 'indigo', 'red', 'green', 'blue'] as const;
export type KnownColorGroup = typeof knownColorGroupNames[number];
type MakeTokenSet<TGroup extends KnownColorGroup, TLightness extends number[]> = `${TGroup}${TLightness[number]}`;

export type ColorToken = (
    | 'white'
    | 'black'
    | MakeTokenSet<'gray', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
    | MakeTokenSet<'purple', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
    | MakeTokenSet<'yellow', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
    | MakeTokenSet<'indigo', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
    | MakeTokenSet<'red', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
    | MakeTokenSet<'green', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
    | MakeTokenSet<'blue', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]>
    
)
export type ColorScheme = Record<ColorToken, string>;

export type ColorTheme = {
    scheme: ColorScheme
}