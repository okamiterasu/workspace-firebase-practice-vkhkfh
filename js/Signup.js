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

const form = $('#signup-form');

// save the data
$('#signup-form').submit(function (e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code

  const email = $("#signup-form input[name='username'").val();
  const password = $("#signup-form input[name='password'").val();
  // var email = 'yilianz4@gmail.com';
  // var password = 'ddsgagafda';

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...

      console.log('You are signed up');
      window.location.href = 'Login.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});

$('#google').click(function () {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(result);
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(error);
    });
});
