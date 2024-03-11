import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () =>{
    return (
        <div className={styles.navContainer}>
        <Container>
            <nav className={styles.navBar}>
                <a className={styles.navIcon} href='/'><span><i className='fa fa-tasks'/></span></a>
                <ul className={styles.navList}>
                    <li><a className={styles.home} href='/'><p>Home</p></a></li>
                    <li><a className={styles.favorite} href='/favorite'><p>Favorite</p></a></li>
                    <li><a className={styles.about} href='/about'><p>About</p></a></li>
                </ul>
            </nav>
        </Container>
        </div>
    );
}

export default NavBar;