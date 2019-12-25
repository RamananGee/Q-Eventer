var firebaseConfig = {
    apiKey: "AIzaSyBk07XOLiJ3BRDamzbvzXWXBEyswM7W97A",
    authDomain: "fir-303db.firebaseapp.com",
    databaseURL: "https://fir-303db.firebaseio.com",
    projectId: "fir-303db",
    storageBucket: "fir-303db.appspot.com",
    messagingSenderId: "921216215598",
    appId: "1:921216215598:web:e4dec826a5b82255190dbf",
    measurementId: "G-XXBEWT1PZQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  //Reference messages collection

  var messagesRef = firebase.database().ref('messages');

  


document.getElementById('onformSumbit').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();
    var option = getInputVal("option");
    saveMessage(option);
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(option){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        option:option
    });
}

var reff = firebase.database().ref().child("messages");
reff.on("child_added", snap =>{
    var Option = snap.child("option").val();
    console.log(Option);
    $('#option1').append('<ol>'+Option+'</ol>');
});

// var ref = messagesRef;
//   ref.on('value', gotData);
//   function gotData(data){
//     var option = data.val();
//    console.log(option);

//    for(let key in option)
//   {
//     $('#option1').append('<ol>'+option[key].data+'</ol>');
//     // console.log(arr[key]);
// }
