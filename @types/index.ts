export interface Theme {
    colors: Colors;
    breakpoints: Breakpoints;
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
