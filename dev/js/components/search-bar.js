import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

    this.onUsernameSearch = this.onUsernameSearch.bind(this);
  }

  onUsernameSearch(event) {
    event.preventDefault();

  }

  render() {
    return (
      <nav className='navbar navbar-light bg-faded'>
        <form onSubmit={ this.onUsernameSearch } className='form-container form-inline'>
          <input
            value={ this.state.username }
            onChange={ event => this.setState({username: event.target.value}) }
            className='search-form form-control' placeholder='Enter username' />
          <button className='search-btn btn btn-primary' type='submit'>Search Github</button>
        </form>
      </nav>
    )
  }
}

export default SearchBar;
