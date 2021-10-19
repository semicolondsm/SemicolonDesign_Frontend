import { ColorTheme } from "./types";
export const auto: Readonly<ColorTheme> = {
    scheme: {
        white: 'var(--white)',
        black: 'var(--black)',
        /* purple */
        purple50: 'var(--purple50)',
        purple100: 'var(--purple100)',
        purple200: 'var(--purple200)',
        purple300: 'var(--purple300)',
        purple400: 'var(--purple400)',
        purple500: 'var(--purple500)',
        purple600: 'var(--purple600)',
        purple700: 'var(--purple700)',
        purple800: 'var(--purple800)',
        purple900: 'var(--purple900)',

        /* gray */
        gray50: 'var(--gray50)',
        gray100: 'var(--gray100)',
        gray200: 'var(--gray200)',
        gray300: 'var(--gray300)',
        gray400: 'var(--gray400)',
        gray500: 'var(--gray500)',
        gray600: 'var(--gray600)',
        gray700: 'var(--gray700)',
        gray800: 'var(--gray800)',
        gray900: 'var(--gray900)',

        /* yellow */
        yellow50: 'var(--yellow50)',
        yellow100: 'var(--yellow100)',
        yellow200: 'var(--yellow200)',
        yellow300: 'var(--yellow300)',
        yellow400: 'var(--yellow400)',
        yellow500: 'var(--yellow500)',
        yellow600: 'var(--yellow600)',
        yellow700: 'var(--yellow700)',
        yellow800: 'var(--yellow800)',
        yellow900: 'var(--yellow900)', 

        /* indigo */
        indigo50: 'var(--indigo50)',
        indigo100: 'var(--indigo100)',
        indigo200: 'var(--indigo200)',
        indigo300: 'var(--indigo300)',
        indigo400: 'var(--indigo400)',
        indigo500: 'var(--indigo500)',
        indigo600: 'var(--indigo600)',
        indigo700: 'var(--indigo700)',
        indigo800: 'var(--indigo800)',
        indigo900: 'var(--indigo900)',

        /* red */
        red50: 'var(--red50)',
        red100: 'var(--red100)', 
        red200: 'var(--red200)',
        red300: 'var(--red300)',
        red400: 'var(--red400)',
        red500: 'var(--red500)',
        red600: 'var(--red600)',
        red700: 'var(--red700)',
        red800: 'var(--red800)',
        red900: 'var(--red900)',

        /* green */
        green50: 'var(--green50)',
        green100: 'var(--green100)',
        green200: 'var(--green200)',
        green300: 'var(--green300)',
        green400: 'var(--green400)',
        green500: 'var(--green500)',
        green600: 'var(--green600)',
        green700: 'var(--green700)',
        green800: 'var(--green800)',
        green900: 'var(--green900)',

        /* blue */
        blue50: 'var(--blue50)',
        blue100: 'var(--blue100)',
        blue200: 'var(--blue200)',
        blue300: 'var(--blue300)',
        blue400: 'var(--blue400)',
        blue500: 'var(--blue500)',
        blue600: 'var(--blue600)',
        blue700: 'var(--blue700)',
        blue800: 'var(--blue800)',
        blue900: 'var(--blue900)', 
    }
}
export const light: Readonly<ColorTheme> = {
    scheme: {
        white: '#FFFFFF',
        black: '#000000',
        /* purple */
        purple50: '#F0E6FF',
        purple100: '#D3B3FF',
        purple200: '#B885FF',
        purple300: '#9F62F5',
        purple400: '#9650FA',
        purple500: '#8335F0',
        purple600: '#6D1BE0',
        purple700: '#5A10C2',
        purple800: '#500EAD',
        purple900: '#420399',

        /* gray */
        gray50: '#FAFAFA',
        gray100: '#F5F5F5',
        gray200: '#EEEEEE',
        gray300: '#E0E0E0',
        gray400: '#BDBDBD',
        gray500: '#9E9E9E',
        gray600: '#757575',
        gray700: '#616161',
        gray800: '#424242',
        gray900: '#212121',

        /* yellow */
        yellow50: '#FFFEE6',
        yellow100: '#FFFCB3',
        yellow200: '#FFFB85',
        yellow300: '#FAF673',
        yellow400: '#FAF450',
        yellow500: '#F0E935',
        yellow600: '#E0DA1B',
        yellow700: '#C2BB10',
        yellow800: '#ADA80E',
        yellow900: '#999403', 

        /* indigo */
        indigo50: '#EAE6FF',
        indigo100: '#C0B3FF',
        indigo200: '#9985FF',
        indigo300: '#7A62F5',
        indigo400: '#684DF0',
        indigo500: '#5133E6',
        indigo600: '#391AD6',
        indigo700: '#2B0FB8',
        indigo800: '#260DA3',
        indigo900: '#1A038E',

        /* red */
        red50: '#FFE6E6',
        red100: '#FFB3B5', 
        red200: '#FF8589',
        red300: '#F56267',
        red400: '#F04D51',
        red500: '#E63338',
        red600: '#D61A20',
        red700: '#B80F13',
        red800: '#A30D11',
        red900: '#8E0306',

        /* green */
        green50: '#E9FFE6',
        green100: '#BBFFB3',
        green200: '#91FF85',
        green300: '#71F562',
        green400: '#5DF04D',
        green500: '#44E633',
        green600: '#2DD61A',
        green700: '#20B80F',
        green800: '#1CA30D',
        green900: '#118E03',

        /* blue */
        blue50: '#E6F2FF',
        blue100: '#B3D6FF',
        blue200: '#85BEFF',
        blue300: '#62A7F5',
        blue400: '#4D99F0',
        blue500: '#3386E6',
        blue600: '#1A72D6',
        blue700: '#0F5EB8',
        blue800: '#0D53A3',
        blue900: '#03448E', 
    }
    
}

