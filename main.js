// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyCX8vZs1c8rwOLyFn9xxrRNIXl9Y6rTE74",
    authDomain: "jpmc-e6d7c.firebaseapp.com",
    databaseURL: "https://jpmc-e6d7c.firebaseio.com",
    projectId: "jpmc-e6d7c",
    storageBucket: "jpmc-e6d7c.appspot.com",
    messagingSenderId: "841228246628",
    appId: "1:841228246628:web:130a59c1ddd8c170248971",
    measurementId: "G-HMXYWHQV0D"
  };
firebase.initializeApp(config);

// Reference messages collection
var schemesRef = firebase.database().ref('schemes');

// Listen for form submit
document.getElementById('schemeForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var desc = getInputVal('desc');
  var gender = getInputVal('gender');
  var fromage = getInputVal('fromage');
  var toage = getInputVal('toage');
  var fromincome = getInputVal('fromincome');
  var toincome = getInputVal('toincome');

  // Save scheme
  saveScheme(name, desc, gender, toage, fromage, fromincome, toincome);

//   // Show alert
//   document.querySelector('.alert').style.display = 'block';

//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);

//   // Clear form
//   document.getElementById('schemeForm').reset();
// }

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save scheme to firebase
function saveScheme(name, desc, gender, toage, fromage, fromincome, toincome){
  var newSchemeRef = schemeRef.push();
  newSchemeRef.set({
    name: name,
    desc:desc,
    gender:gender,
    fromage:fromage,
    toage:toage,
    fromincome:fromincome,
    toincome:toincome
  });
}