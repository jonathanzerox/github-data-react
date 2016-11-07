import React from 'react';
import SearchBar from '../containers/search-bar';
import UserProfile from '../containers/user-profile';

// Require Styling
require('../../scss/style.scss');

const App = () => {
  return (
    <div>
      <SearchBar />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <UserProfile />
          </div>

          <div className='col-md-4'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
