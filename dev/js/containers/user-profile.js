import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  render() {

    if(!this.props.userData) {
      return <div>Search for user Data above</div>
    }

    // get reference to github data through props
    this.data = this.props.userData.userProfile.data;

    return (
      <div className='card'>
        <img className='card-img-top prof-pic' src={ this.data.avatar_url } alt='github user profile image' />
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Name: { this.data.name }</li>
          <li className='list-group-item'>Username: { this.data.login }</li>
          <li className='list-group-item'>Email: { this.data.email }</li>
          <li className='list-group-item'>Location: { this.data.location }</li>
          <li className='list-group-item'>Repositories: { this.data.public_repos }</li>
          <li className='list-group-item'>Followers: { this.data.followers }</li>
          <li className='list-group-item'><a href={ this.data.html_url } target='_blank'>Github Page</a></li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userData: state.githubData
  }
}

export default connect(mapStateToProps)(UserProfile);
