var firebaseConfig = {
  apiKey: 'AIzaSyCS1PqDMSi4sWy-tp9Aj_EBsW0uAmzgM3I',
  authDomain: 'csci225.firebaseapp.com',
  projectId: 'csci225',
  storageBucket: 'csci225.appspot.com',
  messagingSenderId: '590892041114',
  appId: '1:590892041114:web:89aa4fc9f239b8ea683023',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* object examples 
var testJson = {};
testJson["lastname"] = "zhang";
testJson["location"] = "aiken";
console.log(testJson);
*/

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  const form_values = $('form').serializeArray();
  console.log(form_values);

  /* save the data to database */
  const output = {};
  for (const field of form_values)
  {
    output[field["name"]] = field["value"];
  }
  console.log(output);
  firebase.firestore().collection("practice_8").add(output);
  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('practice_8')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
