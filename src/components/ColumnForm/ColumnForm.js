import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux.js';

const ColumnForm = (props) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const listId = props.listId;

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setIcon('');
        setTitle('');
    };

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title: </span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon: </span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;