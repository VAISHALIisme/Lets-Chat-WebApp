var firebaseConfig = {
      apiKey: "AIzaSyAb3u4Fipid4mdvsIdDHeTmKxm0-zO5gFI",
      authDomain: "let-s-chat-webapp-1e14b.firebaseapp.com",
      databaseURL: "https://let-s-chat-webapp-1e14b-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-webapp-1e14b",
      storageBucket: "let-s-chat-webapp-1e14b.appspot.com",
      messagingSenderId: "94908238974",
      appId: "1:94908238974:web:4a94389d37d026200f1c2f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " ! ";

function getData() { 
      firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
            Room_names = childKey;
             console.log("Room Name - " + Room_names);
             row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
             document.getElementById("output").innerHTML += row; });
             }); 
 }

 getData();

 function redirectToRoomName(name){
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location="kwitter_page.html";
 }

 function logout(){
       localStorage.removeItem(user_name);
       localStorage.removeItem(room_name);
       window.location="index.html";
 }