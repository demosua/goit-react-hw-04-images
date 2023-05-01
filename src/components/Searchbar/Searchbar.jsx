import { useState } from "react";
import { SearchbarHeader, SearchForm , SearchFormButton, SearchFormLabel, SearchFormInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter you want to find.');
      return;
    }
    
    onSubmit(query);
    setQuery('');
  };

    return(
      <SearchbarHeader>
        <SearchForm className="form" onSubmit={handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormLabel className="button-label">
              <ImSearch style={{ marginRight: 8 }} />
            </SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            name="query"
            value={query}
            onChange={handleQueryChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
        <ToastContainer autoClose={1000} />
      </SearchbarHeader>
    )
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};