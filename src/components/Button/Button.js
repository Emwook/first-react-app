import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ className, children, isFavorite }) => {

    const classFromProps = className && styles[className];
    
    return (
        <button className={clsx({ [styles.isFavorite]: isFavorite }, styles.button, classFromProps)} type="text">
          {children}
        </button>
      );
      
};
  
export default Button;
