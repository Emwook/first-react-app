import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{
    return (
        <div className={styles.navContainer}>
        <Container>
            <nav className={styles.navBar}>
                <a className={styles.navIcon} href='/'><span><i className='fa fa-tasks'/></span></a>
                <ul className={styles.navList}>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/about">About</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                        to="/favorite">Favorite</NavLink></li>
                </ul>
            </nav>
        </Container>
        </div>
    );
}

export default NavBar;