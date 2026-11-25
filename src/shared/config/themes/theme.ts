export const MODES = ['light', 'dark'] as const;
export type ThemeMode = typeof MODES[number];

export const isThemeMode = (v: unknown): v is ThemeMode =>
    (MODES as readonly unknown[]).includes(v);

export const THEMES = ['lavender-twilight', 'frozen-lagoon'] as const;
export type ThemeName = typeof THEMES[number];

export const isThemeName = (v: unknown): v is ThemeName =>
    (THEMES as readonly unknown[]).includes(v);

export const DEFAULT_THEME: ThemeName = 'lavender-twilight';
export const DEFAULT_MODE: ThemeMode = 'light';