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
        <nav id="nav" className="navbar navbar-expand-md">
        <div className="container-fluid">
    
          <div className="navbar-brand text-dark d-flex align-items-center" href="index.html">
            <h1 className="me-3">Era Planner</h1>
            <div class="theme-switch-container">
              <ReactSwitch 
                onChange={handleSwitchChange}
                checked={theme === 'dark'}
                onColor="#292b2c"
                offColor="#d3d3d3"
                checkedIcon={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: 12, color: 'white', paddingRight: 2 }}>🌜</div>}
            uncheckedIcon={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: 12, color: 'black', paddingRight: 2 }}>☀️</div>}
                />
              <span id="toggle-icon">
                  <span className="toggle-text ms-2">โหมดกลางวัน</span>
              </span>
    
          </div>
        </div>
    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-center" aria-current="page" href="/"><button className="btn btn-primary bg-transparent border-0 px-3 text-dark">Home</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-center" href="/calendar"><button className="btn btn-primary bg-transparent border-0 px-3 text-dark">Write</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-center" href="/"><button className="btn btn-primary bg-transparent border-0 px-3 text-dark">Blog</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-center" href=""><button className="btn btn-primary bg-transparent border-0 px-3 text-warning">Sign up</button></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-center" href=""><button className="btn btn-primary bg-transparent border-0 px-3 text-warning">Login</button></Link>
              </li>
            </ul>
          </div>
    
        </div>
    
        
    
      </nav>

           
        
    )
}

export default Navbar;