import React from 'react';
import SearchBar from '../containers/search-bar';
import UserProfile from '../containers/user-profile';
import UserRepos from '../containers/user-repos';
import UserNotes from '../containers/user-notes';

require('../../scss/style.scss');

const App = () => {
  return (
    <div>
      <SearchBar />
      <div className='container'>
        <div className='row github-content'>
          <div className='col-md-4'>
            <h4>User Profile</h4>
            <UserProfile />
          </div>

          <div className='col-md-4'>
            <h4>User Repos</h4>
            <UserRepos />
          </div>

          <div className='col-md-4'>
            <h4>Notes for jonathan</h4>
            <UserNotes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
