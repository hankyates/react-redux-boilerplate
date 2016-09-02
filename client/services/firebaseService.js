import firebase, {initializeApp} from 'firebase';

export default class FirebaseService {
  constructor(config) {
    this.config = config;
    this.firebase = firebase.apps.length > 0 ? firebase.apps[0] : initializeApp(this.config.firebase); // eslint-disable-line no-magic-numbers
  }
}

