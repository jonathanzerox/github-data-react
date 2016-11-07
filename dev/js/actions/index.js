import axios from 'axios';

export const SEARCH_USERNAME = 'SEARCH_USERNAME';

export function searchUsername(username) {

    // Get github user details
    const url = `https://api.github.com/users/${username}`;
    const request = axios.get(url);

    // Get user repositories
    // const repoUrl = 

    return {
      type: SEARCH_USERNAME,
      payload: request
    }
}
