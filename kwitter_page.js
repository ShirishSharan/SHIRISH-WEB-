var firebaseConfig = {
          apiKey: "AIzaSyBw5FvmHlaPH1o02qQdEKYMVkgHVzluFCI",
          authDomain: "kwitter-33a7d.firebaseapp.com",
          databaseURL: "https://kwitter-33a7d.firebaseio.com",
          projectId: "kwitter-33a7d",
          storageBucket: "kwitter-33a7d.appspot.com",
          messagingSenderId: "230879960972",
          appId: "1:230879960972:web:fe1fe423b5ed1c358480a9"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
      

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
   console.log(message_data);
   name1 = message_data['name'];
   message = message_data['message'];
   like = message_data['like'];
   name_with_tag = "<h4>" + name1 +"<img class + 'user_tick' src='tick.png'><h/4>";
   message_with_tag = "<h4 class='message_h4'>"+ message + "</h4>";
   like_button = "<button class='btn btn-warning' id+"+firebase_message_id+" balue+"+like+" onclick='updateLink(this.id)'>";
   span_with_tag = "<span class+'glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";

   row = name_with_tag + message_with_tag + like_button + span_with_tag;
   dpcument.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
      });
      document.getElementById("msg").value = "";
}


function updateLike(message_id)
{
      console.log("clciked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;
      console.log(updated_links);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}


