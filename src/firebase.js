import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAj_8jTFc64DZFqHvYSvi2Vm_NVe3Embfo",
  authDomain: "movie-list-react.firebaseapp.com",
  databaseURL: "https://movie-list-react.firebaseio.com",
  projectId: "movie-list-react",
  storageBucket: "movie-list-react.appspot.com",
  messagingSenderId: "460892693554"
};

firebase.initializeApp(config);

export default firebase;