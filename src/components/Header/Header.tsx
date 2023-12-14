import { Link } from "react-router-dom";
import styles from './Header.module.css'
import { useState } from "react";

function Header() {
  const currentRouteName = window.location.pathname.slice(1).length !== 0
    ? window.location.pathname.slice(1)
    : "home";

  const [activeLink, setActiveLink] = useState(currentRouteName);

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
        <Link to="/" data-link='home'>
          <span className="material-symbols-outlined">home</span>
          Home
        </Link>
      </div>
      <div className={styles.navItem + " flex " + (activeLink === 'about' ? styles.active : '')}>
        <Link to="/about" data-link='about'>
          <span className="material-symbols-outlined">contact_page</span>
          About
        </Link>
      </div>
      <div className={styles.navItem + " flex " + (activeLink === 'projects' ? styles.active : '')}>
        <Link to="/projects" data-link='projects'>
          <span className="material-symbols-outlined">window</span>
          Projects
        </Link>
      </div>
      <div className={styles.navItem + " flex " + (activeLink === 'contact' ? styles.active : '')}>
        <Link to="/contact" data-link='contact'>
          <span className="material-symbols-outlined">alternate_email</span>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
