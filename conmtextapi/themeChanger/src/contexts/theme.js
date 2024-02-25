import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    themeMode: 'light',
    darkThemne: () => { },
    lightThemne: () => { }
})

export const ThemeProvider = ThemeContext.Provider
export default function useTheme() { return useContext(ThemeContext) }