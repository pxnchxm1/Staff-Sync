import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeSwitcher = createContext();

const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);

    const toggleTheme = () => {
        setDark((prevItem) => !prevItem);
    };

    return (
        <ThemeSwitcher.Provider value={{ dark, toggleTheme }}>
            <div className={`${dark ? "dark" : "light"}`}>{children}</div>
        </ThemeSwitcher.Provider>
    );
};

export default ThemeProvider;
