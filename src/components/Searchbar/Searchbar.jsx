import React, { Component } from "react";
import { SearchbarHeader, SearchForm , SearchFormButton, SearchFormLabel, SearchFormInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    query: '',
  };
  
  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('Enter you want to find.');
      return;
    }
    
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render () {
    return(
      <SearchbarHeader>
        <SearchForm className="form" onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit" className="button">
            <SearchFormLabel className="button-label">
              <ImSearch style={{ marginRight: 8 }} />
            </SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            className="input"
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleQueryChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
        <ToastContainer autoClose={1000} />
      </SearchbarHeader>
    )
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};