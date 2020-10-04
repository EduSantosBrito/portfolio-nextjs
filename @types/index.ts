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

export interface Language {
    title: string;
    years: number;
    iconUrl: string;
}

export interface Tech {
    title: string;
}

export interface Experience {
    company: string;
    startDate: string;
    endDate?: string;
    jobTitle: string;
    description?: string;
    techs?: Tech[];
}

export interface ShowcaseItem {
    title: string;
    description: string;
    url: string;
}
