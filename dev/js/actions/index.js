import axios from 'axios';

export const SEARCH_USERNAME = 'SEARCH_USERNAME';

function getUserProfile(url) {
    return axios.get(url);
}

function getUserRepos(repoUrl) {
    return axios.get(repoUrl);
}

export function searchUsername(username) {

    const url = `https://api.github.com/users/${username}`;
    const repoUrl = `${url}/repos`;

    const request = axios.all([ getUserRepos(url), getUserRepos(repoUrl) ]);

    return {
      type: SEARCH_USERNAME,
      payload: request
    }
}
