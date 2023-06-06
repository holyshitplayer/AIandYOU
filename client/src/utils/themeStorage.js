const themeStorage = (defaultValue) => {
    const getThemeStorage = () => {
        const currentThemeStorage = window.localStorage.getItem("theme");
        return currentThemeStorage ? currentThemeStorage : defaultValue;
    }

    const updateThemeStorage = (theme) => {
        window.localStorage.removeItem("theme");
        window.localStorage.setItem("theme", theme);
    }

    return { getThemeStorage, updateThemeStorage };
}

export default themeStorage