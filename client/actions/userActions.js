import * as constants from '../constants';

export function setUsers(users) {
  return {
    type: constants.SET_USERS,
    users
  }
}
