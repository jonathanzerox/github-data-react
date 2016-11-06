import { combineReducers } from 'redux';
import GithubUsernameData from './list-githubdata';

const combinedReducers = combineReducers({
  githubData: GithubUsernameData
});

export default combinedReducers;
