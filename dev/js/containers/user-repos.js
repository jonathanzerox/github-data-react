import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserRepos extends Component {

  listRepos() {
    return this.props.repoData.userRepos.data.map((repo) => {
      return (
        <li key={ repo.id } className='list-group-item'>
          <h5 className='repo-name'>
            <a href={ repo.html_url } target='_blank'>{repo.name}</a>
          </h5>
          { repo.description }
        </li>
      );
    });
  }

  render() {

    if(!this.props.repoData) {
      return <div></div>
    } else {
      console.log(this.props.repoData.userRepos)
    }

    return (
      <div className='card'>
        <ul className='list-group list-group-flush'>
          { this.listRepos() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    repoData: state.githubData
  }
}

export default connect(mapStateToProps)(UserRepos);
