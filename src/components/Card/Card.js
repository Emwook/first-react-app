import styles from './Card.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { checkIfFavoriteCard, toggleCardFavorite, deleteCard } from '../../redux/cardsRedux.js';
import Button from '../Button/Button.js';


const Card = (props) =>{
    const dispatch = useDispatch();
    const id = props.id;
    const isFavorite = useSelector(state => checkIfFavoriteCard(state, id));

    const toggleFavorite = e =>{
        e.preventDefault();
        dispatch(toggleCardFavorite( id ));
    };
    
    const deleteCards = e => {
        e.preventDefault();
        dispatch(deleteCard( id ))
    }

   return (
    <li className={styles.card}>
        {props.title}
        <div className={styles.iconBox}>
        <form onClick={e => toggleFavorite(e)}>
        <Button className={'transparent'} isFavorite={isFavorite.length > 0} >
            <span className="fa fa-star-o" />
        </Button>
        </form>
        <form onClick={e => deleteCards(e)}>
        <Button className={'transparent'}>
            <span className="fa fa-trash" />
        </Button>
        </form>
        </div>
    </li>
    );

};
export default Card;