const firebaseConfig = {
    apiKey: "AIzaSyBeskH9fXQ-daxXhIfnfkGXpJC3A0jEiXc",
    authDomain: "esp32led-c14b9.firebaseapp.com",
    databaseURL: "https://esp32led-c14b9-default-rtdb.firebaseio.com",
    projectId: "esp32led-c14b9",
    storageBucket: "esp32led-c14b9.appspot.com",
    messagingSenderId: "908855010762",
    appId: "1:908855010762:web:d6799b057b72149c185b33",
    measurementId: "G-LZEZJNS1K4"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
    var database = firebase.database();
	var Led1Status;

	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		if(Led1Status == "1"){    // check from the firebase
			//$(".Light1Status").text("The light is off");
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			//$(".Light1Status").text("The light is on");
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
	});

    $(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");

		if(Led1Status == "1"){    // post to firebase
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
});