export const dark: Readonly<ColorTheme> = {
    scheme: {
        white: '#000000',
        black: '#FFFFFF',
        /* purple */
        purple50: '#F0E6FF',
        purple100: '#D3B3FF',
        purple200: '#B885FF',
        purple300: '#9F62F5',
        purple400: '#9650FA',
        purple500: '#8335F0',
        purple600: '#6D1BE0',
        purple700: '#5A10C2',
        purple800: '#500EAD',
        purple900: '#420399',

        /* gray */
        gray50: '#FAFAFA',
        gray100: '#F5F5F5',
        gray200: '#EEEEEE',
        gray300: '#E0E0E0',
        gray400: '#BDBDBD',
        gray500: '#9E9E9E',
        gray600: '#757575',
        gray700: '#616161',
        gray800: '#424242',
        gray900: '#212121',

        /* yellow */
        yellow50: '#FFFEE6',
        yellow100: '#FFFCB3',
        yellow200: '#FFFB85',
        yellow300: '#FAF673',
        yellow400: '#FAF450',
        yellow500: '#F0E935',
        yellow600: '#E0DA1B',
        yellow700: '#C2BB10',
        yellow800: '#ADA80E',
        yellow900: '#999403', 

        /* indigo */
        indigo50: '#EAE6FF',
        indigo100: '#C0B3FF',
        indigo200: '#9985FF',
        indigo300: '#7A62F5',
        indigo400: '#684DF0',
        indigo500: '#5133E6',
        indigo600: '#391AD6',
        indigo700: '#2B0FB8',
        indigo800: '#260DA3',
        indigo900: '#1A038E',

        /* red */
        red50: '#FFE6E6',
        red100: '#FFB3B5', 
        red200: '#FF8589',
        red300: '#F56267',
        red400: '#F04D51',
        red500: '#E63338',
        red600: '#D61A20',
        red700: '#B80F13',
        red800: '#A30D11',
        red900: '#8E0306',

        /* green */
        green50: '#E9FFE6',
        green100: '#BBFFB3',
        green200: '#91FF85',
        green300: '#71F562',
        green400: '#5DF04D',
        green500: '#44E633',
        green600: '#2DD61A',
        green700: '#20B80F',
        green800: '#1CA30D',
        green900: '#118E03',

        /* blue */
        blue50: '#E6F2FF',
        blue100: '#B3D6FF',
        blue200: '#85BEFF',
        blue300: '#62A7F5',
        blue400: '#4D99F0',
        blue500: '#3386E6',
        blue600: '#1A72D6',
        blue700: '#0F5EB8',
        blue800: '#0D53A3',
        blue900: '#03448E', 
    }
    
}