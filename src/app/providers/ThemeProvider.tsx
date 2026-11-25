import React, { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_THEME, isThemeMode, isThemeName, type ThemeMode, type ThemeName } from '../../shared/config/theme';

interface ThemeContextType {
    theme: ThemeName;
    mode: ThemeMode;
    toggleMode: () => void;
    switchTheme: (color: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getDefaultMode = (): ThemeMode => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? 'light' : 'dark';
};

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const readStored = () => {
        const raw = localStorage.getItem('appearance');
        const parsed = raw ? JSON.parse(raw) : null;
        return {
            theme: isThemeName(parsed?.theme) ? parsed.theme : DEFAULT_THEME,
            mode: isThemeMode(parsed?.mode) ? parsed.mode : getDefaultMode(),
        };
    };

    const initial = readStored();
    const [theme, setTheme] = useState<ThemeName>(initial.theme);
    const [mode, setMode] = useState<ThemeMode>(initial.mode);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        root.setAttribute('data-mode', mode);
        root.style.colorScheme = mode;
        localStorage.setItem('appearance', JSON.stringify({ theme, mode }));
    }, [mode]);

    const toggleMode = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    const switchTheme = (color: ThemeName) => {
        setTheme(color)
    }

    return (
        <ThemeContext.Provider value={{ mode, theme, toggleMode, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
}

export default ThemeProvider;
export { useTheme }