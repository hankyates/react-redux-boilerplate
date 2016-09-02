import FirebaseService from './firebaseService';
import UserService from './userService';

export default function initServices(config) {
  let firebaseService = new FirebaseService(config),
    userService = new UserService(firebaseService);
  return {
    userService
  }
}

