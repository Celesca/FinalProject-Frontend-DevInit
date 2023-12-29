"use clients";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
    const { theme, setTheme} = useTheme();

    return (
        <div>
            The current theme is: {theme}
            <button onClick={() => setTheme(theme === "dark"? "light" : "dark")}></button>
        </div>
    )
}

export default ThemeSwitcher;