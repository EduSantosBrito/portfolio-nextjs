export interface Theme {
    logo: LogoColor;
    colors: Colors;
    breakpoints: Breakpoints;
    fontSizes: FontSizes;
}

interface Breakpoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

interface ColorShade {
    main: string;
    dark: string;
    darker: string;
}

interface Colors {
    primary: ColorShade;
    secondary: string;
    typography: ColorShade;
    background: string;
    white: string;
}

interface LogoColor {
    dark: string;
    white: string;
}

interface FontSizes {
    small: string;
    default: string;
    large: string;
    extraLarge: string;
}
