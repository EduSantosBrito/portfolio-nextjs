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
    sl: string;
}

interface ColorShade {
    main: string;
    dark: string;
    darker?: string;
}

interface Colors {
    primary: ColorShade;
    secondary: ColorShade;
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

export interface SocialMediaItem {
    icon: string;
    url: string;
}
