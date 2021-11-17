// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  const form_values = $('.sampleSurvey').serializeArray();
  // console.log(form_values);
  let output = {};
  for (const entry of form_values) {
    // console.log(entry);
    output[entry['name']] = entry['value'];
  }
  // console.log(output);
  firebase.firestore().collection('hotel_survey').add(output);
});

// update the result in table
firebase
  .firestore()
  .collection('hotel_survey')
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      const data = doc.data();
      let element_id = '';
      switch (data.choice) {
        case 'A':
          element_id = 'ans1';
          break;
        case 'B':
          element_id = 'ans2';
          break;
        case 'C':
          element_id = 'ans3';
          break;
        case 'D':
          element_id = 'ans4';
          break;
        case 'E':
          element_id = 'ans5';
          break;
      }
      // console.log(element_id);
      const element = $('#' + element_id);
      // console.log(element);
      const current_value = parseInt(element.text());
      // console.log(current_value);
      element.text(current_value + 1);
    });
  });
