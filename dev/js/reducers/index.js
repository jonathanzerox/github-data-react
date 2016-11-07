import { combineReducers } from 'redux';
import { userDataReducer, userNotesReducer } from './list-githubdata';

const combinedReducers = combineReducers({
  githubData: userDataReducer,
  userNotes: userNotesReducer
});

export default combinedReducers;
