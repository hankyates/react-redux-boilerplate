export default class UserService {
  constructor(firebaseService) {
    this.firebaseService = firebaseService;
  }
  getAllUsers() {
    return new Promise((resolve, reject) => {
      if (!this.firebaseService) {
        reject('Firebase Service is not Initialized.');
      }
      this.firebaseService.firebase.database()
        .ref('users')
        .once('value')
        .then(v => resolve(v.val()), reject);
    })
  }
}
