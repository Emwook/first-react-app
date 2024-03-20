import styles from './Card.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { checkIfFavoriteCard, toggleCardFavorite } from '../../redux/store';
import Button from '../Button/Button.js';


const Card = (props) =>{
    const dispatch = useDispatch();
    const id = props.id;
    const isFavorite = useSelector(state => checkIfFavoriteCard(state, id));

    const toggleFavorite = e =>{
        e.preventDefault();
        dispatch(toggleCardFavorite( id ));
    };

   return (
    <li className={styles.card}>
        {props.title}
        <form onClick={e => toggleFavorite(e)}>
        <Button className={'transparent'} isFavorite={isFavorite.length > 0} >
            <span className="fa fa-star-o" />
        </Button>
        </form>
    </li>
    );

};
export default Card;