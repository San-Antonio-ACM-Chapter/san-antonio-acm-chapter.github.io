import React, { createContext, useContext, useState} from 'react';
import styles from './styles.module.css';
import trogdoors from './themes.module.css';

const ThemeContext = createContext({ theme: 'bonus-stage', selectTheme: (selection: number) => {}});

const ThemeProvider = ({ children }: any) => {
    const savedTheme = localStorage.getItem('selectedTheme');
    const [theme, setTheme] = useState(savedTheme ? savedTheme : 'default'); // default theme



    const themes = ['default', 'bonus-stage', 'smooth-sailing', 'grapefruit', 'black-eye', 'mahogany']

    const themeName = trogdoors[theme];
    const selectTheme = (selection: number) => {
        // fail gracefully if hte selection is outside the bounds of the themes array
        if (selection < 0 || selection > themes.length - 1) {
            console.error('Invalid theme selection');
            return;
        }

        setTheme(themes[selection]);
    }

    const handleThemeChange = () => {
        // index is based off themes array, should incriement by 1, if it gets to the end of the array it should reset to 0
        const currentIndex = themes.indexOf(theme);
        const nextIndex = currentIndex + 1;
        const nextTheme = themes[nextIndex] || themes[0];
        console.log(`nextTheme: ${nextTheme}`);
        setTheme(nextTheme);
        //save the selected theme to the users local storage
        localStorage.setItem('selectedTheme', nextTheme);
    }

    return (
        <div style={{}}>
            <ThemeContext.Provider value={{theme, selectTheme}}>{children}</ThemeContext.Provider>
            <span className={styles.footerContainer}><p>pick color theme:</p><button className={`${styles.themeButton} ${themeName}`} onClick={handleThemeChange}>{theme}</button></span>
        </div>
    );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);


/* todo: give people the ability to select a color theme */
const selectColorTheme = (theme: string) => {
    switch (theme) {
        case 'default':
            return 'default';
        case 'bonus-stage':
            return 'bonus-stage';
        case 'smooth-sailing':
            return 'smooth-sailing';
        case 'grapefruit':
            return 'grapefruit';
        case 'black-eye':
            return 'black-eye';
        case 'mahogany':
            return 'mahogany';
        default:
            return 'default';
    }
}