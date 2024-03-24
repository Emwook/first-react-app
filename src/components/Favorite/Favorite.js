//import styles from './Favorite.module.scss';
import { useSelector } from "react-redux";
import PageTitle from "../PageTitle/PageTitle";
import { getFavoriteCards } from "../../redux/store";
import Card from "../Card/Card";
import styles from './Favorite.module.scss';

const Favorite = () => {
    const favoriteCards = useSelector(state => getFavoriteCards(state));

    return(
        <div>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.cards}>
                {favoriteCards.map(card => <Card key={card.id} title={card.title} id={card.id} />)}
            </ul>
        </div>
    );
};

export default Favorite;