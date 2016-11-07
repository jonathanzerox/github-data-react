import { SEARCH_USERNAME } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {

    case SEARCH_USERNAME:
      return {'userProfile': action.payload[0], 'userRepos': action.payload[1]};
    break

    default:
      return state;
    break
  }
}
