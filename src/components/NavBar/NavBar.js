import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () =>{
    return (
        <nav className={styles.navBar}>
            <Container>
                <div>
                    <a className={styles.icon} href='/'><span><i className='fa fa-tasks'/></span></a>
                </div>
                <div>
                    <a className={styles.home} href='/'><span>Home</span></a>
                    <a className={styles.favorite} href='/favorite'><span>Favorite</span></a>
                    <a className={styles.about} href='/about'><span>About</span></a>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;