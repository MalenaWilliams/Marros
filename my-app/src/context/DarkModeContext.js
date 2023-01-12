import { useState, createContext, useContext } from "react";

const DarkModeContex = createContext()

export const useDarkModeContext = () => useContext(DarkModeContex)

const DrakModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (darkMode)
            document.body.classList.add("darkMode")
        else
            document.body.classList.remove("darkMode")
    }

    return (
        <DarkModeContex.Provider value={{ darkMode, toggleDarkMode }}>
            {props.children}
        </DarkModeContex.Provider>)
}

export { DarkModeContex, DrakModeProvider }