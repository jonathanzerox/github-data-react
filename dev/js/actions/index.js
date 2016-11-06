import axios from 'axios';

export const SEARCH_USERNAME = 'SEARCH_USERNAME';

export function searchUsername(username) {

    const url = `https://api.github.com/users/${username}`;
    const request = axios.get(url);

    return {
      type: SEARCH_USERNAME,
      payload: request
    }
}
