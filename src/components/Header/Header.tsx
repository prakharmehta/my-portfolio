import { Link } from "react-router-dom";
import styles from './Header.module.css'
import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const activateLink = (e: any) => {
    console.log(e);
    
    if (e.target.tagName === 'A') {
      const link = e.target.getAttribute('data-link');
      setActiveLink(link);
    }
    
  }
  return (
    <div className={styles.nav + " flex"} onClick={(e: any) => activateLink(e)}>
        <div className={styles.navItem + " flex " + (activeLink === 'home' ? styles.active : '')}>
          <Link to="/" data-link='home'>Home</Link>
        </div>
        <div className={styles.navItem + " flex " + (activeLink === 'about' ? styles.active : '')}>
          <Link to="/about" data-link='about'>About</Link>
        </div>
        <div className={styles.navItem + " flex " + (activeLink === 'projects' ? styles.active : '')}>
          <Link to="/projects" data-link='projects'>Projects</Link>
        </div>
        <div className={styles.navItem + " flex " + (activeLink === 'contact' ? styles.active : '')}>
          <Link to="/contact" data-link='contact'>Contact</Link>
        </div>
      </div>
  );
}

export default Header;
