import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import styles from './ListForm.module.scss';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from '../../redux/listsRedux.js'


const ListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setDescription('');
        setTitle('');
    };

	return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span>Title: </span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span>Description: </span><TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add List</Button>
        </form>
	);
};

export default ListForm;