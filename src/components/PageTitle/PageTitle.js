import styles from './PageTitle.module.scss';

const PageTitle = (params) => {
    return <h2 className={styles.title}>{params.children}</h2>;
};

export default PageTitle;