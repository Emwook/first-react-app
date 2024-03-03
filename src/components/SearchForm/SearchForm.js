import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const SearchForm = () => {
    const dispatch = useDispatch();
    const searchKey = useSelector(state => state.searchKey);
    const [localKey, setLocalKey] = useState(searchKey);

    const findKey = e =>{
        e.preventDefault();
        dispatch({ type: 'CHANGE_SEARCH_KEY', payload: { searchKey: localKey } });
        setLocalKey('');
    };

    return (
        <form className={styles.searchForm} onSubmit={e => {findKey(e)}}>
            <TextInput value={localKey} onChange={e => {setLocalKey(e.target.value);}} placeholder={'search...'}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

export default SearchForm;