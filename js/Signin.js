const firebaseConfig = {
  apiKey: 'AIzaSyCS1PqDMSi4sWy-tp9Aj_EBsW0uAmzgM3I',
  authDomain: 'csci225.firebaseapp.com',
  projectId: 'csci225',
  storageBucket: 'csci225.appspot.com',
  messagingSenderId: '590892041114',
  appId: '1:590892041114:web:89aa4fc9f239b8ea683023',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  const email = $('#login').val();
  const password = $('#pwd').val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
