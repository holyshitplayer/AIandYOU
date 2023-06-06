import { createContext, useEffect, useState } from "react";
import { themeStorage } from "../utils";

const initialState = {
    theme: "light",
    changeTheme: () => { }
}

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("");

    const { getThemeStorage, updateThemeStorage } = themeStorage("light");

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        updateThemeStorage(newTheme);
    }

    useEffect(() => {
        switch (getThemeStorage()) {
            case "light":
                document.body.id = "light";
                break;
            case "dark":
                document.body.id = "dark";
                break;
            default:
                document.body.id = "light";
                break;
        }
        // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext