import { SEARCH_USERNAME, ADD_NOTE } from '../actions/index';

export function userDataReducer(state = null, action) {
  switch(action.type) {

    case SEARCH_USERNAME:
      return {'userProfile': action.payload[0], 'userRepos': action.payload[1]};
    break

    default:
      return state;
    break
  }
}

export function userNotesReducer(state = null, action) {
  switch(action.type) {

    case ADD_NOTE:
      return !state ? [action.payload] : [action.payload, ...state];
    break

    default:
      return state;
    break;
  }
}
