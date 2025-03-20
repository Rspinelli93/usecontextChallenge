import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext()

export function Theme({ children }) {
    const [ themeType, setThemeType ] = useState('light')
    return(
        <ThemeContext.Provider value={{ themeType, setThemeType }} >
            { children }
        </ThemeContext.Provider>
    )
}