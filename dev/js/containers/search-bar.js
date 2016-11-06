import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchUsername } from '../actions/index';

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

    this.props.searchUsername(this.state.username);

    // clear username from input
    this.setState({username: ''});
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    searchUsername
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
