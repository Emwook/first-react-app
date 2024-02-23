import styles from './CardForm.module.scss';
import { useState } from 'react';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';

const CardForm = props => {

    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.addCard({ title: title }, props.columnId);
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