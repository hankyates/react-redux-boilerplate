import * as constants from '../constants';

export default function users(state = [], action = {}) {
  switch(action.type) {
  case constants.SET_USERS:
    return action.users;
  default:
    return state;
  }
}

