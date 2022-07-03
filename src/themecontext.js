import React, { useState, useContext } from "react";


const themeContext = React.createContext()

export const useThemeContext = () => {
    return useContext(themeContext)
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(true)

    return (
        <themeContext.Provider value={{ theme, setTheme }}>
            {children}
        </themeContext.Provider>

    )

}

