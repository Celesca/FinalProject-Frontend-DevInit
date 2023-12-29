import { useState, useEffect } from "react";

const Navbar=()=> {
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = () => {
        const newTheme = theme === 'light'? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    }

    useEffect(() => {

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
            setTheme(savedTheme);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('theme' , theme);
    }, [ theme ]);

    return (
        <nav>
            <button className="theme-toggler" onClick={toggleTheme}>
                Toggle Theme
            </button>
        </nav>
    )
}

export default Navbar;