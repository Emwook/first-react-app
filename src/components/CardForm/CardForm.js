import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';

const CardForm = (props) => {
    const dispatch = useDispatch();
    
    const columnId = props.columnId
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_CARD', payload: { title, columnId } });
        setTitle('');
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title: </span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default CardForm;