import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/books/booksReducer';
import { getFilter } from 'redux/books/booksSelectors';

export default function SearchInput() {
  const dispatch = useDispatch();

  const value = useSelector(getFilter);

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return <input type="text" value={value} onChange={onChange} />;
}
