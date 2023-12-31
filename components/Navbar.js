import { useState, useEffect } from "react";
import Link from "next/link";
import ReactSwitch from "react-switch";
import styles from '@/styles/Navbar.module.css'

const Navbar=()=> {

    const [theme, setTheme] = useState('light');
  
    const handleSwitchChange = (checked) => {
      const newTheme = checked ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      setTheme(newTheme);
    };
  
    useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        setTheme(savedTheme);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav id="nav" className={`navbar navbar-expand-md ${theme === "light" ? 'navbar-light' : 'navbar-dark'} ${styles.navbar_container}`}>
        <div className={`container-fluid`}>
    
          <div className="navbar-brand d-flex align-items-center" href="index.html">
            <Link href="/" className={`${styles.brand_text}`}><h1 className='mx-3'>Era Planner</h1></Link>
            <div class={`${styles.theme_switch_container}`}>
              <ReactSwitch 
                onChange={handleSwitchChange}
                checked={theme === 'dark'}
                onColor="#292b2c"
                offColor="#d3d3d3"
                checkedIcon={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: 12, color: 'white', paddingRight: 2 }}>🌜</div>}
            uncheckedIcon={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: 12, color: 'black', paddingRight: 2 }}>☀️</div>}
                />
              <span id="toggle-icon">
                  <span className="toggle-text ms-2">{theme === "light" ? 'โหมดกลางวัน' : 'โหมดกลางคืน'}</span>
              </span>
    
          </div>
        </div>
    
          <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-2" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-center" aria-current="page" href="/calendar"><button className={`btn btn-primary bg-transparent border-0 px-3 ${styles.item_text}`}>Calendar</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-center" href="/journal"><button className={`btn btn-primary bg-transparent border-0 px-3 ${styles.item_text}`}>Daily Journal</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-center" href="/todo"><button className={`btn btn-primary bg-transparent border-0 px-3 ${styles.item_text}`}>To-do list</button></Link>
              </li>
            </ul>
          </div>
    
        </div>
    
      </nav>

           
        
    )
}

export default Navbar;