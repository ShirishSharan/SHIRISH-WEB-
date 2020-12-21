user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome - "+ user_name + "!";
var firebaseConfig = {
  apiKey: "AIzaSyCHdpzkoGVFwQSaY80-iIjxVVtkbn8nXc4",
  authDomain: "sc-web-d9352.firebaseapp.com",
  databaseURL: "https://sc-web-d9352.firebaseio.com",
  projectId: "sc-web-d9352",
  storageBucket: "sc-web-d9352.appspot.com",
  messagingSenderId: "646869777863",
  appId: "1:646869777863:web:b61e98dd024634f42c6de2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name" , room_name);

window.location = "kwitter_page.html";

}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >@ "+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
 