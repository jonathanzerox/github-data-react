import axios from 'axios';

export const SEARCH_USERNAME = 'SEARCH_USERNAME';
export const ADD_NOTE = 'ADD_NOTE';

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

export function addNotes(note) {
  return {
    type: ADD_NOTE,
    payload: note
  }
}
