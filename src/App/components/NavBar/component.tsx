import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from './styles.module.sass'

const NavBar = () => {
   return (
      <nav>
         <ul className={styles.navContainer}>
            <li className={styles.navItem}>
               <NavLink to="/">New</NavLink>
            </li>
            <li className={styles.navItem}>
               <NavLink to="/beststories">Best</NavLink>
            </li>
            <li className={styles.navItem}>
               <NavLink to="/topstories">Top</NavLink>
            </li>

         </ul>
      </nav>
   );
}

export default NavBar;
