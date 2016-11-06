import { SEARCH_USERNAME } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {

    case SEARCH_USERNAME:
      console.log(action.payload);
    break

    default:
      return state;
    break
  }
}
